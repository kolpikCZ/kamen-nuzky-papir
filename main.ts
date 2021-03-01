let X = 0
input.onButtonPressed(Button.A, function () {
    X = randint(0, 2)
    if (X == 0) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(300)
        basic.clearScreen()
    }
    if (X == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(300)
        basic.clearScreen()
    }
    if (X == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(300)
        basic.clearScreen()
    }
})
