radio.setFrequencyBand(0)
led.plot(0, 0)
basic.forever(function () {
    radio.setTransmitSerialNumber(true)
})
