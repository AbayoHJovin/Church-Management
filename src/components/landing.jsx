import { useState } from "react";
import { FaArrowRight, FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "Ese ni iki cyatumye mukora uru rubuga ???",
    "Ese ni iki cyatumye mukora uru rubuga ???",
    "Ese ni iki cyatumye mukora uru rubuga ???",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const review = {
    id: 1,
    name: "Mwizerwa Elie",
    image: "./user.png",
    review:
      "Runo rubuga kuri nge n'itorero ryange rwabaye ikiraro kiza kuko byongeye imicungire myiza y'umutungo igabanya itinda  ry'imirimo yongera umuvuduko",
  };
  const reviews = [];
  for (let i = 0; i < 6; i++) {
    reviews.push(review);
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
const navigate=useNavigate()
  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-20">
        <div className="flex items-center">
          <img src="./logo.png" alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-green-950 font-bold text-xl">SDA</h1>
        </div>
        <div className="hidden md:flex md:justify-between items-center">
          <div className="flex md:mx-10 space-x-10">
            <h1 className="cursor-pointer">Muhira</h1>
            <h1 className="cursor-pointer">Ibyacu</h1>
            <h1 className="cursor-pointer">Ibibazo</h1>
            <h1 className="cursor-pointer">Serivise</h1>
            <h1 className="cursor-pointer">Ibyo tuvugaho</h1>
          </div>
          <button onClick={()=>navigate("/credentials")} className="border-dashed border-2 font-bold text-green-700 border-green-950 px-4 py-2 rounded">
            Injira
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden z-40 ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-md sticky top-0 right-0 h-screen w-64`}
      >
        <ul className="space-y-4 p-4">
          <li className="cursor-pointer">Muhira</li>
          <li className="cursor-pointer">Ibyacu</li>
          <li className="cursor-pointer">Ibibazo</li>
          <li className="cursor-pointer">Serivise</li>
          <li className="cursor-pointer">Ibyo tuvugaho</li>
          <li>
            <button onClick={()=>navigate("/credentials")} className="border-dashed border-2 border-green-950 px-4 py-2 rounded">
              Injira
            </button>
          </li>
        </ul>
      </div>
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center py-16 bg-gray-100 h-screen"
      >
        <img src="./logo.png" alt="Logo" className="w-24 h-24 mb-4" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold max-w-2xl mb-6 px-4">
          Uru ni urubuga rufasha itorero ry&apos;abadiventiste ry&apos;umunsi wa
          karindwi kwita ku mirimo itandukanye y&apos;urusengero ndetse no
          kurwitaho buri munsi
        </h1>
        <div className="flex items-center">
          <button className="font-bold text-white bg-green-600 py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none">
            Sura
          </button>
          <FaArrowRight
            className="ml-2 text-white bg-green-600 p-2 rounded-full hover:translate-x-1 cursor-pointer hover:bg-green-700 transition-colors duration-300"
            size={30}
          />
        </div>
      </section>
      <section id="serivise" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Serivise</h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-4 items-center justify-center">
              <div className="bg-gray-50 shadow-md flex flex-col p-0 items-center justify-center border border-green-950 rounded w-full sm:w-[220px] mx-auto">
                <img
                  src="service.png"
                  alt="Service 3"
                  className="w-full sm:w-[220px] h-48 mb-4"
                />
                <h3 className="font-bold bg-green-700 text-white w-full p-5 text-center">
                  Ibikorwa byo mu rusengero
                </h3>
              </div>
              <div className="bg-gray-50 shadow-md flex flex-col p-0 items-center justify-center border border-green-950 rounded w-full sm:w-[220px] mx-auto">
                <img
                  src="service.png"
                  alt="Service 3"
                  className="w-full sm:w-[220px] h-48 mb-4"
                />
                <h3 className="font-bold bg-green-700 text-white w-full p-5 text-center">
                  Ibikorwa byo mu rusengero
                </h3>
              </div>
              <div className="bg-gray-50 shadow-md flex flex-col p-0 items-center justify-center border border-green-950 rounded w-full sm:w-[220px] mx-auto">
                <img
                  src="service.png"
                  alt="Service 3"
                  className="w-full sm:w-[220px] h-48 mb-4"
                />
                <h3 className="font-bold bg-green-700 text-white w-full p-5 text-center">
                  Ibikorwa byo mu rusengero
                </h3>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-10 ">
            <button className="font-bold text-white bg-green-600 py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none">
              Soma ibindi
            </button>
            <FaArrowRight
              className="ml-2 text-white bg-green-600 p-2 rounded-full hover:translate-x-1 cursor-pointer hover:bg-green-700 transition-colors duration-300"
              size={30}
            />
          </div>
        </div>
      </section>
      <section id="ibyacu" className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Ibyacu</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="ibyacu.png"
              alt="About Us"
              className="w-full max-w-xs mx-auto mb-4 md:mb-0"
            />
            <p className="max-w-xl mx-auto md:mx-0">
              Dutanga ubufasha butandukanye mu gutanga uburyo bworoshye bwo
              kwita ku rusengero rw&apos; imbere ry&apos; Imana ndetse tukani n’
              kumirimo itandukanye mu buzima bwacu byabu misi ndetse n&apos;
              iterambere ryacu.
            </p>
          </div>
        </div>
      </section>
      <section id="reviews" className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Ibyo batuvugaho</h2>
        <div className="container mx-auto px-4">
          <Carousel
            responsive={responsive}
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={false}
            interval={5000}
            stopOnHover={true}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white shadow-md border border-green-700 p-6 rounded text-center mx-2 items-center justify-center content-center"
              >
                <img src={review.image} alt="user" className="mx-auto" />
                <p className="italic">&quot;{review.review}&quot;</p>
                <p className="mt-4 font-bold">- {review.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section id="faq" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ibibazo</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center">
            <div className="lg:w-1/2">
              <p className="text-center lg:text-left mb-8 lg:mb-0">
                Ese hari ibibazo ujya ugira k u buryo urubuga rwacu rukora ??
              </p>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md p-4 rounded cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{faq}</h3>
                      <FaChevronDown
                        className={`transform transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openIndex === index && (
                      <div className="mt-2">
                        <p className="text-gray-600">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <img
                src="FAQs.png"
                alt="FAQ Illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="abafatanya" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Abo dukorana</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <img
            className="w-24 h-24 object-contain"
            src="./apple.png"
            alt="apple"
          />
          <img
            className="w-24 h-24 object-contain"
            src="./logo.png"
            alt="sda"
          />
          <img
            className="w-24 h-24 object-contain"
            src="./google.png"
            alt="google"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
