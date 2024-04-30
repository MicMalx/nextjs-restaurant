'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NavigationDropdown } from './NavigationDropdown';
import { NavigationItem } from './NavigationItem';
import Logout from './Logout';

export function NavigationItems({ token }: { token: RequestCookie | undefined }) {
    const pathname = usePathname();
    const [showMobileNav, setShowMobileNav] = useState(false);
    useEffect(() => {
        setShowMobileNav(false);
    }, [pathname]);

    const mobileNavClicked = () => {
        setShowMobileNav((prevState) => !prevState);
    };

    return (
        <nav className='py-5 flex flex-wrap items-center justify-between'>
            <Link href='/'>
                <Image
                    src='/icons/logo.png'
                    height={40}
                    width={80}
                    alt='logo'
                />
            </Link>
            <div
                className='block sm:hidden cursor-pointer'
                onClick={mobileNavClicked}
            >
                <span className={clsx(
                    'block w-[25px] h-[3px] rounded my-[5px] mx-auto bg-white transition-all ease-in-out duration-300 delay-0',
                    { 'translate-y-[8px] rotate-45': showMobileNav },
                )}
                >
                </span>
                <span className={clsx(
                    'block w-[25px] h-[3px] rounded my-[5px] mx-auto bg-white transition-all ease-in-out duration-300 delay-0',
                    { 'opacity-0': showMobileNav },
                )}
                >
                </span>
                <span className={clsx(
                    'block w-[25px] h-[3px] rounded my-[5px] mx-auto bg-white transition-all ease-in-out duration-300 delay-0',
                    { 'translate-y-[-8px] -rotate-45': showMobileNav },
                )}
                >
                </span>
            </div>
            <ul className={clsx(
                'basis-full sm:basis-auto list-none sm:flex flex-col sm:flex-row items-center text-[#f2c666] transition-all ease-in-out duration-300 delay-0',
                { flex: showMobileNav },
                { hidden: !showMobileNav },
            )}
            >
                <NavigationItem href='/menu'>Menu</NavigationItem>
                <NavigationDropdown />
                <NavigationItem href='/contact'>Contact</NavigationItem>
                {token?.value ? <NavigationItem href='/orders'>Orders</NavigationItem> : null}
                {token?.value ? <Logout /> : <NavigationItem href='/auth'>Login</NavigationItem>}
            </ul>
        </nav>
    );
}
