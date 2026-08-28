import api from './api';
import { extractServerErrorMessage } from '../../utils/ApiFeedback';

export interface RegisterUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export interface LoginUserData {
    email: string;
    password: string;
}

export const registerUser = async (data: RegisterUserData) => {
    const extractedDDD = data.phoneNumber.slice(0, 2);
    const extractedNumber = data.phoneNumber.slice(2);

    const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        ddd: extractedDDD,
        phoneNumber: extractedNumber
    };

    try {
        const response = await api.post('/auth/register', payload);
        return response.data; 
    } catch (error: unknown) {
        const errorMessage = extractServerErrorMessage(error, "Registration failed due to an unexpected error.");
        console.error("Registration request failed:", error);
    
        throw new Error(errorMessage, { cause: error });
    }
};

export const loginUser = async (data: LoginUserData) => {
    const payload = {
        email: data.email,
        password: data.password
    };

    try {
        const response = await api.post('/auth/login', payload);
        return response.data;
    } catch (error: unknown) {
        const errorMessage = extractServerErrorMessage(error, "Invalid email or password. Please try again.");
        console.error("Login request failed:", error);
        throw new Error(errorMessage, { cause: error });
    }
    
};

export const logoutUser = async () => {
    try {
        await api.post('/auth/logout'); 
    } catch (error: unknown) {
        const errorMessage = extractServerErrorMessage(error, "Logout failed due to an unexpected error.");
        console.error("Logout request failed:", error);
        throw new Error(errorMessage, { cause: error });
    }
};