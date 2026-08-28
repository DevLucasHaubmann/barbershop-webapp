import api from './api';

interface CreateUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    ddd: string;
    phoneNumber: string;
}

export const createUser = async (formData: CreateUserData) => {
    try {
        const response = await api.post('/users', formData);
        return response.data;
    } catch (error: any) {
        throw error.response?.data || error.message;
    }
};