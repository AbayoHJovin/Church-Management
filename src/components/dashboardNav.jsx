import { useState, useEffect } from "react";
import { FaArrowLeft, FaBars, FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { MdSend } from "react-icons/md";

export default function AdminNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toBeToggled, setToBeToggled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setToBeToggled(true);
      } else {
        setToBeToggled(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      {isSearchOpen && toBeToggled ? (
        <div className="flex items-center bg-gray-100 p-4 absolute w-screen justify-between">
          <FaArrowLeft
            onClick={() => setIsSearchOpen(false)}
            className="mr-5 hover:translate-x-[-5px] cursor-pointer z-50"
            size={25}
          />
          <div className="flex items-center">
            <FaSearch
              className="text-2xl cursor-pointer"
              onClick={toggleSearch}
            />
            <input
              type="text"
              placeholder="Shaka icyo wifuza"
              className="block border-2 border-green-700 px-4 py-2 rounded-md outline-none ml-4"
            />
          </div>
        </div>
      ) : (
        <nav className="flex items-center md:justify-between justify-evenly p-4 px-10 bg-white shadow-md sticky top-0 z-20">
          <div className="flex items-center">
            <img src="./logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            <h1 className="text-green-950 font-bold text-xl">SDA</h1>
          </div>
          <img
            src="./user.png"
            alt="user profile"
            className="w-12 h-12 md:hidden block rounded-full cursor-pointer"
          />
          <FaSearch
            className="text-2xl md:hidden block cursor-pointer"
            onClick={toggleSearch}
          />
          <div className="md:block hidden items-center">
            <div className="flex items-center">
              <FaSearch className="text-2xl cursor-pointer" />
              <input
                type="text"
                placeholder="Shaka icyo wifuza"
                className="block border-2 border-green-700 px-4 py-2 rounded-md outline-none ml-4"
              />
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <MdSend className="text-green-800 hidden md:block text-2xl cursor-pointer font-bold" />
            <FaBell className="text-green-800 hidden md:block text-2xl cursor-pointer font-bold" />
            <img
              src="./user.png"
              alt="user profile"
              className="w-12 h-12 md:block hidden rounded-full cursor-pointer"
            />
            <div className="hidden md:block text-right">
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                James Kalisa
              </h1>
              <h1 className="text-sm md:text-base lg:text-lg xl:text-xl">
                Umukuru w&apos;itorero
              </h1>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      )}
      {isOpen && (
        <div className="md:hidden p-4 bg-white shadow-md">
          <div className="flex-col mx-5 items-start space-y-4">
            <MdSend className="text-green-800 text-2xl cursor-pointer font-bold" />
            <FaBell className="text-green-800 text-2xl cursor-pointer font-bold" />
            <div className="flex items-center space-x-4">
              <img
                src="./user.png"
                alt="user profile"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
              <div>
                <h1 className="text-lg">James Kalisa</h1>
                <h1 className="text-sm">Umukuru w&apos;itorero</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
