import butterLogo from "../assets/images/butter_web_1.png"; // ✅ adjust path as needed

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex justify-center mb-6 ${className}`}>
      <img
        src={butterLogo}
        alt="Butter Logo"
        className="w-28 h-28 object-contain"
      />
    </div>
  );
};

export default Logo;
