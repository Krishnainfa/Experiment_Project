import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "../Calculator/Calculator";
import MultipleApi from "../Calculator/MultipleApi";
import Csc from "../Forms/Csc";
import News from "../News/News";
const RouterComponents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MultipleApi />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/form" element={<Csc />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </Routes>
    </div>
  );
};

export default RouterComponents;
