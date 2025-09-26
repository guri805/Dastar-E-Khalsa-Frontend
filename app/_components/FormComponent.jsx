'use client';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { ParticipantValidation } from '../action/participantValidation';
import { useState, useEffect } from 'react';
import ParticipantDetails from './Common/ParticipantDetails';

const FormComponent = () => {
    const router = useRouter();
    const [state, action, pending] = useActionState(ParticipantValidation, undefined);
    const errors = state?.errors;
    const success = state?.success

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Reset form when submission is successful
    useEffect(() => {
        if (state?.success) {
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
        }
    }, [state]);

    console.log("client form state", state?.data);

    return (
        <>
            {
                success ? (
                    <div>
                        {success && <ParticipantDetails participant={state?.data} />}
                    </div>

                )
                    :

                    (<form action={action} >
                        <h2 className="text-center text-lg font-bold underline pb-2">ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਫਾਰਮ(Registration Form)</h2>
                        <div className="form-data grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label className="block mb-1 text-sm font-semibold">ਨਾਮ (NAME)</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="block w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors?.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName[0]}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-semibold">ਉਮਰ (AGE)</label>
                                <input
                                    type="text"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                    className="block w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {errors?.age && <p className="text-red-500 text-xs mt-1">{errors.age[0]}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਪਿਤਾ ਦਾ ਨਾਮ (Father's Name)</label>
                                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required className="p-1 border rounded-md w-full" />
                                {errors?.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName[0]}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਸਕੂਲ ਜਾਂ ਕਾਲਜ (School or College)</label>
                                <input type="text" name="schoolOrCollege" value={formData.schoolOrCollege} onChange={handleChange} required className="p-1 border rounded-md w-full" />
                                {errors?.schoolOrCollege && <p className="text-red-500 text-sm mt-1">{errors.schoolOrCollege[0]}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਪਤਾ (Address)</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} required className="p-1 border rounded-md w-full" />
                                {errors?.address && <p className="text-red-500 text-sm mt-1">{errors.address[0]}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਸ਼ਹਿਰ (Hometown)</label>
                                <input type="text" name="hometown" value={formData.hometown} onChange={handleChange} required className="p-1 border rounded-md w-full" />
                                {errors?.hometown && <p className="text-red-500 text-sm mt-1">{errors.hometown[0]}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਈਮੇਲ (Email)</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-1 border rounded-md w-full" />
                                {errors?.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਵਟਸਐਪ ਨੰਬਰ (WhatsApp Number)</label>
                                <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required className="p-1 border rounded-md w-full" />
                                {errors?.whatsappNumber && <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber[0]}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਲਿੰਗ (GENDER)</label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
                                    </label>
                                </div>
                                {errors?.gender && <p className="text-red-500 text-sm mt-1">{errors.gender[0]}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਮੁਕਾਬਲਾ (COMPETITION)</label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="competition" value="turban" checked={formData.competition === 'turban'} onChange={handleChange} required /> Turban
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="competition" value="dumala" checked={formData.competition === 'dumala'} onChange={handleChange} required /> Dumala
                                    </label>
                                </div>
                                {errors?.competition && <p className="text-red-500 text-sm mt-1">{errors.competition[0]}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 text-sm font-semibold">ਗਰੁੱਪ (Group)</label>
                                <div className="flex gap-2">
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="group" value="junior" checked={formData.group === 'junior'} onChange={handleChange} required /> Junior
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="group" value="senior" checked={formData.group === 'senior'} onChange={handleChange} required /> Senior
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="group" value="expert" checked={formData.group === 'expert'} onChange={handleChange} required /> Expert
                                    </label>
                                </div>
                                {errors?.group && <p className="text-red-500 text-sm mt-1">{errors.group[0]}</p>}
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <button type="submit" disabled={pending} className="px-3 py-1 bg-colors-customYellow text-white rounded-md disabled:bg-yellow-300 md:max-w-[40%] md:w-[40%] max-w-[20%]
                                w-[20%] font-semibold md:text-lg">
                                    {pending ? 'Submitting...' : 'Submit'}
                                </button>
                                {state?.success && <p className="text-green-600 text-sm mt-2">{state.message}</p>}
                            </div>
                        </div>
                    </form>)
            }


        </>
    );
};

export default FormComponent;
