import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-[#ffffff] w-full border-b border-black/5 fixed z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <img src={logo} alt="Movish Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl tracking-wide font-semibold font-['Yeseva_One']">
                Movish
                <span className="block text-[10px] font-normal tracking-widest text-black/60 group-hover:text-[#b88a1e] transition-colors duration-300">
                  HOSPITALITY
                </span>
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="ml-auto flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-md">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 group/nav-link transition-all duration-300 ${
                      isActive
                        ? "text-[#b88a1e] font-semibold"
                        : "text-black/70 hover:text-[#b88a1e]"
                    }`
                  }
                >
                  {item.label}

                  {/* underline */}
                  <span
                    className={`
                      absolute bottom-0 left-0 h-0.5 bg-[#b88a1e]
                      transition-all duration-300
                      w-0 group-hover/nav-link:w-full
                    `}
                  />

                  {/* active underline */}
                  <span
                    className={({ isActive }) =>
                      `absolute bottom-0 left-0 h-0.5 bg-[#b88a1e] ${isActive ? "w-full" : "w-0"}`
                    }
                  />
                  {/* Hover indicator dot */}
                  <span
                    className="
                      absolute -top-1 -right-1 w-1 h-1 
                      bg-[#b88a1e] rounded-full 
                      opacity-0 group-hover/nav-link:opacity-100 
                      transition-opacity duration-300
                    "
                  />
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-md text-black/70 hover:text-[#b88a1e] hover:bg-black/5 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* CTA Button - Hidden on mobile */}
            <button
              className="
                hidden md:flex
                bg-[#b88a1e] text-white px-5 py-2 
                rounded-full text-sm font-medium 
                items-center gap-2 
                group/cta relative overflow-hidden
                hover:text-white hover:gap-3
                transition-all duration-300
                hover:shadow-md hover:shadow-amber-900/10
              "
            >
              {/* Button glow effect */}
              <span
                className={`
                  absolute inset-0 rounded-full 
                  transition-opacity duration-300
                  ${
                    activeItem === "contact"
                      ? "opacity-20 bg-gradient-to-r from-white/30 via-white/10 to-white/30"
                      : "opacity-0 group-hover/cta:opacity-20"
                  }
                `}
              />

              {/* Button content */}
              <span className="relative transition-all duration-300 group-hover/cta:translate-x-[-2px]">
                <Link to="/contact">Let's Discuss</Link>
              </span>
              <span
                className="
                  relative transition-all duration-300 
                  group-hover/cta:translate-x-1 group-hover/cta:scale-125
                "
              >
                →
              </span>

              {/* Button shine effect */}
              <span
                className="
                  absolute inset-0 rounded-full 
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  translate-x-[-100%] group-hover/cta:translate-x-[100%]
                  transition-transform duration-700
                "
              />
            </button>
          </div>
        </div>

        {/* Active indicator bar for the whole navbar when on specific sections */}
        <div
          className={`
          h-1 w-full bg-gradient-to-r from-transparent via-[#b88a1e]/30 to-transparent
          transition-opacity duration-500
          ${activeItem !== "Home" ? "opacity-100" : "opacity-0"}
        `}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:hidden
        `}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`
          fixed top-0 right-0 z-40 h-full w-80 max-w-full
          bg-white transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
          shadow-2xl
        `}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" onClick={closeMenu}>
              <div className="flex items-center gap-2 group cursor-pointer">
                <img src={logo} alt="Movish Logo" className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xl tracking-wide font-semibold font-['Yeseva_One']">
                  Movish
                  <span className="block text-[10px] font-normal tracking-widest text-black/60 group-hover:text-[#b88a1e] transition-colors duration-300">
                    HOSPITALITY
                  </span>
                </span>
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-black/5 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-[#b88a1e]/10 text-[#b88a1e] font-semibold"
                        : "text-black/70 hover:bg-black/5 hover:text-[#b88a1e]"
                    }`
                  }
                >
                  <span className="text-lg">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Mobile CTA Button */}
          <div className="pt-6 border-t border-black/10">
            <button
              className="
                w-full
                bg-[#b88a1e] text-white px-5 py-3 
                rounded-full text-sm font-medium 
                flex items-center justify-center gap-2 
                group/cta relative overflow-hidden
                hover:text-white hover:gap-3
                transition-all duration-300
                hover:shadow-md hover:shadow-amber-900/10
              "
              onClick={closeMenu}
            >
              {/* Button glow effect */}
              <span
                className={`
                  absolute inset-0 rounded-full 
                  transition-opacity duration-300
                  ${
                    activeItem === "contact"
                      ? "opacity-20 bg-gradient-to-r from-white/30 via-white/10 to-white/30"
                      : "opacity-0 group-hover/cta:opacity-20"
                  }
                `}
              />

              {/* Button content */}
              <span className="relative transition-all duration-300 group-hover/cta:translate-x-[-2px]">
                <Link to="/contact">Let's Discuss</Link>
              </span>
              <span
                className="
                  relative transition-all duration-300 
                  group-hover/cta:translate-x-1 group-hover/cta:scale-125
                "
              >
                →
              </span>

              {/* Button shine effect */}
              <span
                className="
                  absolute inset-0 rounded-full 
                  bg-gradient-to-r from-transparent via-white/20 to-transparent
                  translate-x-[-100%] group-hover/cta:translate-x-[100%]
                  transition-transform duration-700
                "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
