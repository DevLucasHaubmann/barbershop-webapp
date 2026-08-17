import api from './Api';

export interface RegisterUserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export const createUser = async (data: RegisterUserData) => {
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

    return await api.post('/users', payload);
};