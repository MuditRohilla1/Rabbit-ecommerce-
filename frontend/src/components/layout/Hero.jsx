import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[300px] md:h-[600px] lg:h-[650px] object-cover blur-[2px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfit with fast worldwide shipping
          </p>
          <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:text-white hover:bg-gray-800">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
