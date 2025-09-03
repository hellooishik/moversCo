// components/ScrollIndicator.jsx
import React from "react";

export default function ScrollIndicator({ onClick, label = "Scroll" }) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <button
        onClick={onClick}
        aria-label={label}
        className="flex flex-col items-center group focus:outline-none"
      >
        {/* Glowing circle with gradient + floating effect */}
        <div className="relative w-16 h-16 rounded-full border border-yellow-400/40 bg-gradient-to-b from-yellow-500/20 to-transparent flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.4)] group-hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] transition-all duration-300 animate-float">
          {/* Stylish arrow */}
          <svg
            className="w-8 h-8 text-yellow-400 group-hover:text-orange-400 transition-colors duration-300 animate-bounce-slow"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 20c-.26 0-.52-.1-.71-.29l-7-7a1 1 0 0 1 1.42-1.42L11 16.17V4a1 1 0 1 1 2 0v12.17l5.29-5.88a1 1 0 0 1 1.42 1.42l-7 7c-.19.19-.45.29-.71.29z" />
          </svg>
        </div>

        {/* Label */}
        <span className="mt-3 text-sm font-semibold text-yellow-300 group-hover:text-orange-400 transition-colors duration-300 tracking-[0.2em] uppercase drop-shadow-md">
          {label}
        </span>
      </button>

      {/* Custom animations */}
      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </div>
  );
}
