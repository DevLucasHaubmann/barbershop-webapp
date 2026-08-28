import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { PasswordInput } from '../../components/utils/PasswordInput';
import { type Feedback } from '../../utils/ApiFeedback';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/api/userService';
import '../../components/styles/app.css';

const signinSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(1, 'Password is required'),
});

type SigninFormData = z.infer<typeof signinSchema>;

export default function Signin() {
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SigninFormData>({
        resolver: zodResolver(signinSchema),
        defaultValues: { email: '', password: '' }
    });

    const onSubmit = async (data: SigninFormData) => {
        setFeedback({ type: 'info', message: 'Signing in...' });
        try {
            await loginUser({
                email: data.email,
                password: data.password
            });
            
            setFeedback({ type: 'success', message: 'Signed in successfully!' });
            setTimeout(() => {
                navigate('/dashboard'); 
            }, 1000);
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
            setFeedback({ type: 'error', message: errorMessage });
        }
    };

    const inputClasses = "w-full px-3 py-2.5 text-sm bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brown-dark)] focus:border-transparent transition-all text-[var(--color-text-dark)] placeholder-[var(--color-placeholder)] shadow-sm";
    const labelClasses = "block text-[10px] font-bold tracking-[0.15em] text-[var(--color-brown-dark)] uppercase mb-1.5";
    const getErrorClass = (hasError: boolean) => hasError ? "border-[var(--color-error-border)] focus:ring-[var(--color-error-border)]" : "";

    return (
        <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row-reverse bg-[var(--color-bg)] font-sans">
            
            <div className="w-full lg:flex-1 flex flex-col justify-center px-6 py-10 lg:px-12 xl:px-20">
                <div className="max-w-md w-full mx-auto space-y-8">
                    
                    <div className="space-y-2">
                        <h1 className="text-3xl font-extrabold text-[var(--color-text-dark)] tracking-tight uppercase">Welcome Back</h1>
                        <p className="text-[var(--color-text-muted)] text-sm font-medium">Sign in to your account to book your next cut.</p>
                    </div>

                    {feedback && (
                        <div className={`p-3 rounded-sm text-sm font-semibold border-l-4 shadow-sm transition-all duration-300 ${
                            feedback.type === 'error' ? 'bg-[var(--color-error-bg)] text-[var(--color-error-text)] border-[var(--color-error-border)]' :
                            feedback.type === 'success' ? 'bg-[var(--color-success-bg)] text-[var(--color-brown-dark)] border-[var(--color-brown-dark)]' :
                            'bg-[var(--color-info-bg)] text-[var(--color-info-text)] border-[var(--color-info-border)]'
                        }`} role="alert">{feedback.message}</div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className={labelClasses}>Email</label>
                            <input type="email" id="email" {...register('email')} className={`${inputClasses} ${getErrorClass(!!errors.email)}`} placeholder="Enter your email" disabled={isSubmitting} />
                            {errors.email && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.email.message}</p>}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label htmlFor="password" className={`${labelClasses} mb-0`}>Password</label>
                            </div>
                            <PasswordInput id="password" {...register('password')} className={`${inputClasses} ${getErrorClass(!!errors.password)}`} placeholder="Enter your password" disabled={isSubmitting} />
                            {errors.password && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.password.message}</p>}
                        </div>

                       <Link id="link-gray" to="/auth/forgot-password" className="w-fit text-[12px] font-bold tracking-wide text-[var(--color-brown-light)] hover:text-[var(--color-brown-dark)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-0.5">
                            Forgot your password?
                        </Link>

                        <button type="submit" disabled={isSubmitting} className="w-full mt-4 bg-[var(--color-brown-dark)] hover:bg-[var(--color-text-dark)] disabled:bg-[var(--color-placeholder)] disabled:cursor-not-allowed text-[var(--color-bg)] text-sm font-bold py-3 px-4 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] shadow-md">
                            {isSubmitting ? 'Processing...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="text-center pt-2">
                        <p className="text-[var(--color-text-muted)] text-sm font-medium">
                            New here?{' '}
                         <Link id="link-gray" to="/auth/register" className="w-fit text-[var(--color-brown-light)] font-bold hover:text-[var(--color-brown-dark)] transition-colors border-b-2 border-transparent hover:border-[var(--color-brown-dark)] pb-0.5">
                            Sign Up!
                        </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block h-[75vh] my-auto border-l-[2px] border-dotted border-[var(--color-brown-dark)] mx-6"></div>

            <div className="hidden lg:block lg:h-auto lg:flex-1 relative bg-[var(--color-overlay-base)]">
                <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Barbershop Tools" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[var(--color-overlay-90)] via-[var(--color-overlay-40)] to-transparent"></div>
            </div>
            
        </div>
    );
}