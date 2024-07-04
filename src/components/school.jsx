import { useState } from "react";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line react/prop-types
const BarGraph = ({ labels, datasets }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && !chartInstance.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: "Isabato",
              },
            },
            y: {
              title: {
                display: true,
                text: "Abantu",
              },
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [labels, datasets]);

  return <canvas ref={chartRef}></canvas>;
};

// eslint-disable-next-line react/prop-types
const Card = ({ title, value }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white text-center">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

const School = () => {
  const [startDate, setStartDate] = useState(new Date());
  const labels = [
    "isabato 1",
    "isabato 2",
    "isabato 3",
    "isabato 4",
    "isabato 5",
  ];
  const datasets = [
    {
      label: "Abitabiriye",
      data: [300, 200, 150, 100, 50],
      backgroundColor: "#036666",
    },
    {
      label: "Abasibye",
      data: [200, 150, 100, 50, 75],
      backgroundColor: "#D2A629",
    },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <Card title="Abitabiriye" value="1028" />
        <Card title="Abasibye" value="500" />
        <Card title="Abahungu" value="400" />
        <Card title="Abakobwa" value="228" />
      </div>
      <div className="w-full border rounded-lg shadow-md bg-white p-4 mb-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          Ubwitabire bw’ishuri ry&apos;isabato
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-1/2 h-96">
            <BarGraph labels={labels} datasets={datasets} />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Hitamo igihe
            </h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
              calendarClassName="p-2 border rounded-lg shadow-md bg-white"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Abarimu bigisha ishuri" value="" />
        <Card title="Amasomo yizwe" value="" />
        <Card title="Isuzumabumenyi" value="" />
      </div>
    </div>
  );
};

export default School;
