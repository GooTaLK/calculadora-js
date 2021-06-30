const d = document;

export default function resultInScreen (btn, screenTake, screenShow) {
    const $btn = d.querySelector(btn),
          $screenT = d.querySelector(screenTake),
          $screenS = d.querySelector(screenShow);

    $btn.addEventListener("click", e => {
        resultError($screenT, $screenS);
    })
}

export const resultError = (toEval, result) => {
    try {
        let res = eval(toEval.textContent);

        result.textContent = res;
    } catch (err) {
        result.textContent = "Error";
    }
}