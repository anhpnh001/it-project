import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { buttonVariants } from './ui/button';
import { useEffect, useState } from 'react';

const MainNavigation: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        console.log('Checking auth token:', token); // Add this to check what's retrieved
        setIsLoggedIn(!!token);
    }, []);
    
    const handleLogout = async () => {
        const response = await fetch('/api/logout', { method: 'POST' });
        console.log('Logout response:', response); // Check the response
        if (response.ok) {
            localStorage.removeItem('authToken');
            setIsLoggedIn(false);
            window.location.href = '/';
        } else {
            console.error('Failed to log out');
        }
    };
    
    const handleSignIn = () => {
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <nav className="bg-white flex justify-between container py-4 sticky top-0">
            <Image src="/logoipsum-332.svg" alt="Logo" width={64} height={64} style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/'}/>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem onClick={() => window.location.href = '/'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem onClick={() => window.location.href = '/courses'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Courses
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem onClick={() => window.location.href = '/docs'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Competition
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem onClick={() => window.location.href = '/revision'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Revision
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem onClick={() => window.location.href = '/about'}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex space-x-4">
                {!isLoggedIn ? (
                    <button className={buttonVariants({ variant: 'outline' })} onClick={handleSignIn}>
                        Sign In
                    </button>
                ) : (
                    <button className={buttonVariants({ variant: 'outline' })} onClick={handleLogout}>
                        Sign Out
                    </button>
                )}
            </div>
        </nav>
    );
};

export default MainNavigation;