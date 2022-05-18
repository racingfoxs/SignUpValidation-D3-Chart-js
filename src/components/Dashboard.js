import { React, useState } from "react";
import Chart from "./Chart";
import "./dashboard.scss";
import "./charts_components/charts_components.scss";

const Dashboard = () => {
  const testData = [
    { id: 1, Country: "China", Population: 100 },
    { id: 2, Country: "India", Population: 90 },
    { id: 3, Country: "Usa", Population: 80 },
    { id: 4, Country: "Mexico", Population: 60 },
    { id: 5, Country: "Nepal", Population: 20 },
    { id: 6, Country: "Sri Lanka", Population: 40 },
  ];

  const [data, setData] = useState(testData);

  const randomHandler = () => {
    const newData = data.map((ele) => {
      ele.Population = Math.ceil(Math.random(ele.Population) * 100);
      return ele;
    });
    setData(newData);
  };

  return (
    <>
      <div className="--dashboard-container --flex">
        <div className="--wrapper-main --border">
        <div className="--wrapper">
          <Chart data={data} />
      </div>
      <div className="--wrapper --flex">
      <div className="--btn--container">
          <button
            className="--btn --background --btnStyle"
            onClick={randomHandler}
          >
            Random Data Generator
          </button>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
