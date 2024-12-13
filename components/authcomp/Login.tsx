'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for the app router
import Image from 'next/image';
import Authbutton from './authbutton';
import { Input } from "@/components/ui/input";

interface PhasesProps {}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const router = useRouter(); // Initialize the router

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const requestData = { login: email, password: password };

        const response = await fetch('https://devfest-t8bx.onrender.com/users/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data.accessToken);

        // Store the access token in localStorage
        if (data.accessToken) {
        
            document.cookie = `accessToken=${data.accessToken}; path=/; SameSite=Strict`;
        }
        
        // Redirect using the app router
        router.push('/pages/welcome');
      } catch (error) {
        console.error('Login error:', error);
      }
    }
  };

  return (
    <div className="flex w-full m-auto md:mt-[60px] mt-[20px] md:w-[594px] p-[55px_41px] flex-col items-center gap-5 rounded-[35px] bg-white shadow-[0px_4px_16px_3px_rgba(37,27,228,0.20)]">
      <div className="t-42-s text-start mr-auto">Log In</div>
      <div className="t-24-m opacity-[0.6]">
        Log In to Unlock Your Potential. Please enter your info below.
      </div>

      <Input
        type="email"
        placeholder="Enter your email"
        className="h-[64px]  t-24-m py-[20px] bg-[#F4F4F5] border-[#E4E4E7]  px-[18px] gap-0 rounded-[12px] border-2 border-opacity-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

      <Input
        type="password"
        placeholder="Enter your password"
        className="h-[64px]  t-24-m py-[20px] bg-[#F4F4F5] border-[#E4E4E7]  px-[18px] gap-0 rounded-[12px] border-2 border-opacity-1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}

      <div className="flex flex-col items-center w-full gap-5">
        <div className="flex justify-between w-full">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox" />
            Remember Me
          </label>
          <a href="/pages/signup" className="text-blue-500">create an acount</a>
        </div>

        <div className="flex items-center justify-center w-full my-4">
          <hr className="w-full border-t border-gray-300" />
          <span className="absolute bg-white px-2 text-gray-500">OR</span>
        </div>
      </div>

      <Authbutton bgColor="white" textColor="#251BE4" content="Continue with Google" imageSrc="/google.svg" />

      <button
        onClick={handleLogin}
        className="flex px-[12px] cursor-pointer py-[12px] t-24 justify-center items-center gap-2 w-full rounded-[18px] shadow-[0px_4px_16px_3px_rgba(37,27,228,0.20)] text-white bg-[#251BE4]"
      >
        Let's Go
      </button>
    </div>
  );
};

export default Login;
