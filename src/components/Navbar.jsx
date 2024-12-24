import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/IITD.png';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Close dropdowns and mobile menu when the route changes
    setOpenDropdown(null);
    closeMobileMenu();
  }, [location]);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-20 top-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap">
        {/* Logo and Name */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <h1 className="text-xl font-bold">Prof. Sunil Jha</h1>
        </div>

        {/* Desktop Menu (visible on larger screens) */}
        <ul className="hidden md:flex space-x-6 text-gray-900">
          <li>
            <Link to="/" className="nav">Home</Link>
          </li>

          {/* Publications Section */}
          <li className="relative">
            <button onClick={() => toggleDropdown("publications")} className="flex items-center nav">
              Publications
              <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "publications" ? "rotate-180" : ""}`} />
            </button>
            <ul className={`${openDropdown === "publications" ? "block" : "hidden"} absolute left-0 mt-2 bg-white shadow-lg p-2 rounded-md space-y-1`}>
              <li><Link to="/international-journal" className="block px-3 py-1 hover:bg-gray-200">International Journal</Link></li>
              <li><Link to="/conference-paper" className="block px-3 py-1 hover:bg-gray-200">Conference Paper</Link></li>
              <li><Link to="/books-supervised" className="block px-3 py-1 hover:bg-gray-200">Books Supervised</Link></li>
            </ul>
          </li>

          {/* Projects Section */}
          <li className="relative">
            <button onClick={() => toggleDropdown("projects")} className="flex items-center nav">
              Projects
              <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "projects" ? "rotate-180" : ""}`} />
            </button>
            <ul className={`${openDropdown === "projects" ? "block" : "hidden"} absolute left-0 mt-2 bg-white shadow-lg p-2 rounded-md space-y-1`}>
              <li><Link to="/fiit-projects" className="block px-3 py-1 hover:bg-gray-200">FIIT Projects</Link></li>
              <li><Link to="/patents" className="block px-3 py-1 hover:bg-gray-200">Patents</Link></li>
              <li><Link to="/rd-consultants" className="block px-3 py-1 hover:bg-gray-200">R&D Consultants</Link></li>
              <li><Link to="/supervision" className="block px-3 py-1 hover:bg-gray-200">Supervisions</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/awards" className="nav">Awards</Link>
          </li>

          {/* Experience Section */}
          <li className="relative">
            <button onClick={() => toggleDropdown("experience")} className="flex items-center nav">
              Experience
              <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "experience" ? "rotate-180" : ""}`} />
            </button>
            <ul className={`${openDropdown === "experience" ? "block" : "hidden"} absolute left-0 mt-2 bg-white shadow-lg p-2 rounded-md space-y-1`}>
              <li><Link to="/teaching" className="block px-3 py-1 hover:bg-gray-200">Teaching</Link></li>
              <li><Link to="/industrial-experience" className="block px-3 py-1 hover:bg-gray-200">Industrial Experience</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/iafsm" className="nav">IAFSM</Link>
          </li>

          <li>
            <Link to="/other-activities" className="nav">Other Activities</Link>
          </li>
          <li>
            <Link to="/gallery" className="nav">Gallery</Link>
          </li>

        
         
        </ul>

        {/* Mobile Menu Button (visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenu3Line className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Overlay with Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-start"
          onClick={closeMobileMenu}
        >
          {/* Sidebar Menu */}
          <div className="w-3/4 md:w-64 bg-white shadow-lg p-6 space-y-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              <img src={logo} alt="Logo" className="h-12 mr-2" />
              <h1 className="text-xl font-bold">Prof. Sunil Jha</h1>
            </div>
            <ul className="flex flex-col space-y-4 text-gray-900">
              <li><Link to="/" className="nav" onClick={closeMobileMenu}>Home</Link></li>

              {/* Publications Section */}
              <li className="relative">
                <button onClick={() => toggleDropdown("publications")} className="flex items-center nav">
                  Publications
                  <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "publications" ? "rotate-180" : ""}`} />
                </button>
                <ul className={`${openDropdown === "publications" ? "block" : "hidden"} space-y-1`}>
                  <li><Link to="/international-journal" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>International Journal</Link></li>
                  <li><Link to="/conference-paper" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>Conference Paper</Link></li>
                  <li><Link to="/books-supervised" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>Books Supervised</Link></li>
                </ul>
              </li>

              {/* Projects Section */}
              <li className="relative">
                <button onClick={() => toggleDropdown("projects")} className="flex items-center nav">
                  Projects
                  <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "projects" ? "rotate-180" : ""}`} />
                </button>
                <ul className={`${openDropdown === "projects" ? "block" : "hidden"} space-y-1`}>
                  <li><Link to="/fiit-projects" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>FIIT Projects</Link></li>
                  <li><Link to="/patents" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>Patents</Link></li>
                  <li><Link to="/rd-consultants" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>R&D Consultants</Link></li>
                  <li><Link to="/supervision" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>Supervisions</Link></li>
                </ul>
              </li>

              <li><Link to="/awards" className="nav" onClick={closeMobileMenu}>Awards</Link></li>

              {/* Experience Section */}
              <li className="relative">
                <button onClick={() => toggleDropdown("experience")} className="flex items-center nav">
                  Experience
                  <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "experience" ? "rotate-180" : ""}`} />
                </button>
                <ul className={`${openDropdown === "experience" ? "block" : "hidden"} space-y-1`}>
                  <li><Link to="/teaching" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>Teaching</Link></li>
                  <li><Link to="/industrial-experience" className="block px-3 py-1 hover:bg-gray-200" onClick={closeMobileMenu}>Industrial Experience</Link></li>
                </ul>
              </li>
              <li><Link to="/iafsm" className="nav" onClick={closeMobileMenu}>IAFSM</Link></li>
              <li><Link to="/other-activities" className="nav" onClick={closeMobileMenu}>Other Activities</Link></li>
              <li><Link to="/gallery" className="nav" onClick={closeMobileMenu}>Gallery</Link></li>
              
            </ul>
          </div>
        </div>
      )}
      {/* Styles for hover effect */}
      <style jsx>{`
        .nav {
          display: inline-flex;
          align-items: center;
          position: relative;
          text-decoration: none;
          color: inherit;
          transition: all 0.6s;
        }
        .nav::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: black;
          transform-origin: bottom right;
          transition: transform 0.6s ease-out;
        }
        .nav:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
