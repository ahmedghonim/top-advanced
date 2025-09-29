import { Award, Flag, Globe, Shield } from "lucide-react";

const Quality = () => {
  const certifications = [
    {
      icon: Award,
      title: "ISO 13485",
      description: "Medical devices quality management systems",
    },
    {
      icon: Globe,
      title: "CE Certification",
      description: "Access to European markets",
    },
    {
      icon: Shield,
      title: "SFDA Registration",
      description: "Local regulatory approval",
    },
    {
      icon: Flag,
      title: "FDA Compliance",
      description: "Plans for global expansion",
    },
  ];

  return (
    <section id="quality" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-8 relative section-divider">
          Quality & Compliance
        </h2>

        <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
          TOP ADVANCED is committed to excellence in quality and safety. Our
          operations follow international standards including:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-primary-blue mx-auto" />
                </div>
                <h4 className="text-xl font-montserrat font-semibold text-dark-navy mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Quality;
