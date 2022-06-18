import React from "react";

const Scramble = () => {
  const str = "i like code";
  const suffleWorld = (param) => {
    if (param.length < 4) return param;
    const first = param.slice(0, 4);
    const last = param.slice(4);
    const suffle = last.split("").sort(() => Math.random() - 0.5);
    return first + suffle.join("");
  };
  console.log(suffleWorld(str));

  return <div>Scramble</div>;
};

export default Scramble;
