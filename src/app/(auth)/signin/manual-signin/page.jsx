"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, EyeClosed } from "lucide-react";
import { LoadingButton } from '@/components/ui/loading-button';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="signin w-vw h-[90vh] flex flex-col items-center justify-center gap-2.5">
      <div className=" h-1/10 w-1/3 max-w-xs relative mb-2.5">
        <Image
          src="/app/app-icon.png"
          alt="logo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <form className="flex flex-col items-center justify-center gap-4 w-full max-w-xs">
        <div className="relative w-full">
          <Input placeholder="Email" className="w-full py-6 pl-10" />
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
        </div>

        <div className="relative w-full">
          <Input
            placeholder="Password"
            className="w-full py-6 pl-10"
            type={showPassword ? "text" : "password"}
          />
          <Lock
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? <EyeOff size={18} /> : <EyeClosed size={18} />}
          </button>
        </div>
        <div className="w-full flex justify-end -mt-2 mb-1">
          <Button variant="link" className="text-muted-foreground  p-0 h-auto">
            <Link
              href="/signin/forgot-password"
              className="text-muted-foreground text-xs text-text"
            >
              Forgot Password?
            </Link>
          </Button>
        </div>
        <div className="w-full flex justify-center">
          <LoadingButton
          variant="default"
            type="submit"
            isLoading={isLoading}
            loadingText="Logging In..."
            className="w-full h-full cursor-pointer text-blue-50 text-lg hover:bg-primary/90 
          transition-all duration-300 ease-in-out flex items-center justify-center gap-2"
       
          >
            Login
          </LoadingButton>
        </div>
        <div className="w-full flex items-center justify-center gap-1">
          <h2 className="text-muted-foreground text-sm">
            Don't have an account?
          </h2>
          <span className="text-muted-foreground ">
            <Button variant="link" className="p-0 h-auto mb-1">
              <Link
                href="/signup"
                className="text-primary text-md font-semibold"
              >
                Sign up
              </Link>
            </Button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Page;
