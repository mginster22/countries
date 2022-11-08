import { useEffect, useState } from "react";
import "./App.css";
import CardsSection from "./components/CardsSection";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main>
        <Controls/>
        <CardsSection/>
      </Main>
    </>
  );
};

export default App;
