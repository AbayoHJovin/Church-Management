import {
  Modal,
  Box,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import "@emotion/styled";
import { useState } from "react";
import { FaPen, FaWindowClose } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const Group = () => {
  const [intoView, setIntoView] = useState(false);
  const [selected, setSelected] = useState({ name: "", members: [] });
  const [openModalBox, setopenModalBox] = useState(false);
  const [emezaForm, setEmezaForm] = useState(false);
  const groups = [
    {
      name: "Itsinda rya mbere",
      members: ["Dushimire aine", "Ineza Keza", "Uwera merci"],
    },
    {
      name: "Itsinda rya mbere",
      members: ["Dushimire aine", "Ineza Keza", "Uwera merci"],
    },
    {
      name: "Itsinda rya mbere",
      members: ["Dushimire aine", "Ineza Keza", "Uwera merci"],
    },
    {
      name: "Itsinda rya mbere",
      members: ["Dushimire aine", "Ineza Keza", "Uwera merci"],
    },
    {
      name: "Itsinda rya mbere",
      members: ["Dushimire aine", "Ineza Keza", "Uwera merci"],
    },
    {
      name: "Itsinda rya mbere",
      members: ["Dushimire aine", "Ineza Keza", "Uwera merci"],
    },
  ];
  function handleView(grp) {
    const users = { name: grp.name, members: grp.members };
    setSelected(users);
    setIntoView(true);
  }
  function openModal() {
    setopenModalBox(true);
  }
  function handleClose() {
    setopenModalBox(false);
  }
  function Siba() {
    toast.error("Impamvu ntiyasobanuwe !");
  }
  function Emeza() {
    toast.success("Impamvu yasobanuwe !");
    setopenModalBox(false);
  }
  function handleEmeza() {
    setEmezaForm(true);
  }
  return (
    <div>
      <ToastContainer position="top-center" />
      <Modal open={openModalBox} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            borderRadius: "10px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="flex justify-between bg-white">
            <Typography variant="h6">Impamvu</Typography>
            <FaWindowClose onClick={handleClose} className="cursor-pointer" />
          </div>
          <TextareaAutosize
            placeholder="Sobanura impamvu atitabiriye"
            className="w-full p-2 my-3 border rounded"
            minRows={3}
            required
          />
          <div className="flex justify-end">
            <button
              onClick={Emeza}
              className="bg-green-900 p-2 px-4 rounded-md text-white mx-2"
            >
              Emeza
            </button>
            <button
              onClick={Siba}
              className="bg-red-600 p-2 px-4 rounded-md text-white"
            >
              Siba
            </button>
          </div>
        </Box>
      </Modal>
      {intoView ? (
        emezaForm ? (
          <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
              <h1 className="text-center text-2xl font-bold mb-6">Raporo</h1>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Abasuye
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    umubare w’ abasuye
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Abatanze ibyigisho genzura
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Abafashije
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    umubare w’abafashijwe
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    umubare mbumbwe w’abatanze raporo
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ibitabo by’iyobokamana
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    agaciro k’ubufasha bwatanzwe
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ibyigisho ryo kwishuri ryo kwisabato ryatumijwe
                  </label>
                  <input
                    type="text"
                    className="mt-1 py-2 px-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-green-900 text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={() => setIntoView(false)}
                >
                  Emeza
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-6xl overflow-auto p-6 bg-white shadow-lg">
              <div className="flex justify-end mb-4">
                <input
                  type="text"
                  value="14/6/2022"
                  readOnly
                  className="border-0 bg-gray-100 text-gray-700 px-3 py-2"
                />
              </div>
              <h1 className="text-2xl font-semibold text-center mb-6">
                Itsinda rya mbere
              </h1>
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-green-900 text-white">
                  <tr>
                    <th className="py-3 px-4 border-b">Amazina</th>
                    <th className="py-3 px-4 border-b">Kuza</th>
                    <th className="py-3 px-4 border-b">Gusiba</th>
                    <th className="py-3 px-4 border-b">Impamvu</th>
                    <th className="py-3 px-4 border-b">Gutanga 1/10</th>
                    <th className="py-3 px-4 border-b">Kwiga 7</th>
                  </tr>
                </thead>
                <tbody>
                  {selected.members.map((user, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 border-b">{user}</td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <FaPen className="cursor-pointer" onClick={openModal} />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                      <td className="py-3 px-4 border-b text-center">
                        <input type="checkbox" className="form-checkbox" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6">
              <button
                onClick={handleEmeza}
                className="w-48 py-3 rounded-md bg-green-900 text-white font-semibold hover:bg-green-700 transition"
              >
                Emeza
              </button>
            </div>
          </div>
        )
      ) : (
        <div>
          <div className="flex justify-center text-center">
            <h1 className="font-bold text-2xl">Liste y&apos;ubwitabire</h1>
          </div>
          <div className="space-x-3 text-center justify-center grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 mx-5">
            {groups.map((grp, index) => (
              <div
                key={index}
                className="bg-[#dadce0] p-5 rounded-md my-5 space-y-3"
              >
                <h1>{grp.name}</h1>
                <h1 className="text-[#C89A2D]">Abarigize</h1>
                {grp.members.map((memberName, index) => (
                  <ol key={index}>
                    <li>{memberName}</li>
                  </ol>
                ))}
                <button
                  onClick={() => handleView(grp)}
                  className="bg-green-900 p-2 py-3 text-white font-bold rounded-md"
                >
                  Genzura Ubwitabire
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-green-900 p-2 py-3 rounded-md text-white font-bold">
              Reba andi matsinda
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
