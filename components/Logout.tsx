import { logout } from '@/app/auth/actions';

export default function Logout() {
    return (
        <li className='px-5 py-2.5 flex items-center hover:bg-stone-800'>
            <form action={logout}>
                <button type='submit'>
                    Logout
                </button>
            </form>
        </li>
    );
}
