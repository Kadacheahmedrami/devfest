import Image from 'next/image';

// Define the type for the props
interface AuthbuttonProps {
  bgColor: string;
  textColor: string;
  content: string;
  imageSrc?: string;
  onClick?: () => void; // Make onClick optional
}

const Authbutton: React.FC<AuthbuttonProps> = ({ bgColor, textColor, content, imageSrc, onClick }) => {
  return (
    <div
      className={
        `flex px-[12px] cursor-pointer py-[12px] t-24 justify-center items-center gap-2 w-full rounded-[18px] shadow-[0px_4px_16px_3px_rgba(37,27,228,0.20)]`
      }
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick} // Attach the onClick handler
    >
      {imageSrc && (
        <Image src={imageSrc} height={40} width={40} alt="icon" />
      )}
      {content}
    </div>
  );
};

export default Authbutton;
