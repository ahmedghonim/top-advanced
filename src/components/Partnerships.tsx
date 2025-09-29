import { ChevronRight } from "lucide-react";

const Partnerships = () => {
  const partnerships = [
    "Collaborations with global technology providers for knowledge transfer.",
    "Local alliances with healthcare organizations to support product testing and adoption.",
    "Partnerships with logistics and distribution companies for efficient market reach.",
  ];

  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Strategic Partnerships
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {partnerships.map((partnership, index) => (
            <div
              key={index}
              className="flex items-start bg-light-gray p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-primary-blue mr-4 mt-1 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">{partnership}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
