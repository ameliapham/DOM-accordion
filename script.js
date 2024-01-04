import './style.css'

document.querySelector('.accordion').addEventListener('click', (e) => {
    let target = e.target
    if (target.matches('p')){
        target = target.parentElement
    }
    if(target.matches('.question')){
        let hiddenAnswer = target.nextElementSibling
        hiddenAnswer.classList.toggle('show')

        let icon = document.querySelector('.icon')
        if (hiddenAnswer.classList.contains('show')){
            icon.innerText = '-'
        } else {
            icon.innerText = '+'
        }
    }
})
