'use client'
import axios from 'axios';
import { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        gender: '',
        fatherName: '',
        address: '',
        hometown: '',
        whatsappNumber: '',
        email: '',
        schoolOrCollege: '',
        competition: '',
        group: '',
    });

    const fields = [
        {
            label: "ਨਾਮ (NAME)",
            type: "text",
            name: "fullName",
            value: formData.fullName,
            required: true,
        },
        {
            label: "ਉਮਰ (AGE)",
            type: "text",
            name: "age",
            value: formData.age,
            required: true,
        },
        {
            label: "ਲਿੰਗ (GENDER)",
            type: "radio",
            name: "gender",
            options: [
                "Male",
                "Female"
            ],
            value: formData.gender,
            required: true,
        },
        {
            label: "ਪਿਤਾ ਦਾ ਨਾਮ (FATHER'S NAME)",
            type: "text",
            name: "fatherName",
            value: formData.fatherName,
            required: true,
        },
        {
            label: "ਪਤਾ (ADDRESS)",
            type: "text",
            name: "address",
            value: formData.address,
            required: true,
        },
        {
            label: "ਗ੍ਰਾਮ (HOMETOWN)",
            type: "text",
            name: "hometown",
            value: formData.hometown,
            required: true,
        },
        {
            label: "ਵਟਸਐਪ ਨੰਬਰ (WHATSAPP NUMBER)",
            type: "tel",
            name: "whatsappNumber",
            value: formData.whatsappNumber,
            required: true,
        },
        {
            label: "ਈਮੇਲ (EMAIL)",
            type: "email",
            name: "email",
            value: formData.email,
            required: true,
        },
        {
            label: "ਸਕੂਲ ਅਤੇ ਕਾਲਜ (SCHOOL & COLLEGE)",
            type: "text",
            name: "schoolOrCollege",
            value: formData.schoolOrCollege,
            required: true,
        },
        {
            label: "ਮੁਕਾਬਲਾ (COMPETITION)",
            type: "radio",
            name: "competition",
            options: ["Turban", "Dumala"],
            value: formData.competition,
            required: true,
        },
        {
            label: "ਗਰੁੱਪ (Group)",
            type: "radio",
            name: "group",
            options: ["Junior", "Senior", "Expert"],
            value: formData.group,
            required: true,
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FormData submitted:", formData);

        try {
            // First, create or fetch the category based on competition
            const categoryResponse = await axios.post("http://localhost:3001/category", {
                competition: formData.competition,
            });

            // Check if the category was created or fetched successfully
            if (categoryResponse.data.success) {
                console.log("Category created or already exists:", categoryResponse.data.category);

                // Create or fetch the subcategory (group)
                const subcategoryResponse = await axios.post("http://localhost:3001/subcategory", {
                    categoryId: categoryResponse.data.category._id, // Send category ID to create subcategory
                    group: formData.group, // Send the group (Junior, Senior, Expert)
                });

                // Check if subcategory was created or fetched successfully
                if (subcategoryResponse.data.success) {
                    console.log("Subcategory created or already exists:", subcategoryResponse.data.subcategory);

                    // Now, create the participant with the categoryId and subcategoryId
                    const response = await axios.post("http://localhost:3001/particantdata", {
                        ...formData,
                        categoryId: categoryResponse.data.category._id, // Send the categoryId
                        subcategoryId: subcategoryResponse.data.subcategory._id, // Send the subcategoryId
                    });

                    // Check if the participant was successfully created
                    if (response.data.success) {
                        alert("Form submitted successfully!");
                        setFormData({
                            fullName: '',
                            age: '',
                            gender: '',
                            fatherName: '',
                            address: '',
                            hometown: '',
                            whatsappNumber: '',
                            email: '',
                            schoolOrCollege: '',
                            competition: '',
                            group: '',
                        });
                    } else {
                        alert("Error submitting form. Please try again.");
                    }
                } else {
                    alert("Error creating subcategory. Please try again.");
                }
            } else {
                alert("Error creating category. Please try again.");
            }
        } catch (error) {
            console.log("Error:", error.response ? error.response.data : error.message);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-data">
                {fields.map((field, index) => (
                    <div
                        key={index}
                        className="form-input flex flex-col gap-2 bg-white rounded-xl px-6 py-8 border my-4"
                    >
                        <label htmlFor={field.name}>
                            <h4 className="inline">{field.label}</h4>
                            <span className="text-red-600 ms-[1px] ">*</span>
                        </label>

                        {/* Text, Number, Tel, Email Inputs */}
                        {["text", "number", "tel", "email"].includes(field.type) && (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                className="border-b-2 border-gray-300 mt-2 focus:border-b-2 focus:border-colors-customYellow focus:outline-none w-[50%]"
                                value={field.value}
                                onChange={handleChange}
                                required={field.required}
                            />
                        )}

                        {/* Radio Buttons for Gender or Competition */}
                        {field.type === "radio" && (
                            <div className="flex flex-col gap-3 mt-2">
                                {field.options.map((option, idx) => (
                                    <label key={idx} className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name={field.name}
                                            value={option}
                                            checked={field.value === option}
                                            onChange={handleChange}
                                            className="mr-2"
                                            required={field.required}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className="bg-colors-customYellow text-white py-2 px-5 font-bold text-md rounded-xl mt-4"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default FormComponent;
