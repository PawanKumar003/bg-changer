import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  const [bgColor, setBgColor] = useState("");
  const useVal = useRef();

  const changeColor = (bgclr) => {
    setBgColor(bgclr);
  };
  return (
    <>
      <div
        style={{ backgroundColor: bgColor ? bgColor : "gray" }}
        className="mainDiv"
      ></div>

      <div className="footer">
        <Button changeColor={(bgclr) => changeColor("green")} bgColor="Green" />
        <Button changeColor={(bgclr) => changeColor("red")} bgColor="Red" />
        <Button
          changeColor={(bgclr) => changeColor("yellow")}
          bgColor="Yellow"
        />
        <Button
          changeColor={(bgclr) => changeColor("orange")}
          bgColor="Orange"
        />

        {/* <button className="button" onClick={() => setBgColor("red")}>
          Red
        </button>
        <button className="button" onClick={() => setBgColor("green")}>
          Green
        </button>
        <button className="button" onClick={() => setBgColor("yellow")}>
          Yellow
        </button> */}
      </div>
    </>
  );
}

export default App;
