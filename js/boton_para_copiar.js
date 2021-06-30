const d = document;

export const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    // el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    // const selected =
    // document.getSelection().rangeCount > 0
    // ? document.getSelection().getRangeAt(0)
    // : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // if (selected) {
    //     document.getSelection().removeAllRanges();
    //     document.getSelection().addRange(selected);
    // }
};

export function copyToClipboardaea(btn, input) {
    const $btn = d.querySelector(btn),
            $input = d.querySelector(input);

    $btn.addEventListener("click", e => {
        $input.select();
        d.execCommand("copy");
        $input.blur();
    })
}