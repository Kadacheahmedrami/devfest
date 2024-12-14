import React from 'react';

type CustomerProps = {
  id: string;
  name: string;
  phoneNumber: string;
  location: string; // Renamed from 'address' for consistency
  registeredDate: string; // Registered date as a formatted string
};

const Customer: React.FC<CustomerProps> = ({
  id,
  name,
  phoneNumber,
  location,
  registeredDate,
}) => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-10 h-[80px] bg-white flex-row rounded-[10px] shadow-md p-4">
        <div className='w-[18%]'>{id}</div>
        
        <div className='w-[18%]'>{name}</div>
        <div className='w-[18%]'>{phoneNumber}</div>
        <div className='w-[18%]'>{location}</div>
    
        <div className='w-[18%]'>{registeredDate}</div>
      </div>
      <div className="w-full h-[2px] bg-slate-400"></div>
    </>
  );
};

export default Customer;
