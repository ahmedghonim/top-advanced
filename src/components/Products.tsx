import { Heart, Stethoscope, Syringe } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Syringe,
      title: "Central Venous Catheters (CVC)",
      description:
        "Multi-purpose catheters with advanced biocompatible materials, available in multiple sizes and configurations.",
    },
    {
      icon: Heart,
      title: "Infusion Hemodialysis Sets",
      description:
        "High-performance kits compatible with major dialysis systems, designed for safety and efficiency.",
    },
    {
      icon: Stethoscope,
      title: "Chest Drainage Systems",
      description:
        "Reliable single and double chamber drainage systems with advanced safety valves and pressure monitoring features.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-light-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Product Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4 pb-4 border-b-2 border-gray-100">
                  <IconComponent className="w-8 h-8 text-primary-blue mr-3" />
                  <h4 className="text-xl font-montserrat font-semibold text-primary-blue">
                    {product.title}
                  </h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
