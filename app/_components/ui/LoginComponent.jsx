"use client";
import { useRouter } from "next/navigation";
import { login } from "../../action/auth";
import { useActionState, useEffect } from "react";

const LoginComponent = () => {
    const router = useRouter();

    // Manage the login action state
    const [state, action, pending] = useActionState(login, undefined);
    const errors = state?.errors;

    // Redirect to the profile page after successful login
    useEffect(() => {
        if (state?.success) {
            router.push("/");
        }
    }, [state?.success, router]);

    return (
        <div className="form-main flex items-center justify-center min-h-[78%]">
            <form action={action} className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Admin Login</h2>

                {/* Show General Error */}
                {errors?.general && <p className="text-red-500 text-center mb-4">{errors.general[0]}</p>}

                {/* Email Input */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-colors-customYellow"
                    />
                    {errors?.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                </div>
                
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={pending}
                    className={`w-full py-2 bg-colors-customYellow text-white font-semibold rounded-lg focus:outline-none ${
                        pending ? "cursor-not-allowed" : ""
                    }`}
                >
                    {pending ? "Logging in..." : "Login"}
                </button>

                {/* Success message */}
                {state?.success && <p className="text-green-500 text-sm mt-4 text-center">{state.message}</p>}
            </form>
        </div>
    );
};

export default LoginComponent;
