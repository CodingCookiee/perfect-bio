import React from "react";
import { Linkedin, MailOpen } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div className="signin w-vw h-[90vh] flex flex-col items-center justify-center gap-2.5">
      <h1 className="text-3xl font-audiowide font-semibold mb-8">Sign in</h1>
      <div className="social-logins flex flex-col items-center justify-center gap-4 w-full max-w-2xs">
        <Button
          variant="outline"
          className="w-full py-5 cursor-pointer bg-transparent 
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2"
        >
          <Linkedin className="size-5" /> Sign in with LinkedIn
        </Button>

        <Button
          variant="outline"
          className="w-full py-5 cursor-pointer bg-transparent 
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2"
        >
          <FaGoogle className="size-5" /> Sign in with Google
        </Button>

        <div className="flex items-center justify-center w-full">
          <div className="bg-border h-px flex-1"></div>
          <span className="font-audiowide px-2.5 text-muted-foreground">Or</span>
          <div className="bg-border h-px flex-1"></div>
        </div>
      </div>
      <Link href="/signin/manual-signin"
        className='flex flex-col items-center justify-center gap-4 w-full max-w-2xs'>
        <Button
          variant="outline"
          className="w-full py-5 cursor-pointer bg-transparent 
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2"
        >
          <MailOpen 
            className="size-5"
          /> Login with Email
        </Button>
      </Link>
    </div>
  );
};

export default Page;