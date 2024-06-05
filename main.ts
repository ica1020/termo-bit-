let definir_temperatura = 0
input.onButtonPressed(Button.A, function () {
    let temperatura = 0
    definir_temperatura = input.temperature()
    basic.showString("" + temperatura + "c")
})
