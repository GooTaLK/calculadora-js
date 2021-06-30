import shortHands from "./atajos_de_teclado.js";
import { deleteInScreen, writeInScreen } from "./escribir_en_pantalla.js";
import saveResult from "./guardar_en_div.js";
import resultInScreen from "./procesar_calculo.js";

document.addEventListener("DOMContentLoaded", e => {
    writeInScreen(".calc__write-btn", ".calc__panel-show");
    deleteInScreen(".calc__delete-btn", ".calc__panel-show");
    resultInScreen(".calc__result-btn", ".calc__panel-show", ".calc__panel-result");
    saveResult(".calc__save-btn", ".calc__panel-result", ".history");
    shortHands(".calc__panel-show", ".calc__panel-result", ".history");
})
