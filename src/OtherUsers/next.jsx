const Groups = () => {
  const details = {
    title: "Itsinda rya mbere",
    name: "Gukunda gusenga",
    members: [
      { izina: "Dushimire Aine", Ahasomwe: "Abakorinto 2:30" },
      { izina: "Dushimire Aine", Ahasomwe: "Abakorinto 2:30" },
      { izina: "Dushimire Aine", Ahasomwe: "Abakorinto 2:30" },
    ],
    presence: "50%",
    absence: "50%",
    date: "12/10/2022",
  };
  const group = [details, details, details, details, details, details];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {group.map((item, index) => (
            <div
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
              key={index}
            >
              <h2 className="text-lg sm:text-xl font-bold mb-2">
                {item.title}
              </h2>
              <div className="text-xs sm:text-sm text-gray-500 mb-4">
                {item.date}
              </div>
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="flex flex-col mb-4 sm:mb-0">
                    <h4 className="text-sm font-bold mb-1">Abarigize</h4>
                    <ul className="list-disc list-inside text-xs">
                      {item.members.map((member, index) => (
                        <li key={index}>{member.izina}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold mb-1">Amasomo bize</h4>
                    <ul className="list-disc list-inside text-xs">
                      {item.members.map((user, index) => (
                        <li key={index}>{user.Ahasomwe}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                      <p className="text-xs sm:text-sm font-bold text-yellow-400">
                        {item.presence}
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-green-400 flex items-center justify-center">
                      <p className="text-xs sm:text-sm font-bold text-green-400">
                        {item.absence}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-4">
                  <p className="text-xs sm:text-sm font-bold text-gray-500">
                    Abitabiriye
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-500">
                    Abasibye
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="justify-center flex my-6">
        <button className="bg-green-900 p-3 px-4 text-white rounded-md text-center">
          Reba andi matsinda
        </button>
      </div>
    </div>
  );
};

export default Groups;
