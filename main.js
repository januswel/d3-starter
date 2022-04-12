import "./style.css";
import { Histogram } from "./histogram";
import unemployment from "./unemployment";

const chart = Histogram(unemployment, {
  value: (d) => d.rate,
  label: "Unemployment rate (%) →",
  width: 1024,
  height: 800,
  color: "steelblue",
});

document.querySelector("#app").appendChild(chart);
