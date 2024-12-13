import React from "react";

interface PhasesProps {
  currentindex: number; // Current step index
  index: number; // Total number of steps
}

const Phases: React.FC<PhasesProps> = ({ currentindex,index }) => {
  return (
    <div className= {`mt-[30px] flex flex-row w-full mx-auto md:w-[594px] gap-2 ${currentindex == 0 ?" hidden":"flex"}`}>
      {[...Array(index)].map((_, i) => (
        <div
          key={i}
          className={`h-[20px] w-[32%] rounded-[20px] ${
            currentindex >= i+1 ? "bg-blue-5" : "bg-gray-1"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default Phases;
