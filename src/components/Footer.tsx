
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NjoroTech</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for comprehensive IT support and solutions. We provide expert assistance for all your technology needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#why-choose-us" className="text-gray-300 hover:text-white">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>
                <a href="tel:+254713053781" className="hover:text-white">+254 713 053 781</a>
              </p>
              <p>
                <a href="mailto:004wainaina@gmail.com" className="hover:text-white">004wainaina@gmail.com</a>
              </p>
              <p>
                <a href="https://njorotech.com" className="hover:text-white" target="_blank" rel="noopener noreferrer">njorotech.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} NjoroTech. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
