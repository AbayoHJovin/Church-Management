import { FaLinkedin, FaMailBulk, FaMapMarker, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 py-6 md:py-10 items-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-x-12">
        {/* Contact Form Section */}
        <div className="mx-auto grid grid-cols-1 w-full max-w-xs md:max-w-none text-center">
          <div className=" space-y-4 flex-col items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Injizamo imeyiri yawe"
              className="text-white bg-transparent p-3 border border-white outline-none rounded-md mb-4 md:mb-0 md:mr-2 "
            />
            <button className="p-3 bg-white text-black font-bold rounded-md md:ml-2">
              Ohereza
            </button>
          </div>
          <p className="text-white text-center mt-4">
            Tuvugishe byinshi byihariye kubyo dukora witinda vuga buri munsi
            ntankomyi mubyo dukora byose
          </p>
        </div>

        {/* Services Section */}
        <div className="text-white space-y-2 mx-auto w-full max-w-xs md:max-w-none">
          <h2 className="text-2xl font-bold">Serivisi</h2>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
        </div>

        {/* Location and Contact Info Section */}
        <div className="text-white space-y-2 mx-auto w-full max-w-xs md:max-w-none">
          <h2 className="text-2xl font-bold">Aho tubarizwa</h2>
          <div className="flex items-center gap-2">
            <FaMapMarker size={20} />
            <span>Kigali, Rwanda</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone size={20} />
            <span>+250785574637</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMailBulk size={20} />
            <span>emanagement@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin size={20} />
            <span>emanag-011</span>
          </div>
        </div>

        {/* About Us Section */}
        <div className="text-white space-y-2 mx-auto w-full max-w-xs md:max-w-none">
          <h2 className="text-2xl font-bold">Ibyacu</h2>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
          <p>Kwita kubyo mu rusengero</p>
        </div>
      </div>
      <hr className="mt-6" />
    </footer>
  );
}
