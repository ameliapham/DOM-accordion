import './style.css'

document.querySelector('.accordion').addEventListener('click', (e) => {
    if(e.target && e.target.matches('.question')){
        let hiddenAnswer = e.target.nextElementSibling
        hiddenAnswer.classList.toggle('show')

    }
})
