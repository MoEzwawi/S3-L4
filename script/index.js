const createSquares = function (){
    const main = document.getElementsByTagName('main')[0]
    for (let i = 0; i < 90; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('id',i+1)
        const numberOfTheSquare = document.createElement('p')
        numberOfTheSquare.innerText = i + 1
        square.appendChild(numberOfTheSquare)
        main.appendChild(square)
    }
}
createSquares()

const allTheNumbers = []
for (let i = 0; i < 90; i++) {
    allTheNumbers.push(i+1)
}

const dealer = function (){
    if (allTheNumbers.length === 0) {
        const msg = confirm('Hai finito le caselle! Vuoi giocare di nuovo? :)')
        if (msg) {
            location.reload()
        }
    } else {
        const i = Math.floor(Math.random()*allTheNumbers.length)
        const randomNumber = allTheNumbers.splice(i,1)[0]
        return randomNumber
    }
}

const button = document.getElementById('btn')
button.addEventListener('click', function(){
    let myNum = dealer()
    const targetSquare = document.getElementById(myNum.toString())
    targetSquare.classList.add('target')
})