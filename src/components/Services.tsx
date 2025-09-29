const Services = () => {
  const services = [
    {
      title: "Medical Supply & Distribution",
      items: [
        "Wide range of medical devices, consumables, and hospital equipment.",
        "Partnerships with leading international manufacturers.",
      ],
    },
    {
      title: "Healthcare Technology Solutions",
      items: [
        "Integration of medical IT systems.",
        "Training and technical support for healthcare providers.",
      ],
    },
    {
      title: "After-Sales Support",
      items: [
        "Maintenance contracts, spare parts, and user training.",
        "Dedicated customer service team for 24/7 support.",
      ],
    },
    {
      title: "Local Manufacturing (Strategic Project)",
      items: [
        "Advanced production lines for critical care devices.",
        "ISO 13485-certified operations with full compliance to regulatory requirements.",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Our Services
        </h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-blue to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-montserrat font-semibold text-dark-navy mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-2 ml-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
