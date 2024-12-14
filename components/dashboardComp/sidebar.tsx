"use client";

import React, { useState } from "react";
import Orders from "./orderlist";
import ProductsList from "./productslist"
import CustomersList from "./costumerslist"
import Image from "next/image";
import BarChart from "../graph"
const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <div className="flex flex-col ">
            <div className="flex-row flex justify-center items-center gap-10 w-[95%] mx-auto p-[30px]">
        <div className="w-[30%] h-[270px] bg-white flex justify-center items-center p-4 rounded-[40px]"><BarChart data={[10,20,30,10,50]} /></div>
        <div className="w-[30%] h-[270px] bg-white flex justify-center items-center p-4 rounded-[40px]"><BarChart data={[30,20,30,60,50]} /></div>
        <div className="w-[30%] h-[270px] bg-white flex justify-center items-center p-4 rounded-[40px]"><BarChart data={[10,5,20,10,100]} /></div>
        
        
      </div>
      
      <div className="flex-row flex justify-center items-center gap-10  w-[95%] mx-auto p-[30px]">
        <div className="w-[30%] t-33 h-[120px] bg-white flex justify-center items-center p-4 rounded-[20px]">+ 120 clients</div>
        <div className="w-[30%] t-33 h-[120px] bg-white flex justify-center items-center p-4 rounded-[20px]">+ 300 oreders</div>
        <div className="w-[30%] t-33 h-[120px] bg-white flex justify-center items-center p-4 rounded-[20px]">+ 720 costumers</div>
        
        
      </div>
        </div>
       
;   

      case "Orders": 
        return (
          <div className="h-full flex flex-col w-full bg-[#F5F5F6]">
            
            <div className="flex mt-[30px]  flex-col justify-center bg-white items-center border   w-[95%] mx-auto rounded-[20px]  p-[30px]">
              <div className="w-full flex justify-start items-center gap-6 h-[50px] bg-[#F3F4F5] text-black rounded-[10px] shadow-md p-4 font-bold">
                <div className="w-[15%]">ID</div>
                <div className="w-[15%]">DATE</div>
                <div className="w-[15%]">Customer</div>
                <div className="w-[15%]">Phone Number</div>
                <div className="w-[15%]">Location</div>
                <div className="w-[15%]">Customer Service</div>
                <div className="w-[15%]">Product</div>
                <div className="w-[15%]">Category</div>
                <div className="w-[15%]">Track Code</div>
                <div className="w-[15%]">Status</div>
              </div>
              <Orders />
            
            </div>
          </div>
        );

      case "Products":
        return (
            <div className="flex mt-[30px]  border  flex-col justify-center bg-white items-center  w-[95%] mx-auto rounded-[20px]  p-[30px]">
             <div className="w-full flex justify-start items-center gap-6 h-[50px] bg-[#F3F4F5] text-black rounded-[10px] shadow-md p-4 font-bold">
        <div className="w-[10%]">ID</div>
        <div className="w-[20%]">Name</div>
        <div className="w-[15%]">Category</div>
        <div className="w-[15%]">Status</div>
        <div className="w-[15%]">Add Date</div>
        <div className="w-[10%]">Inventory</div>
        <div className="w-[10%]">Sales</div>
        <div className="w-[10%]">Price</div>
      </div>
            <ProductsList />
          </div>
        );

      case "Customers":
        return (
         <div className="flex border  mt-[30px] flex-col justify-center bg-white items-center  w-[95%] mx-auto rounded-[20px]  p-[30px]">
                <div className="w-full flex justify-start items-center gap-6 h-[50px] bg-[#F3F4F5] text-black rounded-[10px] shadow-md p-4 font-bold">
        <div className="w-[20%]">ID</div>
        <div className="w-[20%]">Customer</div>
         <div className="w-[20%]">Phone Number</div>
         <div className="w-[20%]">Location</div>
        <div className="w-[20%]">Date</div>
      
       
     
      
      </div>
            <CustomersList></CustomersList>
          </div>
        );

      default:
        return <h1 className="text-3xl">Welcome to the Dashboard</h1>;
    }
  };

  const handleTabClick = (tab:any) => {
    if (tab !== selectedTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedTab(tab);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="w-full h-full  flex flex-row">
      <div className="w-[400px] flex justify-start gap-4 items-center h-full border px-[20px] py-[20px] bg-slate-50 flex-col sidebar">
      <div className="gap-2 mr-auto  flex justify-center items-center text-[40px] font-bold">
        <Image
          src="/svg/logo.svg"
          alt="logo"
          width={60}
          height={60}
          priority // Ensures it loads faster (above-the-fold)
        />
        Bostify
      </div>
        {["Dashboard", "Orders", "Products", "Customers"].map((tab) => (
          <div
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`t-24  rounded-[12px] p-[7px] px-[25px] w-[280px] cursor-pointer transition-all duration-300 ${
              selectedTab === tab
                ? "bg-blue-500 text-white scale-105"
                : "bg-white text-black hover:scale-105 hover:bg-blue-100"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="w-[100%] h-full bg-[#F5F5F6] dashboard flex justify-center items-center">
        <div
          className={`transition-opacity overflow-y-scroll w-[100%] h-full transition-transform duration-300 ${
            isTransitioning ? "opacity-0 -translate-y-5" : "opacity-100 translate-y-0"
          }`}
        >
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
