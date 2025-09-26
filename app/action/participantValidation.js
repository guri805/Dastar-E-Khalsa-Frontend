"use server";

import axios from "axios";
import { ParticipantFormValidationSchema } from "../lib/defination";
import { redirect } from "next/navigation";

export const ParticipantValidation = async (state, formData) => {
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
        return { errors: validatedParticipantForm.error.flatten().fieldErrors };
    }

    const { gender, competition, age, group } = validatedParticipantForm.data;
    if (gender === 'Female' && competition === 'turban') {
        return { success: false, errors: { competition: ["Females are not eligible for the turban competition."] } };
    }
    if (age >= 5 && age <= 15 && (group === 'senior' || group === 'expert')) {
        return { success: false, errors: { group: ["Participants aged 5 to 15 are not eligible for senior or expert group."] } };
    }
    if (age > 15 && group === 'junior') {
        return { success: false, errors: { group: ["Participants above 15 are not eligible for junior group."] } };
    }

    try {
        const categoryResponse = await axios.post("http://localhost:3001/category", { competition });
        if (!categoryResponse.data.success) return { success: false, errors: "Error creating or fetching category" };

        const categoryId = categoryResponse.data.category._id;
        const subcategoryResponse = await axios.post("http://localhost:3001/subcategory", { categoryId, group });
        if (!subcategoryResponse.data.success) return { success: false, errors: "Error creating or fetching subcategory" };

        const subcategoryId = subcategoryResponse.data.subcategory._id;
        const response = await axios.post("http://localhost:3001/participantdata", { ...validatedParticipantForm.data, categoryId, subcategoryId });
        if (!response.data.success) return { success: false, errors: "Error submitting participant data" };

        // Redirect after successful submission
        // redirect(`/participantdetails/${response.data.participant.fullName}`);
        console.log("backend response data", response.data);
        
        return { success: true, message: "Form submitted successfully!", data: response.data.participant };
    } catch (error) {
        console.error("Submission Error:", error.response?.data || error.message);
        return { success: false, errors: error.response?.data || error.message };
    }
};
