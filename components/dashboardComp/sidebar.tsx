"use client";

import React, { useState } from "react";
import Orders from "./orderlist";


import ProductsList from "./productslist"
import CustomersList from "./costumerslist"

import Image from "next/image";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");




  const handleCreateProduct = async () => {
    const newProduct = {
      name: productName,
      price: parseInt(productPrice),
      stock: parseInt(productStock),
    };
  
    try {
   
      const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('accessToken='));
      const tokenValue = token ? token.split('=')[1] : null;
        console.log(tokenValue)
      if (!tokenValue) {
        console.error("Token is missing or invalid.");
        return;
      }
  

      const response = await fetch('https://devfest-t8bx.onrender.com/products/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenValue}`, 
        },
        body: JSON.stringify(newProduct),
      });
  
   
      if (!response.ok) {
        throw new Error('Failed to create product');
      }
  
    // aficher product that we have created gg 
      const data = await response.json();
      console.log("Product created:", data);
  
      // returni lal product page
      setSelectedTab("Products");
  
      // reset them to add again ;)
    setProductName("");
    setProductPrice("");
    setProductStock("");
  
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };
  


  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <div className="flex flex-col ">
            <div className="flex-row flex justify-center items-center gap-10 w-[95%] mx-auto p-[30px]">
        <div className="w-[30%] bg-white flex justify-center items-center p-4 rounded-[40px]"><Image className="rounded-[40px]" src={"/graph1.png"} width={400} height={240} alt={"alt1"}  /></div>
        <div className="w-[30%] bg-white flex justify-center items-center p-4 rounded-[40px]"><Image className="rounded-[40px]" src={"/graph2.png"} width={400} height={240}  alt={"alt2"}/></div>
        <div className="w-[30%] bg-white flex justify-center items-center p-4 rounded-[40px]"><Image className="rounded-[40px]" src={"/graph3.png"} width={400} height={240}   alt={"alt3"}/></div>
        
        
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
         
        <div className="flex mt-[30px]  border  flex-col justify-center bg-white items-center  w-[95%] mx-auto rounded-[20px]  p-[30px]">
            <div className="w-full flex justify-start items-center gap-10 h-[80px] bg-[#F3F4F5] text-black rounded-[10px] shadow-md p-4 font-bold">
                <div className="w-[10%]">ID</div>
                <div className="w-[20%]">Product</div>
                <div className="w-[15%]">Category</div>
                <div className="w-[15%]">Status</div>
                <div className="w-[15%]">Date</div>
                <div className="w-[10%]">Inventory</div>
                <div className="w-[10%]">Sales</div>
                <div className="w-[10%]">Price</div>
            </div>
            <Orders />


            
            </div>
          </div>
        );

      case "Products":
        return (
            <>

            


            <button className="w-[340px] h-[64px] bg-blue-5 text-white flex px-[36px] py-[12px] t-24 m-[40px]
             ml-auto cursor-pointer t-36 justify-center items-center gap-2 rounded-[18px] transition-all duration-300 transform hover:scale-105" 
            onClick={() => handleTabClick("ADDProducts")}>
            Create a new product +
            </button>

      
        <div className="flex mt-[30px] flex-col justify-center bg-white items-center border w-[95%] mx-auto rounded-[20px] p-[30px]">
    
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

            </>
            
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
        case "ADDProducts":
            return (
                <div className="flex w-full m-auto mt-[80px] md:w-[594px] p-[55px_41px] flex-col items-center gap-5 rounded-[35px] bg-white shadow-[0px_4px_16px_3px_rgba(37,27,228,0.20)]">
                  <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
              
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full h-[64px] py-[20px] px-[18px] mb-4 bg-[#F4F4F5] border-[#E4E4E7] rounded-[12px] border-2"
                  />
              
                  <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full h-[64px] py-[20px] px-[18px] mb-4 bg-[#F4F4F5] border-[#E4E4E7] rounded-[12px] border-2"
                  />
              
                  <input
                    type="number"
                    placeholder="Product Stock"
                    value={productStock}
                    onChange={(e) => setProductStock(e.target.value)}
                    className="w-full h-[64px] py-[20px] px-[18px] mb-4 bg-[#F4F4F5] border-[#E4E4E7] rounded-[12px] border-2"
                  />
              
                  <button
                    onClick={handleCreateProduct}
                    className="w-full py-[12px] mt-4 bg-[#251BE4] text-white rounded-[18px] shadow-[0px_4px_16px_3px_rgba(37,27,228,0.20)] text-lg flex justify-center items-center gap-2 transition-all duration-300 transform hover:scale-105"
                  >
                    Create Product
                  </button>
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
      <div className="lg:w-[400px] md:w-[30%]  hidden md:flex justify-start gap-4 items-center h-full border px-[20px] py-[20px] bg-slate-50 flex-col sidebar">
      <div className="gap-2 mr-auto  flex justify-center items-center text-[40px] font-bold">
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          priority 
        />
        Boostify
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


            <div
            className={`t-24 mt-auto  rounded-[12px] p-[7px] px-[25px] w-[280px] cursor-pointer transition-all duration-300 }`}>
            Terms & Conditions
            </div>
            <div
            className={`t-24  rounded-[12px] p-[7px] px-[25px] w-[280px] cursor-pointer transition-all duration-300 }`}>
            Suport
            </div>
            <div
            className={`t-24  rounded-[12px] mb-[2%] text-[#D50C0C] p-[7px] px-[25px] w-[280px] cursor-pointer transition-all duration-300 }`}>
            Log out
            </div>
      </div>

      <div className="w-[100%] h-full bg-[#F5F5F6] dashboard flex flex-col justify-center items-center">
      <div className="h-[80px] w-full bg-white border flex items-center justify-end p-4">
  <input
    type="text"
    placeholder="Search..."
    className="w-[300px] h-[40px] rounded-lg bg-gray-200 text-gray-600 placeholder-gray-500 px-4 focus:outline-none focus:ring-2 mr-[8%] focus:ring-gray-400"
  />
 
</div>

      
       
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
