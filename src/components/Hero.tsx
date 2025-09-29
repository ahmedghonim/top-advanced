import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative gradient-bg text-white pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 gradient-overlay"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src="/logo.png"
          alt="TOP ADVANCED Logo"
          width={100}
          height={100}
          className="mx-auto mb-6"
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            TOP ADVANCED
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Healthcare solutions provider specializing in high-quality medical
            devices, consumables, and cutting-edge healthcare technologies.
            Establishing state-of-the-art manufacturing facilities for critical
            care products including Central Venous Catheters, Infusion
            Hemodialysis Sets, and Chest Drainage Systems.
          </p>
          <a
            href="#about"
            className="inline-block gradient-button text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
