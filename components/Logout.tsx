import { logout } from '@/app/auth/actions';

export default function Logout() {
    return (
        <li className='px-5 py-2.5 flex items-center hover:bg-[#282525]'>
            <form action={logout}>
                <button type='button'>
                    Logout
                </button>
            </form>
        </li>
    );
}
