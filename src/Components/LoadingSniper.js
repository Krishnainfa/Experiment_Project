import React from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "react-bootstrap";
const LoadingSniper = () => {
  const multipleVarients = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  // every time the component is rendered, a new random color is generated
  const randomColor =
    multipleVarients[Math.floor(Math.random() * multipleVarients.length)];

  // add all border colors to the array
  const borderColors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];

  // every time the component is rendered, a new random border color is generated
  const randomBorderColor =
    borderColors[Math.floor(Math.random() * borderColors.length)];

  return (
    <Card
      // style={{}}
      className="shadow mt-5"
      rounded="true"
      border={randomBorderColor}
      // make it centerd
      style={{ margin: "0 auto", width: "18rem" }}
    >
      {/* make center div */}
      <div className="text-center">
        <h6>Loading...</h6>
        <Spinner
          animation="border"
          variant={randomColor}
          style={{ width: "3rem", height: "3rem" }}
        />
        <h6>Please wait...</h6>
      </div>
    </Card>
  );
};

export default LoadingSniper;
