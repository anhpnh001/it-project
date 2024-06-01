"use client"

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'inspector';


const  Authprovider = ({children}: {children: React.ReactNode}) => {
  return (
    <SessionProvider>
        {children} 
    </SessionProvider>
  )
}

export default Authprovider;