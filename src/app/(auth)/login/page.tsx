'use client'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import React, { useEffect } from 'react';
import axios from 'axios';


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
export default function login() {

  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",

  })
  const [loading, setLoading] = React.useState(false);


  const onLogin = async (event:any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("api/users/login", user);
      console.log("login success", response.data);
      toast.success("Successfully logged in!");
      router.push('/profile');
    }catch (error: any) {
      console.log("login error", error.message);
      toast.error("failed to login", error.message);
    }finally {
      setLoading(false);
    }
   
  }

  // useEffect(() => {
  //   if (user.email.length > 0 && user.password.length > 0) {
  //     setButtonDisabled(false);
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [user]);
  //   const form = useForm({
  //     resolver: zodResolver(formSchema),
  //   })
  return (
    <main className="flex-1 flex items-center justify-center" >
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-4xl font-bold text-center">Login</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email
            </label>
            <input
              id='email'
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-500">
              Password
            </label>
            <input
              id='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <Link
            href="/forgot-password"
            className="text-sm text-primary text-right"
          >
            Forgot password?
          </Link>

          <button
            onClick={onLogin}
            className={buttonVariants({ variant: 'default' })}
          >
            Login
          </button>
        </form>
        <span className="text-sm text-gray-500 text-center">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary">
            Register
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
