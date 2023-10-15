import logo from './logo.svg';
import './App.css';

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Study",3],
  ["Relax", 2],
  ["Sleep", 8],
  ["Read", 1],
];

export const options = {
  title: "My Day",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App;
