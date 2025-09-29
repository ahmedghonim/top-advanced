import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-blue">
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-primary-blue mr-3" />
              <h3 className="text-2xl font-montserrat font-semibold text-primary-blue">
                Vision
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the leading regional provider and manufacturer of advanced
              medical solutions, trusted for quality, innovation, and patient
              safety.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary-blue">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-primary-blue mr-3" />
              <h3 className="text-2xl font-montserrat font-semibold text-primary-blue">
                Mission
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To deliver reliable, high-quality, and accessible medical
              solutions by combining global expertise with local manufacturing
              capabilities, ensuring better healthcare outcomes and sustainable
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
