import { ChevronRight } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      title: "Localization",
      description: "Supporting Vision 2030 goals for local manufacturing.",
    },
    {
      title: "Speed & Reliability",
      description: "Reduced lead times compared to imports.",
    },
    {
      title: "Comprehensive Solutions",
      description: "From supply and technology to local production.",
    },
    {
      title: "Sustainability",
      description: "Investing in eco-friendly and safe production processes.",
    },
    {
      title: "Customer-Centric Approach",
      description: "Tailored solutions and ongoing support.",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Competitive Advantages
        </h2>

        <div className="space-y-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-primary-blue mr-4 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-dark-navy">
                  {advantage.title}:
                </span>
                <span className="text-gray-700 ml-2">
                  {advantage.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
