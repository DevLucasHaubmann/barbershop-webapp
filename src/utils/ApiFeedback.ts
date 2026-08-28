// apiFeedback.ts

export interface Feedback {
    type: 'success' | 'error' | 'info';
    message: string;
}

export const getApiFeedback = (statusCode: number): Feedback => {
    switch (statusCode) {
        case 200:
        case 201:
            return { type: 'success', message: 'Registration successful! Welcome aboard.' };
        case 400:
            return { type: 'error', message: 'Invalid information provided. Please check your form.' };
        case 401:
            return { type: 'error', message: 'Unauthorized. Please check your credentials.' };
        case 403:
            return { type: 'error', message: 'You do not have permission to perform this action.' };
        case 409:
            return { type: 'error', message: 'This email is already in use.' };
        case 500:
            return { type: 'error', message: 'Server error. Our team has been notified. Please try again later.' };
        default:
            return { type: 'error', message: 'An unexpected error occurred. Please try again.' };
    }
};