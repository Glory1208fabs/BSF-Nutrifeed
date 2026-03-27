const Hero = () => {
  return (
    <section className="bg-green-50 py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">

        <div>
          <h2 className="text-4xl font-bold mb-4">
            Sustainable Feed Production Made Simple
          </h2>

          <p className="text-white-600 mb-6">
            Track poultry feed production, monitor farm growth,
            and optimize feed management with BSF-Nutrifeed.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
              Get Started
            </button>

            <button className=" border-green-600 text-green-600 px-6 py-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-green-200 h-72 rounded-xl flex items-center justify-center">
          Dashboard Preview
        </div>

      </div>
    </section>
  );
};

export default Hero;