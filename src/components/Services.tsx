
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Database, HardDrive, Monitor, Server, Shield, Users } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow bg-gradient-to-br from-soft-purple to-white">
      <CardHeader>
        <div className="mb-2 h-12 w-12 rounded-lg bg-vivid-purple bg-opacity-20 flex items-center justify-center">
          <Icon className="h-6 w-6 text-vivid-purple" />
        </div>
        <CardTitle className="text-secondary-purple">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Hardware & Software Installation",
      description: "Expert assistance with setting up new devices and installing essential software for optimal performance.",
      icon: HardDrive
    },
    {
      title: "CCTV Installation",
      description: "Professional installation of reliable surveillance systems for homes, offices, and businesses.",
      icon: Monitor
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive evaluation of systems for known vulnerabilities and recommendation of necessary mitigations.",
      icon: Shield
    },
    {
      title: "Custom IT Solutions",
      description: "Tailored IT services designed to meet the unique needs of your business, ensuring optimal performance and productivity.",
      icon: Database
    },
    {
      title: "Consulting Services",
      description: "Expert advice aimed at improving the quality and efficiency of work environments and technology infrastructure.",
      icon: Users
    },
    {
      title: "On-Site Assistance",
      description: "Prompt and reliable support with certified technicians for issues that require a hands-on approach.",
      icon: Server
    },
    {
      title: "24/7 Remote Support",
      description: "Round-the-clock assistance from certified experts to help with any technical issues, whenever they arise.",
      icon: Clock
    },
    {
      title: "Preventative Maintenance",
      description: "Regular system check-ups and maintenance procedures to help avoid future technical issues and downtime.",
      icon: Shield
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Njoro Tech specializes in a range of IT services designed to support both individual and business tech needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
