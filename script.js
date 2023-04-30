const buttons = document.querySelectorAll('.block__category-button')
buttons.forEach(button => {
    button.addEventListener('click', clickButton)
})

let timerId;

function clickButton(e) {
    clearTimeout(timerId);

    const parent_block = e.target.offsetParent
    const val = parent_block.querySelector('.block__category--copy')

    const alert = document.querySelector('.alert')
    alert.innerHTML = `You copied the command <span>${val.innerText}</span>`

    const temp = document.createElement('input')
    temp.value = val.innerText
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    window.getSelection().selectAllChildren(val)
    document.body.removeChild(temp);

    alert.classList.add('alert--open')

    timerId = setTimeout(() => {
        alert.classList.remove('alert--open');
    }, 1500);
}
