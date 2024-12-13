import Image from "next/image";

// Define the type for the props
interface ShortProps {
  src: string;  // 'src' should be a string (path to the image)
  alt: string;  // 'alt' should be a string (description of the image)
}

const Short: React.FC<ShortProps> = ({ src, alt }) => {
  return (
    <div className='h-[100px] hidden md:flex w-[107px] border rounded-lg rounded-[32px] shadow-custom-glow  justify-center items-center'>
      {/* Use the Image component with src and alt passed as props */}
      <Image src={src} width={54} height={53} alt={alt} />
    </div>
  );
};

export default Short;
