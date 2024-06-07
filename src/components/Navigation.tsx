'use client'
import Link from 'next/link';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { buttonVariants } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
const MainNavigation = () => {
    
    const { data: session } = useSession();
    console.log(session);
    const [loggedIn, setLoggedIn] = useState(false);

    // useEffect(() => {
    //     if (status === 'authenticated') {
    //         setLoggedIn(true);
    //     } else {
    //         setLoggedIn(false);
    //     }
    // }, [status]);

    return (
        <nav className="bg-white flex justify-between container py-4 sticky top-0">
            <Link href="/" passHref>
                <Image src="/logoipsum-332.svg" alt="Logo" width={64} height={64} />
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/courses" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Courses
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Competition
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/revision" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Revision
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {session ? (
                <button
                    className={buttonVariants({ variant: 'default' })}
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            ) : (
                <button
                    className={buttonVariants({ variant: 'default' })}
                    onClick={() => signIn()}
                >
                    Sign in
                </button>
                
            )}
            
            
        </nav>
    );
};

export default MainNavigation;
