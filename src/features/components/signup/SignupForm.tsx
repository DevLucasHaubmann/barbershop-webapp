import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { registerUser } from '../../api/userService';
import { PasswordInput } from '../../../components/utils/PasswordInput';
import { type Feedback } from '../../../utils/ApiFeedback';
import { Link } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import '../../../components/styles/app.css';

const signupSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    phoneNumber: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Invalid phone number format')
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type SignupFormData = z.infer<typeof signupSchema>;

const Signup = () => {
    const [feedback, setFeedback] = useState<Feedback | null>(null);

    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phoneNumber: '' }
    });

const onSubmit = async (data: SignupFormData) => {
    setFeedback({ type: 'info', message: 'Submitting your registration...' });
    try {
        const cleanPhone = data.phoneNumber.replace(/\D/g, '');
        
        await registerUser({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            phoneNumber: cleanPhone
        });
        
        setFeedback({ type: 'success', message: 'Registration successful! Welcome aboard.' });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setFeedback({ type: 'error', message: errorMessage });
    }
};

    const inputClasses = "w-full px-3 py-2.5 text-sm bg-[var(--color-input-bg)] border border-[var(--color-border)] rounded-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brown-dark)] focus:border-transparent transition-all text-[var(--color-text-dark)] placeholder-[var(--color-placeholder)] shadow-sm";
    const labelClasses = "block text-[10px] font-bold tracking-[0.15em] text-[var(--color-brown-dark)] uppercase mb-1.5";
    const getErrorClass = (hasError: boolean) => hasError ? "border-[var(--color-error-border)] focus:ring-[var(--color-error-border)]" : "";

    return (
        <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row bg-[var(--color-bg)] font-sans">
            <div className="w-full lg:flex-1 flex flex-col justify-center px-6 py-10 lg:px-12 xl:px-20">
                <div className="max-w-md w-full mx-auto space-y-6">
                    
                    <div className="space-y-2">
                        <h1 className="text-3xl font-extrabold text-[var(--color-text-dark)] tracking-tight uppercase">Create Your Account</h1>
                        <p className="text-[var(--color-text-muted)] text-sm font-medium">Join our barbershop and book your next cut with ease.</p>
                    </div>

                    {feedback && (
                        <div className={`p-3 rounded-sm text-sm font-semibold border-l-4 shadow-sm transition-all duration-300 ${
                            feedback.type === 'error' ? 'bg-[var(--color-error-bg)] text-[var(--color-error-text)] border-[var(--color-error-border)]' :
                            feedback.type === 'success' ? 'bg-[var(--color-success-bg)] text-[var(--color-brown-dark)] border-[var(--color-brown-dark)]' :
                            'bg-[var(--color-info-bg)] text-[var(--color-info-text)] border-[var(--color-info-border)]'
                        }`} role="alert">{feedback.message}</div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className={labelClasses}>First Name</label>
                                <input id="firstName" {...register('firstName')} className={`${inputClasses} ${getErrorClass(!!errors.firstName)}`} placeholder="Enter your first name" disabled={isSubmitting} />
                                {errors.firstName && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.firstName.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="lastName" className={labelClasses}>Last Name</label>
                                <input id="lastName" {...register('lastName')} className={`${inputClasses} ${getErrorClass(!!errors.lastName)}`} placeholder="Enter your last name" disabled={isSubmitting} />
                                {errors.lastName && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.lastName.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className={labelClasses}>Email</label>
                            <input type="email" id="email" {...register('email')} className={`${inputClasses} ${getErrorClass(!!errors.email)}`} placeholder="Enter your email" disabled={isSubmitting} />
                            {errors.email && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.email.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="password" className={labelClasses}>Password</label>
                                <PasswordInput id="password" {...register('password')} className={`${inputClasses} ${getErrorClass(!!errors.password)}`} placeholder="Min. 8 characters" disabled={isSubmitting} />
                                {errors.password && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.password.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className={labelClasses}>Confirm Password</label>
                                <PasswordInput id="confirmPassword" {...register('confirmPassword')} className={`${inputClasses} ${getErrorClass(!!errors.confirmPassword)}`} placeholder="Confirm password" disabled={isSubmitting} />
                                {errors.confirmPassword && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className={labelClasses}>Phone Number</label>
                            <Controller
                                name="phoneNumber"
                                control={control}
                                render={({ field }) => (
                                    <IMaskInput
                                        mask="(00) 00000-0000"
                                        unmask={false}
                                        onAccept={(value) => field.onChange(value)}
                                        onBlur={field.onBlur}
                                        value={field.value}
                                        className={`${inputClasses} ${getErrorClass(!!errors.phoneNumber)}`}
                                        placeholder="Enter your phone number"
                                        disabled={isSubmitting}
                                    />
                                )}
                            />
                            {errors.phoneNumber && <p className="text-[var(--color-error-text)] text-xs mt-1 font-semibold">{errors.phoneNumber.message}</p>}
                        </div>

                        <button type="submit" disabled={isSubmitting} className="w-full mt-2 bg-[var(--color-brown-dark)] hover:bg-[var(--color-text-dark)] disabled:bg-[var(--color-placeholder)] disabled:cursor-not-allowed text-[var(--color-bg)] text-sm font-bold py-3 px-4 rounded-sm tracking-[0.1em] uppercase transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--color-border)] shadow-md">
                            {isSubmitting ? 'Processing...' : 'Create Account'}
                        </button>
                    </form>

                    <div className="text-center pt-1">
                        <p className="text-[var(--color-text-muted)] text-sm font-medium">
                            Already have an account?{' '}
                            <Link id="link" to="/auth/login" className="text-[var(--color-brown-light)] font-extrabold hover:text-[var(--color-brown-dark)] transition-colors">Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:block h-[75vh] my-auto border-l-[2px] border-dotted border-[var(--color-brown-dark)] mx-6"></div>

            <div className="hidden lg:block lg:h-auto lg:flex-1 relative bg-[var(--color-overlay-base)]">
                <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="Premium Barbershop Interior" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[var(--color-overlay-90)] via-[var(--color-overlay-40)] to-transparent"></div>
            </div>
        </div>
    );
};
export default Signup;