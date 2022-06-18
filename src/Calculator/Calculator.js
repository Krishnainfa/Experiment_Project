import React from "react";
// import css
import "./cal.css";

const Calculator = () => {
  // state
  // const [num1, setNum1] = React.useState("");
  // const [num2, setNum2] = React.useState("");
  // const [operator, setOperator] = React.useState("");
  // const [result, setResult] = React.useState("");

  // event handlers
  // const handleNum1 = (e) => {
  //   setNum1(e.target.value);
  // };
  // const handleNum2 = (e) => {
  //   setNum2(e.target.value);
  // };
  // const handleOperator = (e) => {
  //   setOperator(e.target.value);
  // };
  // const handleResult = (e) => {
  //   setResult(e.target.value);
  // };

  // render

  return (
    <div className="topcontainer">
      <center>
        <br />
        <br />
        <br />
        {/* create a input with no arrow in type = number */}
        <div className="container">
          <input type="text" className="inputbox" />
        </div>

        <br />
        {/* required all button */}
        <div className="btncontainer">
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">+</button>
        </div>

        <div className="btncontainer">
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button">-</button>
        </div>

        <div className="btncontainer">
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button">*</button>
        </div>

        <div className="btncontainer">
          <button className="button">0</button>
          <button className="button">.</button>
          <button className="button">=</button>
          <button className="button">/</button>
        </div>
      </center>
    </div>
  );
};

export default Calculator;
