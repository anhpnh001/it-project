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
import { ArrowRight } from "lucide-react";

export default function about() {
  return (
    <main className="container">
      <div className="flex items-center justify-center p-8">
        <div className="flex flex-col justify-center items-center w-1/2 gap-4 py-16">
          <h1 className="w-3/3 text-3xl ">BetterMind Build Different</h1>
          <p className="text-3xl font-bold">
            Empower Your Mind,Transform Your World
          </p>
          <Image
            src="/undraw_educator_re_ju47.svg"
            alt="Next.js Logo"
            width={680}
            height={680}
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-8">
        <div className="flex flex-col justify-center items-start w-1/2 gap-4 py-16">
          <p className="text-left">
            <span className="text-2xl font-bold">At Better Mind</span>
            <br></br>
            <br></br>
            We offer a range of programs tailored to enhance intellectual
            capabilities across various age groups. From young learners to adult
            education, our curricula are designed to build strong cognitive
            foundations and elevate educational experiences.
          </p>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <Image
            src="/undraw_educator_re_ju47.svg"
            alt="Next.js Logo"
            width={680}
            height={680}
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-8">
        <div className="flex items-center justify-center w-1/2">
          <Image
            src="/undraw_education_f8ru.svg"
            alt="Next.js Logo"
            width={680}
            height={680}
          />
        </div>
        <div className="flex flex-col justify-center items-start w-2/2 gap-4 py-16">
          <p className="text-left">
            <span className="text-2xl font-bold">
              Innovative Teaching Methods with Blockly
            </span>
            <br></br>
            Better Mind embraces the power of Blockly, a revolutionary visual
            programming language, to enhance the learning experience and make
            complex concepts accessible and engaging.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        {/* Repeat this structure for each individual */}
        <div className="flex items-center justify-between w-full gap-16">
          {/* Individual Profile Section */}
          <div className="flex flex-col items-center w-1/2">
            <Image
              src="/undraw_male_avatar_g98d.svg" // Replace with actual path
              alt="Profile image of Phan Ngoc Hoàng Anh"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold mt-4">Phan Ngoc Hoàng Anh</h2>
            <p className="text-md mt-2">[Brief description or tagline]</p>
          </div>
          <div className="flex flex-col items-center w-1/2">
            <Image
              src="/undraw_pic_profile_re_7g2h.svg" // Replace with actual path
              alt="Profile image of Nguyễn Minh Mẫn"
              width={300}
              height={300}
            />
            <h2 className="text-xl font-bold mt-4">Nguyễn Minh Mẫn</h2>
            <p className="text-md mt-2">[Brief description or tagline]</p>
          </div>
        </div>
      </div>
      {/* Additional Information Section */}
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-center">
          Here at [Your Organization], we are committed to fostering talent and
          dedication, enabling individuals like Phan Ngoc Hoàng Anh and Nguyễn
          Minh Mẫn to achieve their full potential. Our programs are designed to
          provide the necessary tools and support for personal and professional
          growth.
        </p>
      </div>
    </main>
  );
}
