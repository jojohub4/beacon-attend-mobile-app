
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-900 mb-6">
          Comprehensive IT Support & Solutions
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-10">
          Your trusted partner for all IT services, from hardware installation to 24/7 remote support. 
          We ensure your technology works for you, not against you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="text-lg px-8 py-6">
            <Link to="#contact">Get Support</Link>
          </Button>
          <Button asChild variant="outline" className="text-lg px-8 py-6">
            <Link to="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
