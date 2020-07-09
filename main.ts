input.onButtonPressed(Button.A, function () {
    led.unplot(posX, 2)
    posX += -1
    if (posX < 0) {
        posX = 0
    }
    led.plot(posX, 2)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, 2)
    posX += -1
    if (posX < 0) {
        posX = 0
    }
    led.plot(posX, 2)
})
let posX = 0
posX = 2
led.plot(posX, 2)
