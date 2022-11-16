input.onButtonPressed(Button.A, function () {
    kitronik_servo_lite.setDegreesPerSecond(0)
    text_list = ["a", "b", "c"]
})
function doSomething (bool: boolean, list: any[], image: Image, text: string, text2: string, text3: string, text4: string, text5: string, text6: string, text7: string) {
	
}
let text_list: string[] = []
radio.setFrequencyBand(0)
basic.forever(function () {
    kitronik_servo_lite.setDegreesPerSecond(0)
    radio.setTransmitSerialNumber(true)
})
control.inBackground(function () {
    led.plot(0, 0)
})
