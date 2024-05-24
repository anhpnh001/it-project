'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
// import { useForm } from 'react-hook-form'

// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form'

// const formSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(8),
// })

export default function Register() {
  //   const form = useForm({
  //     resolver: zodResolver(formSchema),
  //   })
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className="text-sm text-gray-500">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-500">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-500">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className={buttonVariants({ variant: 'default' })}
          >
            Register
          </button>
        </form>
        <span className="text-sm text-gray-500 text-center">
          Already have an account?{' '}
          <Link href="/register" className="text-primary">
            Login
          </Link>
        </span>
        <span className="text-sm text-gray-500 text-center">or</span>
        <div className="flex flex-col gap-4">
          <button className={buttonVariants({ variant: 'outline' })}>
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
          <button className={buttonVariants({ variant: 'outline' })}>
            <FaFacebook className="mr-2" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </main>
  )
}
