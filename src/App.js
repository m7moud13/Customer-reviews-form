import React from "react";
import './index.css'
import { Title } from "./components/Title";
import { Data } from "./components/Data";
import { Customerinfo } from "./components/Customerinfo";
import { Satisfaction } from "./components/Satisfaction ";
import { Customer } from "./components/Customeropinion";
import { Forms } from "./components/Forms";
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[900px]  shadow-xl">
        <Title />
        <div className="ml-14 mt-10">
          <Data />
          <Customerinfo />
          <Satisfaction />
          <Customer />
          <Forms />
        </div>
      </div>
    </div>
  );
}

export default App;
