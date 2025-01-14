/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombre = ["nuestro", "su", "tu", "mi"];
  let adjetivo = ["rápido", "perezoso", "loco", "inteligente"];
  let sustantivo = ["tigre", "pingüino", "león", "zorro"];

  for (let p of pronombre) {
    for (let a of adjetivo) {
      for (let s of sustantivo) {
        console.log(`${p}${a}${s}.com`);
      }
    }
  }
};
