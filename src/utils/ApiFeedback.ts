import { isAxiosError } from 'axios';

export interface Feedback {
    type: 'success' | 'error' | 'info';
    message: string;
}

export const extractServerErrorMessage = (err: unknown, defaultMessage: string): string => {
    if (isAxiosError(err)) {
        const data = err.response?.data;
        if (data && typeof data === 'object') {
            if ('detail' in data && typeof data.detail === 'string') {
                return data.detail;
            }
            if ('title' in data && typeof data.title === 'string') {
                return data.title;
            }
        }
        if (err.request) {
            return 'Network error. Please check your connection and try again.';
        }
    }
    
    if (err instanceof Error) {
        return err.message;
    }

    return defaultMessage;
};