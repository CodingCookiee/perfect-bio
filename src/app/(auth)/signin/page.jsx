import React from "react";
import { Linkedin, MailOpen } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="signin h-dvh w-full flex flex-col items-center justify-center p-4 gap-2.5">
      <h1 className="text-3xl font-audiowide font-semibold mb-8">Sign in</h1>
      <div className="social-logins flex flex-col items-center justify-center gap-4 w-full max-w-2xs">
        <Button
          className="w-full py-5 cursor-pointer bg-transparent border border-primary
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2"
        >
          <Linkedin className="size-5" /> Sign in with LinkedIn
        </Button>

        <Button
          className="w-full py-5 cursor-pointer bg-transparent border border-primary
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2"
        >
          <FaGoogle className="size-5" /> Sign in with Google
        </Button>

        <div className="flex items-center justify-center w-full ">
          <div className="border flex-1 h-px !border-neutral-300  "></div>
          <span className="font-audiowide px-2.5 text-neutral-600">Or</span>
          <div className="border flex-1 h-px !border-neutral-300  "></div>
        </div>
      </div>
        <Link href="/signin/manual-signin"
         className='flex flex-col items-center justify-center gap-4 w-full max-w-2xs'>
        <Button
         className="w-full  py-5 cursor-pointer bg-transparent border border-primary
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2"
          >
      <MailOpen 
        className="size-5 "
      /> Login with Email
    </Button>
        </Link>
    </div>
  );
};

export default Page;
