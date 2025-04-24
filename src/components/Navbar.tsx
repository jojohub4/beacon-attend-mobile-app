
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">NjoroTech</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:space-x-10">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
            <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Why Choose Us</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
          </nav>
          
          {/* Contact button - desktop */}
          <div className="hidden md:flex">
            <Button asChild>
              <a href="tel:+254713053781">Call Now</a>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 pb-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>Home</Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>Services</a>
              <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>Why Choose Us</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium" onClick={toggleMenu}>Contact</a>
              <Button asChild className="mt-2">
                <a href="tel:+254713053781">Call Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
