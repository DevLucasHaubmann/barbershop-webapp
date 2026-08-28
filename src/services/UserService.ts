import api from './Api';

interface CreateUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    ddd: string;
    phoneNumber: string;
}

export const createUser = async (formData: CreateUserData) => {
    return await api.post('/users', formData);
};