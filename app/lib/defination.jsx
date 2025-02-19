import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .nonempty("Email is required"),
    password: z
        .string()
        .min(4, "Password must be at least 8 characters long")
        .nonempty("Password is required"),
});

export const ParticipantFormValidationSchema = z.object({
    fullName: z.string()
        .nonempty({ message: "Name is required" })
        .min(3, { message: "Full name must be at least 3 characters long" })
        .max(50, { message: "Full name must not exceed 50 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Full name can only contain letters and spaces" }),

    age: z.coerce.number()
        .int({ message: "Age contains only number" })
        .min(5, { message: "Minimum age is 5 years" })
        .max(25, { message: "Age above 25 are not eligble for competition" }),

    gender: z.enum(["Male", "Female"], { message: "Gender must be 'Male' or 'Female'" }),

    fatherName: z.string()
        .nonempty({ message: "Father's name is required" })
        .min(3, { message: "Father's name must be at least 3 characters long" })
        .max(50, { message: "Father's name must not exceed 50 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Father's name can only contain letters and spaces" }),

    address: z.string()
        .nonempty({ message: "Address is required" })
        .max(255, { message: "Address must not exceed 255 characters" }),

    hometown: z.string()
        .nonempty({ message: "Hometown is required" })
        .max(100, { message: "Hometown must not exceed 100 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "Hometown can only contain letters and spaces" }),

    whatsappNumber: z.string()
        .nonempty({ message: "WhatsApp number is required" })
        .regex(/^[6-9]\d{9}$/, { message: "WhatsApp number must be a valid 10-digit number starting with 6-9" }),

    email: z.string()
        .email({ message: "Invalid email format" })
        .max(100, { message: "Email must not exceed 100 characters" }),

    schoolOrCollege: z.string()
        .nonempty({ message: "School/College is required" })
        .max(100, { message: "School/College name must not exceed 100 characters" })
        .regex(/^[a-zA-Z\s]+$/, { message: "School/College name can only contain letters and spaces" }),

    competition: z.string()
        .nonempty({ message: "Category is required" }),

    group: z.string()
        .nonempty({ message: "Subcategory is required" }),
})