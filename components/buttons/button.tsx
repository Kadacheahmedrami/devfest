import Image from "next/image";

// Define the type for the props
interface ButtonProps {
  arrow: number;
  wide: number;
  bgColor: string;  // Background color passed as a string (e.g., '#251BE4')
  textColor: string; // Text color passed as a string (e.g., 'white' or '#251BE4')
  content : string
}

const Button: React.FC<ButtonProps> = ({ arrow, wide, bgColor, textColor ,content }) => {
  return (
    <div
      className={`flex px-[36px] py-[12px] t-24 justify-center items-center gap-2 rounded-[18px] `}
      style={{ backgroundColor: bgColor, color: textColor ,content }}
    >
      {content}
    </div>
  );
};

export default Button;
