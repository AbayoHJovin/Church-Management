import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js/auto";

const Graph = ({ title, labels, dataSets, reasons }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = {
    labels: labels,
    datasets: dataSets,
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
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="w-full h-96 md:w-3/4 lg:w-1/2">
        <canvas ref={chartRef} />
      </div>
      <div className="mt-4 p-4 border rounded-lg shadow-md bg-white w-full md:w-3/4 lg:w-1/2">
        <h3 className="text-lg font-semibold mb-2">Imibare</h3>
        <div className="flex flex-col md:flex-row md:space-x-3">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center mb-2 md:mb-0"
            >
              <h1 className="mb-1">{item.cause}</h1>
              <button className="bg-[#D2A629] text-white p-2 rounded-md px-5">
                ${item.amount}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Graph.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataSets: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
      borderColor: PropTypes.string.isRequired,
      fill: PropTypes.bool.isRequired,
    })
  ).isRequired,
  reasons: PropTypes.arrayOf(
    PropTypes.shape({
      cause: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Graphs = () => {
  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  const dataSets1 = [
    {
      label: "Amafaranga y'injiye",
      data: [200, 400, 600, 800, 500, 300, 700, 400, 600, 800, 300, 500],
      borderColor: "#D2A629",
      fill: false,
    },
  ];
  const dataSets2 = [
    {
      label: "Amafaranga yasohotse",
      data: [500, 300, 700, 400, 600, 800, 300, 500, 700, 600, 800, 500],
      borderColor: "#036666",
      fill: false,
    },
  ];

  const reasons1 = [
    { cause: "Isabato", amount: 300 },
    { cause: "Inkunga", amount: 50 },
    { cause: "Amatsinda", amount: 100 },
  ];

  const reasons2 = [
    { cause: "Gufasha", amount: 300 },
    { cause: "Inkunga", amount: 50 },
    { cause: "Inyubako", amount: 100 },
  ];

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <Graph
          title="Ayinjiye"
          labels={labels}
          dataSets={dataSets1}
          reasons={reasons1}
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Graph
          title="Ayasohotse"
          labels={labels}
          dataSets={dataSets2}
          reasons={reasons2}
        />
      </div>
    </div>
  );
};

export default Graphs;
