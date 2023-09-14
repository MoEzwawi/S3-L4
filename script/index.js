const createSquares = function (){
    const main = document.getElementsByTagName('main')[0]
    for (let i = 0; i < 90; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('id',i)
        const numberOfTheSquare = document.createElement('p')
        numberOfTheSquare.innerText = i + 1
        square.appendChild(numberOfTheSquare)
        main.appendChild(square)
    }
}
createSquares()

const button = document.getElementById('btn')
button.addEventListener('click', function(){
    const newNumber = Math.floor(Math.random()*75)
    const targetSquare = document.getElementById(newNumber.toString())
    targetSquare.classList.add('target')
})