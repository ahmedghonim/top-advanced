import { ChevronRight } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Quality First",
      description:
        "Every product adheres to the highest international standards.",
    },
    {
      title: "Innovation",
      description:
        "Constantly adopting new technologies and healthcare solutions.",
    },
    {
      title: "Integrity",
      description: "Building trust through transparency and professionalism.",
    },
    {
      title: "Patient Safety",
      description: "Ensuring products enhance care and improve outcomes.",
    },
    {
      title: "Partnership",
      description:
        "Developing long-term collaborations with global and local partners.",
    },
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Core Values
        </h2>

        <div className="space-y-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 text-primary-blue mr-4 mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-dark-navy">
                  {value.title}:
                </span>
                <span className="text-gray-700 ml-2">{value.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
