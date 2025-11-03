import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../components/Logo";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-butter-gradient flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Soft overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative max-w-lg w-full text-center z-10">
        {/* Logo with subtle animation */}
        <div className="animate-bounce-slow">
          <Logo className="mb-8 mx-auto w-32 h-32" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight drop-shadow-xl">
          Discover & Book <br />
          <span className="text-[#FFF8E7]">Your Favorite Restaurants</span>
        </h1>

        <p className="text-[#FFF8E7] text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
          Experience seamless restaurant reservations with Butter —
          connecting food lovers to the best dining spots around you.
        </p>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/signup")}
          // variant="gradient"
          className="w-full sm:w-auto px-12 py-4 text-lg font-semibold shadow-lg bg-yellow-50 text-yellow-500
                     hover:scale-105 active:scale-95 transition-transform rounded-full"
        >
          Get Started
        </Button>

      
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse-slow delay-300" />
    </div>
  );
};

export default Landing;
