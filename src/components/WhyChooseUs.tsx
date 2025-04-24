import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Satisfaction Guarantee",
      description: "If we don't fix it, you don't pay. We stand behind our work with a 100% satisfaction guarantee."
    },
    {
      title: "Expertise Across Platforms",
      description: "Our team provides support for various operating systems, including Windows, Android, and Linux."
    },
    {
      title: "Comprehensive Device Support",
      description: "We assist with a wide range of devices from computers and printers to smartphones, smart TVs, wearables, and home automation systems."
    },
    {
      title: "Flexible Support Options",
      description: "Choose from virtual house calls, phone support, chat assistance, or on-site visits based on your needs."
    },
    {
      title: "Fast Response Times",
      description: "Our team is committed to prompt responses and quick resolution of your technical issues."
    },
    {
      title: "Experienced Technicians",
      description: "All our technicians are certified and continuously trained in the latest technologies."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-blue">Why Choose Njoro Tech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional service and technical expertise to meet all your IT needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-vivid-blue"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-vivid-blue mr-3 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-semibold text-secondary-blue">{reason.title}</h3>
              </div>
              <p className="text-gray-600 ml-9">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
