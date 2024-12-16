"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react"; // Install lucide-react if needed
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of the animation in ms
      once: true, // animates only once when element comes into view
      easing: "ease-out-cubic", // easing function for animation
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Card container */}
      <Card
        className="w-full max-w-sm rounded-lg shadow-lg bg-white p-6"
        data-aos="fade-up"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Login
        </h1>

        <form className="flex flex-col gap-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-2 transition-all"
              data-aos="fade-up"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 pr-10 px-4 py-2 transition-all"
                data-aos="fade-up"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
                data-aos="fade-up"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <Link href={"/dashboard"}>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105"
              data-aos="fade-up"
            >
              Login
            </Button>
          </Link>
        </form>

        {/* Divider */}
        <div className="relative my-6" data-aos="fade-up">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        {/* Register Option */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Don&#39;t have an account?{" "}
          <Link href={"/signUp"} className="text-blue-600 hover:underline ml-1">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
