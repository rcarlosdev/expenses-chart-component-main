import { useEffect, useState } from "react";

import ContainerChart from "./components/ContainerChart";
import Footer from "./components/Footer";
import data from "./data.json";
import "./App.css";

function App() {
  const [dataChart, setDataChart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDataChart(data);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="App">
        {isLoading ? (
          <div className="spinner-container">
            {" "}
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <ContainerChart data={dataChart} />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
