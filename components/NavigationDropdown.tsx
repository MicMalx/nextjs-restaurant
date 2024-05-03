'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type DropdownItemProps = {
    href: string,
    children: ReactNode,
    pathname: string
};

function DropdownItem({ href, children, pathname }: DropdownItemProps) {
    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'flex items-center hover:font-bold hover:opacity-85 py-2.5 pl-5',
                    { 'font-bold opacity-85': pathname === href },
                )}
            >
                {children}
            </Link>
        </li>
    );
}

const dropdownPaths = ['/offer', '/about-us', '/gallery'];

export function NavigationDropdown() {
    const pathname = usePathname();

    return (
        <li className={clsx(
            'group py-2.5 relative cursor-pointer hover:bg-stone-800',
            { 'bg-stone-800': dropdownPaths.includes(pathname) },
        )}
        >
            <button type='button' className='px-5'>Restauracja</button>
            <ul className='hidden group-hover:block bg-stone-800 absolute w-full'>
                <DropdownItem href='/offer' pathname={pathname}>Offer</DropdownItem>
                <DropdownItem href='/about-us' pathname={pathname}>About Us</DropdownItem>
                <DropdownItem href='/gallery' pathname={pathname}>Gallery</DropdownItem>
            </ul>
        </li>
    );
}
