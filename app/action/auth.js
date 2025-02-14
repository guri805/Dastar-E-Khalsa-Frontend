"use server";
import axios from "axios";
import { loginFormSchema } from "../lib/defination";
import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";

export const login = async (state, formData) => {
    // Validate form data using schema
    const validatedFields = loginFormSchema.safeParse({
        email: formData.get("email"),
    });

    try {
        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const { email } = validatedFields.data;
        console.log("Login Attempt:", validatedFields.data);

        const response = await axios.post("http://localhost:3001/login", { email });

        if (response.data.success) {
            const userId = response.data.user.email;
            await createSession(userId);
            return { success: true, message: "Login successful!" };
        } else {
            return { errors: { general: ["Invalid email"] } };
        }
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        return { errors: { general: ["Unexpected error occurred during login"] } };
    }
};

// Logout function
export async function logout() {
    await deleteSession();
    redirect("/");
}
