import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(async () => {
    await fetch("/user/stam")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div className="App"></div>;
}

export default App;
