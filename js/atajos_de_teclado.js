import calcFixes from "./condiciones_para_calcular.js";
import { createItem } from "./guardar_en_div.js";
import { resultError } from "./procesar_calculo.js";

const d = document;

export default function shortHands(screen, screenShow, history) {
    const $screen = d.querySelector(screen),
          $screenS = d.querySelector(screenShow),
          $history = d.querySelector(history),
          keys = [".", "(", ")", "1", "2", "3", "+", "-", "4", "5", "6", "*", "/", "7", "8", "9", "0"];

    d.addEventListener("keydown", e => {
        if(keys.includes(e.key)) calcFixes(e.key, screen);

        if(e.key === "Backspace") {
            let concat = $screen.textContent;

            concat = concat.slice(0, -1);
            $screen.textContent = concat;
        }

        if(e.key === "Enter") {
            resultError($screen, $screenS);
        }

        if(e.shiftKey && e.key === "Enter") {
            createItem($screenS, $history);
        }
    })
}