import Image from "next/image";

interface ButtonProps {
  arrow?: number;
  wide: number;
  bgColor: string; 
  textColor: string; 
  content: string;   
  onClick?:   () => void; 
}

const Button: React.FC<ButtonProps> = ({ arrow, wide, bgColor, textColor, content, onClick }) => {
  return (
    <div
      className={`flex px-[36px] py-[12px] t-24 cursor-pointer justify-center items-center gap-2 rounded-[18px] transition-all duration-300 transform hover:scale-105 ${wide ? 'w-[100%]' : ''}`}
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick} 
    >
      <span>{content}</span>
      {arrow === 1 && (
        <Image
          src="/arrow-right.svg" 
          alt="Arrow"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default Button;
