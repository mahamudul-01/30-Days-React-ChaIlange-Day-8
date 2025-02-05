import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          MyLogo
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <Link to='/' className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/form" className="text-white hover:text-gray-200">
              form
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Optional: User Profile or Login Button */}
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;