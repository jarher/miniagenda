import { ValidateForm } from "./ValidateForm.js";

export class Event {
  static loadFunction(event, functions) {
    if (event === "DOMContentLoaded") {
      functions();
    }
    if (event === "click") {
      document.addEventListener(event, (e) => {
        const datatype = e.target.dataset.type;
        if (functions[datatype]) {
          functions[datatype](e);
        }
      });
    }
    if (event === "blur") {
      document.querySelectorAll("input").forEach((input) => {
        input.addEventListener("blur", (e) => {
          ValidateForm.validateInputData(e.target);
        });
      });
    }
    if (event === "change") {
      if (document.querySelector("select")) {
        document.querySelector("select").addEventListener("change", (e) => {
          const datatype = e.target.dataset.type;
          if (datatype === "string") {
            if (functions[datatype]) {
              functions[datatype](e);
            }
          }
        });
      }
    }
  }
}
