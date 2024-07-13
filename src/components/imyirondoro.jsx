import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Imyirondoro() {
  const [isChristian, setIsChristian] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (isChristian === "abakristu") {
      navigate("/userdashboard");
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <div>
      <nav className="flex bg-green-800 w-full z-50 p-4 items-center gap-3 text-white cursor-pointer sticky top-0">
        <FaArrowLeft
          className="hover:translate-x-[-2px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 onClick={() => navigate("/")}>Ahabanza</h1>
      </nav>
      <div className="flex flex-col md:flex-row justify-center items-center text-green-700 h-screen">
        <div className="md:mr-8">
          <img
            src="/ibyacu.png"
            alt="Our Location"
            className="rounded-lg w-[300px] h-[300px]"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-xl font-bold mb-4 text-center text-green-700">
            Andika amazina yawe
          </h1>
          <input
            type="text"
            className="w-full mb-4 p-2 border-2 border-green-800 rounded-md"
            placeholder="Amazina yawe"
          />
          <h1 className="text-xl font-bold mb-4 text-center text-green-700">
            Andika Imeyiri yawe
          </h1>
          <input
            type="text"
            className="w-full mb-4 p-2 border-2 border-green-800 rounded-md"
            placeholder="Imeyiri yawe"
          />
          <h1 className="text-xl font-bold mb-4 text-center text-green-700">
            Andika Ijambobanga ryawe
          </h1>
          <input
            type="text"
            className="w-full mb-4 p-2 border-2 border-green-800 rounded-md"
            placeholder="Ijambobanga ryawe"
          />
          <h1 className="text-xl font-bold mb-4 text-center text-green-700">
            Andika Hitamo icyo ushinzwe
          </h1>
          <select
            value={isChristian}
            onChange={(e) => setIsChristian(e.target.value)}
            className="w-full mb-4 p-2 border-2 border-green-800 rounded-md"
          >
            <option value="pasiteri">Pasiteri</option>
            <option value="ishuri">Ishuri</option>
            <option value="umutungo">Umutungo</option>
            <option value="abakristu">Abakristu</option>
            <option value="ibikorwa">Ibikorwa</option>
          </select>
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-bold py-2 rounded-md hover:bg-green-600"
          >
            Injira
          </button>
        </form>
      </div>
    </div>
  );
}
