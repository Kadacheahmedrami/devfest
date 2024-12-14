// components/Loader.tsx
const Loader = () => {
  return (
    <html lang="en">
    <body>
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200 absolute top-0 left-0 z-50">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
    </div>
    </body>
  </html>
   
  );
};

export default Loader;
