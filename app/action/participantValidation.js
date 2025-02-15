"use server";

import axios from "axios";
import { ParticipantFormValidationSchema } from "../lib/defination";

export const ParticipantValidation = async (state, formData) => {
    // Validate input fields using Zod schema
    const validatedParticipantForm = ParticipantFormValidationSchema.safeParse({
        fullName: formData.get("fullName"),
        age: formData.get("age"),
        gender: formData.get("gender"),
        fatherName: formData.get("fatherName"),
        address: formData.get("address"),
        hometown: formData.get("hometown"),
        whatsappNumber: formData.get("whatsappNumber"),
        email: formData.get("email"),
        schoolOrCollege: formData.get("schoolOrCollege"),
        competition: formData.get("competition"),
        group: formData.get("group"),
    });

    if (!validatedParticipantForm.success) {
        return {
            errors: validatedParticipantForm.error.flatten().fieldErrors,
        };
    }


    try {
        console.log("Validated Form Data:", validatedParticipantForm.data);
        const { competition, group } = validatedParticipantForm.data;

        // Fetch or create the category
        const categoryResponse = await axios.post("http://localhost:3001/category", { competition });
        if (!categoryResponse.data.success) {
            return { errors: { general: ["Error creating or fetching category"] } };
        }

        const categoryId = categoryResponse.data.category._id;
        console.log("Category:", categoryResponse.data.category);

        // Fetch or create the subcategory
        const subcategoryResponse = await axios.post("http://localhost:3001/subcategory", { categoryId, group });
        if (!subcategoryResponse.data.success) {
            return { errors: { general: ["Error creating or fetching subcategory"] } };
        }

        const subcategoryId = subcategoryResponse.data.subcategory._id;
        console.log("Subcategory:", subcategoryResponse.data.subcategory);

        // Create the participant
        const response = await axios.post("http://localhost:3001/particantdata", {
            ...validatedParticipantForm.data,
            categoryId,
            subcategoryId,
        });

        if (!response.data.success) {
            return { errors: { general: ["Error submitting participant data"] } };
        }

        console.log("Form submitted successfully!");
        return { success: true, message: "Form submitted successfully!" };
    } catch (error) {
        console.error("Submission Error:", error.response?.data || error.message);
        return { errors: { general: ["An error occurred. Please try again later."] } };
    }
};