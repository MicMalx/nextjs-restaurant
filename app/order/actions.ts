'use server';

import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { MealObject } from '@/lib/features/order/orderSlice';

type OrderObj = {
    name: string;
    address: string;
    phoneNumber: string;
    paymentMethod: 'cash' | 'card';
    price: number;
    meals: MealObject[];
};

export async function order(orderObj: OrderObj) {
    const token = cookies().get('token');
    if (!token) {
        redirect('/auth');
    }

    const orderData = {
        name: orderObj.name,
        address: orderObj.address,
        phoneNumber: orderObj.phoneNumber,
        paymentMethod: orderObj.paymentMethod,
        price: orderObj.price,
        meals: orderObj.meals,
    };
    try {
        await axios.post<{ order: OrderObj & { purchaseId: string } }>(
            'https://friendly-frog-slippers.cyclic.app/api/orders/create',
            orderData,
            { headers: { Authorization: `Bearer ${token.value}` } },
        );
        revalidatePath('/orders');
        return { success: true };
    } catch (err: any) {
        return { success: false };
    }
}
