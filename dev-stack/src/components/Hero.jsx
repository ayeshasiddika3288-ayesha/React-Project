import bannerImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: text content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
          Build Your Ideal <br />
          <span className="text-brand-gradient">Development Stack</span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex items-center gap-4">
          {/* Explore Technologies */}
          <button className="bg-brand-gradient text-white font-medium px-6 py-3 rounded-lg cursor-pointer hover:opacity-90 hover:scale-105 transition-all duration-200">
            Explore Technologies
          </button>

          {/* Learn More */}
          <button className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg cursor-pointer hover-brand-gradient hover:text-white hover:border-transparent hover:scale-105 transition-all duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Right: banner image */}
      <div className="flex justify-center">
        <img
          src={bannerImage}
          alt="Development stack illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;