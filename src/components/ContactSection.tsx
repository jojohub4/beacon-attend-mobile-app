
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactInfo = ({ icon: Icon, title, content, link, linkText }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        {link ? (
          <a href={link} className="text-blue-600 hover:underline">
            {linkText || content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need assistance or have questions? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <ContactInfo
              icon={Phone}
              title="Phone"
              content="+254 713 053 781"
              link="tel:+254713053781"
            />
            
            <ContactInfo
              icon={Mail}
              title="Email"
              content="004wainaina@gmail.com"
              link="mailto:004wainaina@gmail.com"
            />
            
            <ContactInfo
              icon={Globe}
              title="Website"
              content="njorotech.com"
              link="https://njorotech.com"
            />
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Service Accessibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Virtual House Calls:</strong> Remote assistance where a technician connects directly to your device.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>Phone and Chat Support:</strong> Real-time assistance from certified experts.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700"><strong>On-Site Visits:</strong> For problems that require hands-on intervention.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
