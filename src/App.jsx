import { useEffect, useState } from "react";

import ContainerChar from "./components/ContainerChar";
import Footer from "./components/Footer";
import data from "./data.json";
import "./App.css";

function App() {
  const [dataChar, setDataChar] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDataChar(data);
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
          <ContainerChar data={dataChar} />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
