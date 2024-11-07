const logo = document.querySelector('.logo')
const button = document.createElement('button')
button.classList.add('newLogo-button')
const newLogo = document.createElement('img')
newLogo.src = "https://raw.githubusercontent.com/LinRuoyin/hackyourfuture-image/6e3dee326b502a1357a5a416a589e1d574fe6955/logo-love.svg"
newLogo.style.width = '45px'
button.appendChild(newLogo)
logo.replaceWith(button)

button.style.backgroundColor = 'transparent'

button.addEventListener('click', () => {
  alert(`    Hi! This is Nina! Nice to meet you! 
    I was an Engilsh teacher for many years in China. Now I am actively learning front-development in RedI school. I love it so I'd love to become a student at Hack your future. I hope I can be a web development in the future!`)
})


