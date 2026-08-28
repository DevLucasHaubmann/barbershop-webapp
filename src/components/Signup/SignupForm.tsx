import { useState, type ChangeEvent, type FormEvent } from 'react';
import { createUser } from '../../services/UserService';
import { PasswordInput } from '../utils/PasswordInput';
import { extractServerErrorMessage, type Feedback } from '../../utils/ApiFeedback';
import './Signup.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[1-9]{2}9?[0-9]{8}$/;

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
}

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

        setFeedback({ type: 'info', message: 'Submitting your registration...' });

        try {
            await createUser({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                phoneNumber: formData.phoneNumber
            });

            setFeedback({ 
                type: 'success', 
                message: 'Registration successful! Welcome aboard.' 
            });
        } catch (err: unknown) {
            const errorMessage = extractServerErrorMessage(
                err, 
                'An unexpected error occurred. Please try again.'
            );
            setFeedback({ type: 'error', message: errorMessage });
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
                        <PasswordInput name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" placeholder="Password" />
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