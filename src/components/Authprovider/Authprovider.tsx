import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@/components/UserContext'; // Import UserProvider from the file where it is defined

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <UserProvider> {/* Wrap children within UserProvider */}
        {children}
      </UserProvider>
    </SessionProvider>
  );
}

export default AuthProvider;
