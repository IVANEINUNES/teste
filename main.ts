let par = 0
let soma = 0
let impar = 0
input.onButtonPressed(Button.A, function () {
    par = randint(0, 5)
})
input.onButtonPressed(Button.AB, function () {
    soma = par + impar
    basic.showNumber(soma)
    basic.pause(1000)
    basic.clearScreen()
    par = 0
    impar = 0
    soma = 0
})
input.onButtonPressed(Button.B, function () {
    impar = randint(0, 5)
})
