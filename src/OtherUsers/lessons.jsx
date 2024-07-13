export default function Lessons() {
  const sampleData = {
    title: "Kubana n'Imana",
    date: "12/10/2024",
    Abarimu: [
      { izina: "Dushimire Aine", Ahasomwe: "Abakorinto 2:30" },
      { izina: "Dushimire Aine", Ahasomwe: "Abakorinto 2:30" },
      { izina: "Dushimire Aine", Ahasomwe: "Abakorinto 2:30" },
    ],
    incamake:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean sagittis ipsum et massa consectetur ultricies.",
  };

  const lessons = [sampleData, sampleData, sampleData, sampleData];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Incamake y&apos;amasomo yizwe
      </h1>
      <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {lessons.map((lesson, index) => (
          <div className="bg-gray-200 p-4 m-5 rounded-lg shadow-lg" key={index}>
            <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <div className="mb-4 sm:mb-0 sm:mr-4">
                <h3 className="text-[#C89A2D] font-bold mb-1">Abarimu</h3>
                <ol className="list-decimal list-inside">
                  {lesson.Abarimu.map((teacher, index) => (
                    <li key={index} className="ml-4">
                      {teacher.izina}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mb-4 sm:mb-0 sm:mr-4">
                <h3 className="text-[#C89A2D] font-bold mb-1">Ahasomwe</h3>
                <ol className="list-decimal list-inside">
                  {lesson.Abarimu.map((teacher, index) => (
                    <li key={index} className="ml-4">
                      {teacher.Ahasomwe}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div>
              <h3 className="text-[#C89A2D] font-bold mb-1">Incamake</h3>
              <p>{lesson.incamake}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center flex my-6">
        <button className="bg-green-900 p-3 px-4 text-white rounded-md text-center">
          Reba andi Masomo
        </button>
      </div>
    </div>
  );
}
