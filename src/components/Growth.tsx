const Growth = () => {
  const strategies = [
    "Launch core critical care product lines.",
    "Expand manufacturing capacity with modular production lines.",
    "Introduce additional medical disposables and surgical consumables.",
    "Grow into regional markets through partnerships and exports.",
    "Establish R&D capabilities to design next-generation medical solutions.",
  ];

  return (
    <section id="growth" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center text-dark-navy mb-12 relative section-divider">
          Growth Strategy
        </h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {strategies.map((strategy, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-primary-blue to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed pt-2">{strategy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Growth;
