'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

type PrevState = {
    success: boolean,
    token?: string,
    expirationDate?: string,
    userId?: string,
    message?: string
};

export async function authenticate(
    prevState: PrevState | undefined,
    formData: FormData,
) {
    try {
        const isLogin = formData.get('isLogin');
        const authData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        const baseURL = 'https://friendly-frog-slippers.cyclic.app/api';
        const requestURL = baseURL + (isLogin ? '/users/login' : '/users/signup');

        const response = await axios.post<{ userId: string, email: string, token: string, expiresIn: number }>(requestURL, authData);

        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        cookies().set('token', response.data.token, { expires: expirationDate, httpOnly: true });
        return {
            success: true,
            message: 'Successful login!',
        };
    } catch (err: any) {
        if (err.response?.data?.message) {
            return {
                success: false,
                message: err.response.data.message,
            };
        }
        return {
            success: false,
            message: 'Something went wrong',
        };
    }
}

export async function logout() {
    cookies().delete('token');
    redirect('/');
}
