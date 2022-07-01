import React, { useState } from "react";

export default function Calc() {
  const [result, setResult] = useState("");

  const handleOnClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clearTxt = () => {
    setResult(result.slice(0, -1));
  };

  const allClear = () => {
    setResult("");
  };

  const CalculateResult = () => {
    try {
      setResult(eval(result.toString()));
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div>
      <h1 className="heading">
        Calculator using React js, Developer: Yash Khare
      </h1>

      <div className="container">
        <div className="calcultor">
          <div className="inputSection">
            <input type="text" value={result} />
          </div>
          <div className="row">
            <button type="button" className="col-4 clear" onClick={clearTxt}>
              Clear
            </button>

            <button type="button" className="col-4 allClear" onClick={allClear}>
              C
            </button>
            <button
              type="button"
              className="col-4 operators"
              name="/"
              onClick={handleOnClick}
            >
              ÷
            </button>
          </div>
          <div className="row">
            <button className="col-3 number" name="7" onClick={handleOnClick}>
              7
            </button>
            <button className="col-3 number" name="8" onClick={handleOnClick}>
              8
            </button>
            <button className="col-3 number" name="9" onClick={handleOnClick}>
              9
            </button>
            <button
              type="button"
              className="col-4 operators"
              name="*"
              onClick={handleOnClick}
            >
              ×
            </button>
          </div>
          <div className="row">
            <button className="col-3 number" name="4" onClick={handleOnClick}>
              4
            </button>
            <button className="col-3 number" name="5" onClick={handleOnClick}>
              5
            </button>
            <button className="col-3 number" name="6" onClick={handleOnClick}>
              6
            </button>
            <button
              type="button"
              className="col-4 operators"
              name="-"
              onClick={handleOnClick}
            >
              -
            </button>
          </div>
          <div className="row">
            <button className="col-3 number" name="1" onClick={handleOnClick}>
              1
            </button>
            <button className="col-3 number" name="2" onClick={handleOnClick}>
              2
            </button>
            <button className="col-3 number" name="3" onClick={handleOnClick}>
              3
            </button>
            <button
              type="button"
              className="col-4 operators"
              name="+"
              onClick={handleOnClick}
            >
              +
            </button>
          </div>
          <div className="row">
            <button className="col-4 number" name="0" onClick={handleOnClick}>
              0
            </button>
            <button className="col-4 number" name="." onClick={handleOnClick}>
              .
            </button>
            <button
              type="button"
              className="col-4 operators equal"
              onClick={CalculateResult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
