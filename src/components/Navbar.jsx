import React from "react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">
            M
          </div>
          <div className="font-semibold text-gray-800">MoversCo</div>
        </div>

        {/* Contact Link Only */}
        <div>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:scale-105 transform transition"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
