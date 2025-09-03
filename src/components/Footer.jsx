import React from "react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="font-bold text-lg text-white">Cognigere Solutions</div>
          <p className="mt-2 text-sm text-gray-400">
            Empowering businesses with smart digital solutions. Innovation,
            reliability, and expertise at your service.
          </p>
        </div>
        <div>
          <div className="font-semibold text-yellow-400">Contact</div>
          <div className="mt-2 text-sm text-gray-400">
            support@cognigere.com <br /> +91 98765 43210
          </div>
        </div>
      </div>

      {/* Road Lines Animation */}
      <div className="relative h-6 bg-gray-800 flex items-center justify-center overflow-hidden">
        <div className="flex space-x-6 animate-[move_6s_linear_infinite]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-12 h-2 bg-yellow-400 rounded"></div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-sm text-gray-500 py-4 text-center">
        © {new Date().getFullYear()} Cognigere Solutions — All rights reserved.
      </div>

      {/* Road Animation */}
      <style>
        {`
          @keyframes move {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
