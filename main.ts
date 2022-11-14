input.onButtonPressed(Button.A, function () {
	
})
led.plot(0, 0)
music.playMelody("- - - - - - - - ", 120)
radio.setFrequencyBand(0)
led.plot(0, 0)
basic.forever(function () {
    radio.setTransmitSerialNumber(true)
})
