import calcFixes from "./condiciones_para_calcular.js";

const d = document;

export const writeInScreen = (btn, screen) => {
    const $buttons = d.querySelectorAll(btn),
          $screen = d.querySelector(screen);

          
    $buttons.forEach(btn => {
        btn.addEventListener("click", e => {
                
        let concat = $screen.textContent,
            btnText = e.target.textContent;

        calcFixes(btnText, screen);
        })
    })
}

export const deleteInScreen = (btn, screen) => {
    const $btn = d.querySelector(btn),
          $screen = d.querySelector(screen);

    $btn.addEventListener("click", e => {
        let concat = $screen.textContent;

        concat = concat.slice(0, -1);
        $screen.textContent = concat;
    })
}