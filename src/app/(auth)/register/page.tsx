'use client'
import { buttonVariants } from '@/components/ui/button'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import router from 'next/router'
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
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
  const router = useRouter();
  const [user, setUser] = React.useState({

    email: "",
    password: "",
    username: "",
  })
  const [loading, setLoading] = React.useState(false);

  const onRegister = async (event: any) => {
    console.log("A")
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      console.log("register success", response.data);
      await router.push('/login');
    } catch (error: any) {
      console.log("register failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  // useEffect(() => {
  //   if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
  //     setButtonDisabled(false);
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [user]);


  return (
    <main className="flex-1 flex items-center justify-center" >
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <form className="flex flex-col gap-4"
          onSubmit={onRegister}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm text-gray-500">
              Username
            </label>
            <input
              id='username'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              placeholder="username"
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-500">
              Email
            </label>
            <input
              id='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              id='password'
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
            onSubmit={onRegister}
            className={buttonVariants({ variant: 'default' })}
          >
            Register
          </button>
        </form>
        <span className="text-sm text-gray-500 text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </span>
        <span className="text-sm text-gray-500 text-center">or</span>
        <div className="flex flex-col gap-4">
          <button onClick={() => signIn('google')} className={buttonVariants({ variant: 'outline' })}>
            <FaGoogle className="mr-2" />
            
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  )
}
