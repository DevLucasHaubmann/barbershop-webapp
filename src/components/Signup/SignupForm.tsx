import './Signup.css';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { createUser } from '../../services/UserService';

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

    const [error, setError] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const extractedDDD = formData.phoneNumber.toString().slice(0, 2);
        const extractedNumber = formData.phoneNumber.toString().slice(2);

        e.preventDefault();
        setStatus('Submitting...');
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('');
            setStatus('Passwords do not match');
            
            return;
        }

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
            setStatus('Registration successful!');
        } catch (err) {
            setError((err as Error).toString());
            setStatus('');
        }
    };

    return (
        <form className="signup-wrapper" onSubmit={handleSubmit}>

            <div className="card shadow-lg p-5 w-100" style={{ maxWidth: '500px', borderRadius: '15px' }}>

                <div className="text-center mb-4">
                    <h2 className="fw-bold custom-green-text custom-title">Sign Up</h2>
                </div>

                {error && (
                    <div className="alert alert-danger text-center" role="alert">
                        {error}
                    </div>
                )}

                {status && !error && (
                    <div className="alert alert-info text-center" role="alert">
                        {status}
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
                        <input name="password" value={formData.password} onChange={handleChange} type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-key-fill text-secondary"></i>
                        </span>
                        <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" className="form-control" placeholder="Confirm Password" />
                    </div>

                    <div className="input-group">
                        <span className="input-group-text bg-light">
                            <i className="bi bi-telephone-fill text-secondary"></i>
                        </span>
                        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="number" className="form-control" placeholder="Phone Number" />
                    </div>

                </div>

                <div className="mt-4 mb-4 text-muted">
                    Already Have An Account? <span className="custom-green-text span-link fw-bold text-decoration-none" style={{ cursor: 'pointer' }}>Sign In!</span>
                </div>

                <button className="btn custom-green-btn w-100 py-2 fw-bold" style={{ borderRadius: '8px' }}>
                    Sign Up
                </button>

            </div>
        </form>
    );
};

export default Signup;