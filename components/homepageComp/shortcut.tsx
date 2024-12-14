import Image from "next/image";


interface ShortProps {
  src: string
  alt: string;
}
// the small icons in the hero saction
const Short: React.FC<ShortProps> = ({ src, alt }) => {
  return (
    <div className='h-[100px] hidden md:flex w-[107px] border rounded-lg rounded-[32px] shadow-custom-glow  justify-center items-center'>
     
      <Image src={src} width={54} height={53} alt={alt} />
    </div>
  );
};

export default Short;
