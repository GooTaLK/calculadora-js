import { copyToClipboard } from "./boton_para_copiar.js";

const d = document;

let count = 0;

export default function saveResult(btn, result, history) {
    const $btn = d.querySelector(btn),
          $result = d.querySelector(result),
          $history = d.querySelector(history);

    $btn.addEventListener("click", e => {
        createItem($result, $history);
    })
    
    $history.addEventListener("click", e => {
        if(e.target.matches(`#history__copy-${count}`)) {
            const $input = d.getElementById(`history__saved-${count}`);

            copyToClipboard($input.textContent);
        }

        if(e.target.matches(".history__delete-btn")) {
            e.target.parentElement.remove();
        }
    })
}

export const createItem = (elTaked, register) => {
    if(elTaked.textContent && elTaked.textContent !== "Error") {
        count++;

        const $div = d.createElement("div");

        $div.classList.add("history__item");
        $div.innerHTML = `
            <p class="history__saved" id="history__saved-${count}">${elTaked.textContent}</p>
            <button class="history__copy-btn" id="history__copy-${count}">Copy</button>
            <button class="history__delete-btn" id="history__delete-${count}">X</button>
        `;

        register.appendChild($div);

        if(register.classList.contains("none")) register.classList.remove("none");
    }
}