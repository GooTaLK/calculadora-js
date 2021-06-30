const d = document;

export default function calcFixes (btnText, screen) {
    const $screen = d.querySelector(screen)

    let concat = $screen.textContent,
        lastCh = concat.slice(-1),
        numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const wink = () => {
        $screen.classList.add("parpadeo-error");
        setTimeout(() => $screen.classList.remove("parpadeo-error"), 100);
    }

    if(lastCh === "") {
        if(btnText === "-" || btnText === "+" || btnText === "*" || btnText === "/") {
            wink();
            return false;
        }
    }

    if(lastCh === "*" || lastCh === "/" || lastCh === "+" || lastCh === "-") {
        if(btnText === lastCh) {
            wink();
            return false;
        } else if (btnText === "*" || btnText === "/" || btnText === "+" || btnText === "-") {
            concat = concat.slice(0, -1);
        }
    }

    if(lastCh === ".") {
         if(!numbers.includes(btnText)) {
             wink();
             return false;
         }
    }

    if(numbers.includes(lastCh)) {
        let indexPlus = concat.lastIndexOf("+"),
            indexMinus = concat.lastIndexOf("-"),
            indexTimes = concat.lastIndexOf("*"),
            indexDivided = concat.lastIndexOf("/"),
            indexPoint = concat.lastIndexOf(".");

        if(indexPoint > indexPlus && indexPoint > indexMinus && indexPoint > indexTimes && indexPoint > indexDivided && btnText === ".") {
            wink();
            return false;
        }

        if(btnText === "(") {
            wink();
            return false;
        }
    }

    if(lastCh === "(" && btnText === ")") {
        wink();
        return false;
    } else if(lastCh === ")" && btnText === "(") {
        wink();
        return false;
    }

    if(lastCh === "+" || lastCh === "-" || lastCh === "*" || lastCh === "/" || lastCh === ".") {
        if(btnText === ")") {
            wink();
            return false;
        }
    }

    concat += btnText;
    $screen.textContent = concat;
    return true;
}