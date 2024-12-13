
import Button from '../components/buttons/button'





const Finalsac = () => {
  return (
    <div className='flex flex-col w-full md:flex-row justify-center mt-[100px] md:mt-[40px] gap-10 items-center '>
    <Button wide={0}  arrow={0}   bgColor="#251BE4" textColor="white"  content='Start now'/>
    
    <Button wide={0}  arrow={0}  bgColor="white" textColor="#251BE4" content='learn more' />
    
    </div>
  );
};

export default Finalsac;
