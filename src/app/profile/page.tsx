"use client";
import Image from "next/image";
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
} from "@/components/ui/navigation-menu";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Trash2 } from "lucide-react";

export default function profile() {
  return (
    <main className="container mx-auto p-8">
      <div className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-semibold mb-6">Edit Profile</h1>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Photo
          </label>
          <div className="flex items-center">
            <div className="w-24 h-24 mr-4">
              <Image
                src="/undraw_pic_profile_re_7g2h.svg"
                alt="Profile Photo"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <div className="mx-4 flex items-center gap-2 ">
              <button className="bg-black hover:bg-gray-800  text-white font-bold mx-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Change Photo
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2  px-4 rounded flex items-center focus:outline-none focus:shadow-outline">
                <Trash2 className="mr-2" /> Delete
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save Changes
          </button>
        </div>
      </div>
    </main>
  );
}
