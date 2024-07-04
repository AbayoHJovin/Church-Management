import { useEffect, useRef } from "react";
// import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const Graph = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "Amafaranga y'injiye",
        data: [200, 400, 600, 800, 500, 300, 700, 400, 600, 800, 300, 500],
        borderColor: "#D2A629",
        fill: false,
      },
      {
        label: "Amafaranga yasohotse",
        data: [500, 300, 700, 400, 600, 800, 300, 500, 700, 600, 800, 500],
        borderColor: "#036666",
        fill: false,
      },
    ],
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Ukwezi",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amafaranga",
        },
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    if (chartRef.current && !chartInstance.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: data,
        options: options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data, options]);

  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      <h2 className="text-xl font-bold mb-4">Raporo y’umutungo</h2>
      <div className="w-full h-96 md:w-3/4 lg:w-1/2">
        <canvas ref={chartRef} />
      </div>
      <div className="mt-4 p-4 border rounded-lg shadow-md bg-white w-full md:w-3/4 lg:w-1/2">
        <h3 className="text-lg font-semibold mb-2">Ibisobanuro</h3>
        <div className="flex items-center mb-2">
          <span className="block w-6 h-6 mr-2 bg-[#D2A629]"></span>
          <span>Amafaranga y&apos;injiye</span>
        </div>
        <div className="flex items-center">
          <span className="block w-6 h-6 mr-2 bg-[#036666]"></span>
          <span>Amafaranga yasohotse</span>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-[#036666] text-white rounded shadow-md">
        Soma byinshi
      </button>
    </div>
  );
};

export default Graph;
