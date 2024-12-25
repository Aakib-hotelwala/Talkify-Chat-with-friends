const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-16 h-16 transform rotate-45 rounded-lg ${
                i % 2 === 0 ? "bg-primary/100 animate-pulse" : "bg-base-20"
              }`}
              style={{
                top: `${(i % 3) * 35}%`,
                left: `${Math.floor(i / 3) * 35}%`,
              }}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
