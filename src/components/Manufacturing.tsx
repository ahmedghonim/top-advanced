import { Settings, Target } from "lucide-react";

const Manufacturing = () => {
  const features = [
    "Cleanroom facilities meeting international standards",
    "Quality Control & Microbiology laboratories",
    "Automated and semi-automated production lines",
    "Packaging and sterilization (EO/Gamma)",
    "Compliance with SFDA, CE Mark, and ISO 13485",
  ];

  return (
    <section id="manufacturing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Manufacturing Project
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-blue">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-primary-blue mr-3" />
              <h3 className="text-2xl font-montserrat font-semibold text-primary-blue">
                Objective
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To establish a world-class production facility for critical care
              products, reducing reliability on importing and supporting
              healthcare sustainability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-blue">
            <div className="flex items-center mb-6">
              <Settings className="w-8 h-8 text-primary-blue mr-3" />
              <h3 className="text-2xl font-montserrat font-semibold text-primary-blue">
                Key Features
              </h3>
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
