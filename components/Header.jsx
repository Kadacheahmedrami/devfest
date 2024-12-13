
import Link from "next/link";


import Image from "next/image";


const Header = () => {


  return (
    <div className="h-[88px] px-[7%] flex justify-center items-center w-full bg-white">
    
        {/* Logo - Preloaded image for faster load */}
        <div   className="gap-2 mr-auto flex justify-center items-center text-[30px] font-bold"> 
        <Image 
          src="/svg/logo.svg" 
          alt="logo" 
          width={60} 
          height={60} 
          priority // Ensures it loads faster (above-the-fold)
        />
              <Image 
      
      src="/png/tabib.png" 
      alt="logo" 
      width={160} 
      height={160} 
      priority // Ensures it loads faster (above-the-fold)
    />
    
        </div>
     

        {/* Desktop Navigation */}
        <ul className="md:items-center lg:flex hidden mr-auto">
        {["Home", "Services", "About", "Contact"].map((menuItem, index) => (
          <li
            key={index}
            className="mx-6 whitespace-nowrap font-medium flex-none relative group"
          >
            <Link
              href={`/${menuItem.toLowerCase().replace(" ", "")}`}
              className="relative text-xl transition duration-300 w-fit block text-mainColor tracking-wide hover:text-orangeColor"
            >
              {menuItem}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>


        {/* Desktop Buttons */}
        <div className="hidden flex-row gap-6 lg:flex lg:items-center">
  <a href="/pages/signup">
    <button className="relative h-12 w-40 overflow-hidden border border-[#251BE4] text-[#251BE4] shadow-2xl transition-all   rounded-[10px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#251BE4] before:duration-300 before:ease-out hover:text-white hover:shadow-[0_4px_20px_#251BE4] hover:before:h-40 hover:before:w-40 hover:before:opacity-100">
      <span className="relative z-10">Sign in</span>
    </button>
  </a>
  <a href="/pages/login">
    <button className="relative h-12 w-40 overflow-hidden border border-[#251BE4] text-white hover:text-[#251BE4] rounded-[10px]  shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm bg-[#251BE4]  before:bg-white before:duration-300 before:ease-out  hover:shadow-[0_4px_20px_#13251BE476F8] hover:before:h-40 hover:before:w-40 hover:before:opacity-100">
      <span className="relative z-10">Join us</span>
    </button>
  </a>
</div>



    
     
    
    </div>
  );
};

export default Header;
