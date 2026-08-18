import { useState } from 'react';
import { PasswordInput } from '../utils/PasswordInput';
import { Link } from 'react-router-dom';
import '../../style/signin-form.css';

export function Signin() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form className="signup-wrapper" onSubmit={handleSubmit}>
            <div className="card shadow-lg p-5 w-100 signin-card d-flex flex-column gap-5" style={{ maxWidth: '500px', borderRadius: '15px' }}>
                
                <div className="text-center">
                    <h2 className="fw-bold custom-green-text custom-title mb-3">Sign In</h2>
                    <p className="text-muted fs-5 mb-0">Welcome back! Please enter your details.</p>
                </div>
            
                <div className="d-flex flex-column gap-4">
                    
                    <div className="d-flex flex-column gap-3">
                        <div className="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-light px-4">
                                <i className="bi bi-envelope-at-fill text-secondary"></i>
                            </span>
                            <input 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                type="email" 
                                className="form-control" 
                                placeholder="Email address" 
                            />
                        </div>
                        
                        <div className="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-light px-4">
                                <i className="bi bi-key-fill text-secondary"></i>
                            </span>
                            <PasswordInput 
                                name="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                className="form-control" 
                                placeholder="Password" 
                            />
                        </div>
                    </div>
                    
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-muted gap-2">
                        <div>
                            New here? <Link to="/auth/register" className="custom-green-text span-link fw-bold text-decoration-none">Sign Up!</Link>
                        </div>
                        <div>
                            <Link to="/auth/forgot-password" className="text-secondary span-link text-decoration-none fw-medium">Forgot your password?</Link>
                        </div>
                    </div>
                </div>
                
                <button type="submit" className="btn custom-green-btn btn-lg w-100 py-2 fw-bold shadow-sm" style={{ borderRadius: '8px' }}>
                    Sign In
                </button>
                
            </div>
        </form>
    );
}

export default Signin;