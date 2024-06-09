'use client'
import MainNavigation from '@/components/Navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Authprovider from '@/components/Authprovider/Authprovider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div
          className={`font-inter ${inter.className} flex flex-col min-h-screen`}
        >
          <Authprovider>
            <SessionProvider>
              <MainNavigation />
            </SessionProvider>
            <main>{children}</main>
          </Authprovider>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
