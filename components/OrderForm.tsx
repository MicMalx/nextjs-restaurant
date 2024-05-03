'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { order } from '@/app/order/actions';

function OrderButton({ children }: { children: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            className='my-5 w-full font-bold text-xl text-golden-600 disabled:text-gray-300 disabled:cursor-not-allowed'
            disabled={pending}
            type='submit'
        >
            {children}
        </button>
    );
}

export function OrderForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const [error, setError] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const router = useRouter();

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value);
    };

    const phoneNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const selectChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setPaymentMethod(event.target.value);
    };

    const sendOrder = async (event: FormEvent) => {
        event.preventDefault();
        const orderObjArrayJSON = localStorage.getItem('orderObjectArray');
        if (orderObjArrayJSON) {
            const orderMealsData = JSON.parse(orderObjArrayJSON);
            const orderData = {
                name,
                address,
                phoneNumber,
                paymentMethod: paymentMethod as 'cash' | 'card',
                price: orderMealsData.totalPrice,
                meals: orderMealsData.meals,
            };
            const response = await order(orderData);
            if (response.success) {
                localStorage.removeItem('orderObjectArray');
                setError(false);
                setOrderSuccess(true);
                setName('');
                setAddress('');
                setPhoneNumber('');
            } else {
                setError(true);
            }
        } else {
            router.push('/');
        }
    };

    return (
        <section className='my-5 mx-auto w-4/5 sm:w-[500px] text-center shadow p-2.5'>
            {error ? <h2 className='font-bold text-red-600 my-4'>Could not make order. Try again later.</h2> : null}
            {orderSuccess ? <h2 className='font-bold text-green-600 my-4'>Order Success! Your food will arrive soon.</h2> : null}
            <h2 className='font-bold my-4'>Enter your delivery data</h2>
            <form onSubmit={sendOrder}>
                <input
                    className='w-4/5 sm:w-[400px] p-1.5 my-2.5 outline-none border border-gray-300'
                    type='text'
                    placeholder='Name'
                    name='name'
                    required={true}
                    onChange={nameChangeHandler}
                    value={name}
                />
                <input
                    className='w-4/5 sm:w-[400px] p-1.5 my-2.5 outline-none border border-gray-300'
                    type='text'
                    placeholder='Address'
                    name='address'
                    required={true}
                    onChange={addressChangeHandler}
                    value={address}
                />
                <input
                    className='w-4/5 sm:w-[400px] p-1.5 my-2.5 outline-none border border-gray-300'
                    type='text'
                    placeholder='Phone Number'
                    name='phoneNumber'
                    required={true}
                    onChange={phoneNumberChangeHandler}
                    value={phoneNumber}
                />
                <label
                    className='w-4/5 sm:w-[400px] inline-block text-left mb-1'
                    htmlFor='paymentMethod'
                >
                    Payment Method:
                </label>
                <select
                    className='w-4/5 sm:w-[400px] border border-gray-300 py-1.5 outline-none mb-2.5'
                    name='paymentMethod'
                    id='paymentMethod'
                    onChange={selectChangeHandler}
                    value={paymentMethod}
                >
                    <option value='cash'>Cash</option>
                    <option value='card'>Card</option>
                </select>
                <OrderButton>ORDER</OrderButton>
            </form>
        </section>
    );
}
