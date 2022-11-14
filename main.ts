input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.setDegreesPerSecond(0)
})
radio.setFrequencyBand(0)
led.plot(0, 0)
basic.forever(function () {
    kitronik_servo_lite.setDegreesPerSecond(0)
    radio.setTransmitSerialNumber(true)
})
