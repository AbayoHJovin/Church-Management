import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { Modal } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const Acts = () => {
  const [openModal, setOpenModal] = useState(false);
  function handleCloseReadModal() {
    setOpenModal(false);
    toast.error("Igikorwa nticyabashije gutangizwa!");
  }
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Ibyarangiye",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
      {
        label: "Ibikorwa",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  function handleSubmit(e) {
    e.preventDefault();
    toast.success("Urakoze kwemeza igikorwa gishya!");
    setOpenModal(false);
  }
  return (
    <div className="p-6 md:p-12">
      <ToastContainer className="z-50" />
      <Modal
        open={openModal}
        onClose={handleCloseReadModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="text-center bg-white rounded-md p-12 space-y-3"
        >
          <FaTimesCircle
            className="text-2xl hover:text-red-500 cursor-pointer duration-75"
            onClick={handleCloseReadModal}
          />
          <h1 className="font-bold text-2xl">Tangiza igikorwa gishya</h1>
          <h1>Izina ry&apos;igikorwa</h1>
          <input
            type="text"
            className="border-2 border-green-800 p-2 px-4 rounded-md "
          />
          <h1>Igihe kizamara</h1>
          <input
            type="number"
            className="border-2 border-green-800 p-2 px-4 rounded-md "
          />
          <h1>Itangira ry&apos;igikorwa</h1>
          <input
            type="date"
            className="border-2 border-green-800 p-2 px-4 rounded-md "
          />
          <h1>Ubusobanuro</h1>
          <textarea className="border-2 border-green-800 p-2 px-4 rounded-md "></textarea>
          <div className="space-x-7">
            <button
              type="submit"
              className="bg-green-800 cursor-pointer p-2 px-5 rounded-md text-white"
            >
              Emeza
            </button>
            <button
              onClick={handleCloseReadModal}
              className="bg-red-500 cursor-pointer p-2 px-5 rounded-md text-white"
            >
              Siba
            </button>
          </div>
        </form>
      </Modal>
      <header className="bg-teal-600 text-white p-6 rounded-lg mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Reba ibikorwa bitandukanye</h1>
          <p>
            Reba uburyo butandukanye ibikorwa byo mu itorero bikorwa urebere
            uburyo butandukanye
          </p>
        </div>
        <div>
          <img src="./acts.png" alt="icon" className="h-12 w-12" />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Ubwubatsi", icon: "./ubwubatsi.png" },
          { title: "Gufasha", icon: "gufasha.png" },
          { title: "Umusanzu", icon: "./umusanzu.png" },
          { title: "Ubwubatsi", icon: "ubwubatsi.png" },
        ].map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={category.icon}
              alt={category.title}
              className="h-12 w-12 mb-4"
            />
            <h2 className="font-bold">{category.title}</h2>
            <div className="flex justify-between w-full mt-4">
              <span>Ibiri gukorwa</span>
              <span>Ibyarangiye</span>
            </div>
            <div className="flex justify-between w-full mt-2">
              <span>100</span>
              <span>100</span>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="font-bold mb-4">Igishushanyo cy’ibikorwa</h2>
        <div className="h-64">
          <Line data={data} options={options} />
        </div>
        <div className="flex justify-center items-center mt-6">
          <div className="text-center">
            <p className="text-2xl font-bold">72%</p>
            <p>Ibyarangiye</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md">
        <div
          className="flex items-center space-x-3 my-3 cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          <FaPlusCircle className="text-green-800 text-4xl" />
          <h1>Tangiza igikorwa</h1>
        </div>
        <h2 className="font-bold mb-4">Ibiheruka</h2>
        <ul className="list-disc list-inside">
          {Array(5)
            .fill("Kubaka ishuri ry'isabato")
            .map((activity, index) => (
              <li key={index} className="mb-2">
                {activity}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Acts;
