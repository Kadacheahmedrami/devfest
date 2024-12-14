
import Button from '../buttons/button'





const Finalsac = () => {
  return (
    <div className='flex flex-col w-full md:flex-row justify-center mt-[100px] md:mt-[40px] gap-10 items-center '>
      <a href="./pages/welcome">
      <Button  wide={0}  arrow={0}   bgColor="#251BE4" textColor="white"  content='Start now'/>
      </a>
   
      <a href="./pages/welcome">
      <Button wide={0}  arrow={0}  bgColor="white" textColor="#251BE4" content='learn more' />
      </a>
  
    
    </div>
  );
};

export default Finalsac;
