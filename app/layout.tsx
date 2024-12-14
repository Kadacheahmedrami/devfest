'use client'
import { useEffect, useState } from "react";
import "./text.css";
import "./globals.css";
import Header from '../components/Header';

import Loader from "../components/Loader"
let token : any
// recoverr the token from the cokkie with the js
const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

 
  useEffect(() => {
    const checkToken = async () => {
      token = getCookie("accessToken");

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
            'Authorization': `Bearer ${token}`, // send the acces token to check its validity
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

  // routes that the user can enter without authentifiying
    const publicPaths = ['/', '/pages/login', '/pages/signup'];
    
 //
    if (!publicPaths.includes(currentPath) && isAuthenticated === false) {
 
      if (typeof window !== "undefined") {
        window.location.href = "/pages/login"; 
      }
    }
  }, [isAuthenticated]); // change when the variable chang

  if (isAuthenticated === null) {

    return  <Loader></Loader>;
  }

 // finaly if non of the commands up excute or finish excuting the page load the children of the root layout
  return (
    <html lang="en">
      <body>
      <Header isAuthenticated={isAuthenticated} token={token} />
        {children}
      </body>
    </html>
  );
}
