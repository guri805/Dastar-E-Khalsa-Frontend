'use client';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import { ParticipantValidation } from '../action/participantValidation';
import { useState, useEffect } from 'react';

const FormComponent = () => {
    const router = useRouter();
    const [state, action, pending] = useActionState(ParticipantValidation, undefined);
    const errors = state?.errors;

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

    return (
        <form action={action}>
            <div className="form-data">
                <label>ਨਾਮ (NAME):</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                {errors?.fullName && <p className="error">{errors.fullName[0]}</p>}

                <label>ਉਮਰ (AGE):</label>
                <input type="text" name="age" value={formData.age} onChange={handleChange} required />
                {errors?.age && <p className="error">{errors.age[0]}</p>}

                <label>ਲਿੰਗ (GENDER):</label>
                <div>
                    <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} required /> Male
                    <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} required /> Female
                </div>
                {errors?.gender && <p className="error">{errors.gender[0]}</p>}

                <label>ਪਿਤਾ ਦਾ ਨਾਮ (Father's Name):</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                {errors?.fatherName && <p className="error">{errors.fatherName[0]}</p>}

                <label>ਪਤਾ (Address):</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                {errors?.address && <p className="error">{errors.address[0]}</p>}

                <label>ਸ਼ਹਿਰ (Hometown):</label>
                <input type="text" name="hometown" value={formData.hometown} onChange={handleChange} required />
                {errors?.hometown && <p className="error">{errors.hometown[0]}</p>}

                <label>WhatsApp ਨੰਬਰ (WhatsApp Number):</label>
                <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required />
                {errors?.whatsappNumber && <p className="error">{errors.whatsappNumber[0]}</p>}

                <label>ਈਮੇਲ (Email):</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                {errors?.email && <p className="error">{errors.email[0]}</p>}

                <label>ਸਕੂਲ ਜਾਂ ਕਾਲਜ (School or College):</label>
                <input type="text" name="schoolOrCollege" value={formData.schoolOrCollege} onChange={handleChange} required />
                {errors?.schoolOrCollege && <p className="error">{errors.schoolOrCollege[0]}</p>}

                <label>ਮੁਕਾਬਲਾ (COMPETITION):</label>
                <div>
                    <input type="radio" name="competition" value="turban" checked={formData.competition === 'turban'} onChange={handleChange} required /> Turban
                    <input type="radio" name="competition" value="dumala" checked={formData.competition === 'dumala'} onChange={handleChange} required /> Dumala
                </div>
                {errors?.competition && <p className="error">{errors.competition[0]}</p>}

                <label>ਗਰੁੱਪ (Group):</label>
                <div>
                    <input type="radio" name="group" value="junior" checked={formData.group === 'junior'} onChange={handleChange} required /> Junior
                    <input type="radio" name="group" value="senior" checked={formData.group === 'senior'} onChange={handleChange} required /> Senior
                    <input type="radio" name="group" value="expert" checked={formData.group === 'expert'} onChange={handleChange} required /> Expert
                </div>
                {errors?.group && <p className="error">{errors.group[0]}</p>}
            </div>

            <button type="submit" disabled={pending}>
                {pending ? 'Submitting...' : 'Submit'}
            </button>
            {state?.success && <p className="success">{state.message}</p>}
        </form>
    );
};

export default FormComponent;
