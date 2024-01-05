import './style.css'

document.querySelector('.accordion').addEventListener('click', (e) => {
    let target = e.target
    if (target.matches('p') || target.matches('i')){
        target = target.parentElement
    }
    if(target.matches('.question')){
        let hiddenAnswer = target.nextElementSibling
        hiddenAnswer.classList.toggle('show')

        let icon = target.querySelector('i')
        if (hiddenAnswer.classList.contains('show')){
            icon.className = 'ri-close-line'
        } else {
            icon.className = 'ri-add-fill'
        }
    }
})
