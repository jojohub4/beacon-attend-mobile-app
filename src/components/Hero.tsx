
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-soft-blue to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6 text-gradient-primary">
          Comprehensive IT Support & Solutions
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-10">
          Your trusted partner for all IT services, from hardware installation to 24/7 remote support. 
          We ensure your technology works for you, not against you.
        </p>
        
      </div>
    </div>
  );
};

export default Hero;
