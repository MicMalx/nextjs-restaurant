'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function NavigationItem({ href, children }: { href: string, children: ReactNode }) {
    const pathname = usePathname();
    return (
        <li className={clsx(
            'px-5 py-2.5 hover:bg-[#282525]',
            { 'bg-[#282525]': pathname === href },
        )}
        >
            <Link href={href}>
                {children}
            </Link>
        </li>
    );
}
