
import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
            <div className="mb-3">
            <img src={logo} alt="Dev Stack" className="h-8 object-contain" />
          </div>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-pink-600">Home</a>
          <a href="#" className="hover:text-gray-900">Technologies</a>
          <a href="#" className="hover:text-gray-900">Projects</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>

        {/* Right buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-gray-700">Sign In</button>
          <button className="bg-brand-gradient text-white text-sm font-medium px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>

        {/* Mobile: hamburger */}
        <button className="md:hidden text-gray-700">
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;