import { logout } from '@/app/auth/actions';

export default function Logout() {
    return (
        <li className='flex items-center hover:bg-stone-800'>
            <form action={logout}>
                <button className='px-5 py-2.5' type='submit'>
                    Logout
                </button>
            </form>
        </li>
    );
}
