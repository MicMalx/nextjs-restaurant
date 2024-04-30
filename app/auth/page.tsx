'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from './actions';

function LoginButton({ children }: { children: string }) {
    const { pending } = useFormStatus();

    return (
        <button type='submit' className='mt-6 w-full font-bold text-xl text-[#5C9210] disabled:text-[#CCC] disabled:cursor-not-allowed' disabled={pending}>
            {children}
        </button>
    );
}

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [formState, dispatch] = useFormState(authenticate, undefined);
    const router = useRouter();

    useEffect(() => {
        if (formState?.success) {
            router.back();
        }
    }, [formState, router]);

    return (
        <main className='sm:mb-[300px]'>
            <section className='mt-10 mb-5 mx-auto w-4/5 sm:w-[500px] text-center shadow border-[#eee] p-2.5'>
                <form action={dispatch}>
                    <input
                        type='checkbox'
                        checked={isLogin}
                        name='isLogin'
                        hidden
                        readOnly
                    />
                    <input
                        className='w-4/5 sm:w-[400px] p-1.5 my-2.5 outline-none border border-[#CCC]'
                        type='email'
                        placeholder='Email Adress'
                        name='email'
                        required
                    />
                    <input
                        className='w-4/5 sm:w-[400px] p-1.5 my-2.5 outline-none border border-[#CCC]'
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                    />
                    {formState?.success === false && (
                        <p className='text-sm text-red-500'>{formState.message}</p>
                    )}
                    <LoginButton>
                        {isLogin ? 'LOGIN' : 'SIGNUP'}
                    </LoginButton>
                </form>
                <button
                    type='button'
                    className='my-5 font-bold text-xl text-[#C59938]'
                    onClick={() => setIsLogin((prevState) => !prevState)}
                >
                    SWITCH TO {isLogin ? 'SIGNUP' : 'LOGIN'}
                </button>
            </section>
        </main>
    );
}
