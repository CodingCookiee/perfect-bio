import React from 'react';
import { Linkedin } from 'lucide-react';
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <div className='signin h-dvh w-full flex flex-col items-center justify-center p-4'>
        <h1 className="text-3xl font-audiowide font-semibold mb-8">Sign in</h1>
      <div className='social-logins flex flex-col items-center justify-center gap-4 w-full max-w-2xs'>
        
        <Button className='w-full py-5 cursor-pointer bg-transparent border border-primary
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2'>
          <Linkedin className="size-5" /> Sign in with LinkedIn
        </Button>
        
        <Button className='w-full py-5 cursor-pointer bg-transparent border border-primary
          text-text hover:bg-primary/20 hover:text-primary transition-all duration-300 ease-in-out
          flex items-center justify-center gap-2'>
          <FaGoogle className="size-5" /> Sign in with Google
        </Button>
        
        <div className="text-sm text-gray-500 mt-4">
          We'll never share your information without permission
        </div>
      </div>
    </div>
  );
}

export default Page;