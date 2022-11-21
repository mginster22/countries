import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Home countries={countries} setCountries={setCountries} />}
          />
        </Routes>
      </Main>
    </>
  );
};

export default App;
