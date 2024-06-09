import React from 'react';
import { AppProps } from 'next/app';
import AuthProvider from '@/components/Authprovider/Authprovider'; // Adjust path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
