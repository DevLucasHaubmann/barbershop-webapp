import { useState, type ChangeEvent, type FormEvent } from 'react';
import { isAxiosError } from 'axios';
import { createUser } from '../../services/UserService';
import { PasswordInput } from '../utils/PasswordInput';
import { getApiFeedback, type Feedback } from '../../utils/ApiFeedback';
import './Signup.css';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[1-9]{2}9?[0-9]{8}$/;

const Signup = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    });

    const [feedback, setFeedback] = useState<Feedback | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const hasEmptyFields = Object.values(formData).some((value) => value.trim() === '');
        if (hasEmptyFields) {
            setFeedback({ type: 'error', message: 'Please fill in all fields.' });
            return;
        }

        if (!EMAIL_REGEX.test(formData.email)) {
            setFeedback({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        if (!PHONE_REGEX.test(formData.phoneNumber)) {
            setFeedback({ type: 'error', message: 'Please enter a valid phone number with DDD.' });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setFeedback({ type: 'error', message: 'Passwords do not match.' });
            return;
        }

        const extractedDDD = formData.phoneNumber.slice(0, 2);
        const extractedNumber = formData.phoneNumber.slice(2);

        setFeedback({ type: 'info', message: 'Submitting your registration...' });

        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
            ddd: extractedDDD,
            phoneNumber: extractedNumber
        };

        try {
            const result = await createUser(payload);
            const statusCode = result.status || 201;
            setFeedback(getApiFeedback(statusCode));
        } catch (err: unknown) {
            if (isAxiosError(err)) {
                if (err.response?.status) {
                    setFeedback(getApiFeedback(err.response.status));
                } else if (err.request) {
                    setFeedback({ type: 'error', message: 'Network error. Please check your connection and try again.' });
                } else {
                    setFeedback({ type: 'error', message: err.message });
                }
            } 
            else if (typeof err === 'object' && err !== null && 'message' in err) {
                const customErr = err as { message: string };
                setFeedback({ type: 'error', message: customErr.message });
            } 
            else {
                setFeedback({ type: 'error', message: 'An unexpected error occurred.' });
            }
        }
    };

    const alertColor = feedback?.type === 'error' ? 'danger' : feedback?.type;

    return (
        <form className="signup-wrapper" onSubmit={handleSubmit}>
            <div className="card shadow-lg p-5 w-100" style={{ maxWidth: '500px', borderRadius: '15px' }}>
                
                <div className="text-center mb-4">
                    <h2 className="fw-bold custom-green-text custom-title">Sign Up</h2>
                </div>

                {feedback && (
                    <div className={`alert alert-${alertColor} text-center`} role="alert">
                        {feedback.message}
                    </div>
                )}

                <div className="d-flex flex-column gap-3">
                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-person-circle text-secondary"></i>
                        </span>
                        <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="form-control" placeholder="First Name" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-person-circle text-secondary"></i>
                        </span>
                        <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-envelope-at-fill text-secondary"></i>
                        </span>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" className="form-control" placeholder="Email" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-key-fill text-secondary"></i>
                        </span>
                        <PasswordInput name="password" value={formData.password} onChange={handleChange} className="form-control" placeholder="Password" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-key-fill text-secondary"></i>
                        </span>
                        <PasswordInput name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" placeholder="Confirm Password" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-telephone-fill text-secondary"></i>
                        </span>
                        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="tel" className="form-control" placeholder="Phone Number" />
                    </div>
                </div>

                <div className="mt-4 mb-4 text-muted">
                    Already Have An Account? <span className="custom-green-text span-link fw-bold text-decoration-none" style={{ cursor: 'pointer' }}>Sign In!</span>
                </div>

                <button type="submit" className="btn custom-green-btn w-100 py-2 fw-bold" style={{ borderRadius: '8px' }}>
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default Signup;