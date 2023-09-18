input.onButtonPressed(Button.A, function () {
    basic.showString("temp")
    basic.showNumber(envirobit.getTemperature())
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("presure")
    basic.showNumber(envirobit.getPressure())
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        # # # # .
        # # # # #
        `)
    basic.showNumber(envirobit.getHumidity())
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showNumber(envirobit.getLight())
})
