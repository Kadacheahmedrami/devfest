'use client'
import { useEffect, useState } from "react";
import "./text.css";
import "./globals.css";
import Loader from "../components/Loader"
// Utility function to get cookies
const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Runs on initial render and re-renders when the page reloads
  useEffect(() => {
    const checkToken = async () => {
      const token = getCookie("accessToken");

      if (!token) {
        console.log('No access token found');
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await fetch('https://devfest-t8bx.onrender.com/users/check', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Set the token in the Authorization header
          },
       
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Token is valid:', data);
          setIsAuthenticated(true);
        } else {
          console.log('Invalid token');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error during token verification:', error);
        setIsAuthenticated(false);
      }
    };

    checkToken();
  }, []); 

  useEffect(() => {
 
    const currentPath = window.location.pathname;

  
    const publicPaths = ['/', '/pages/login', '/pages/signup'];
    
 
    if (!publicPaths.includes(currentPath) && isAuthenticated === false) {
 
      if (typeof window !== "undefined") {
        window.location.href = "/pages/login"; 
      }
    }
  }, [isAuthenticated]); // Only run this effect when isAuthenticated changes

  if (isAuthenticated === null) {

    return  <Loader></Loader>;
  }

  // Only render the children if the user is authenticated, or the current route is public
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
