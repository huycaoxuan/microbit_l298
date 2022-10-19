radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Tien()
    } else if (receivedNumber == 2) {
        Lui()
    } else if (receivedNumber == 3) {
        Trai()
    } else if (receivedNumber == 4) {
        Phai()
    } else if (receivedNumber == 5) {
        if (goc01 < 180) {
            goc01 += 10
            pins.servoWritePin(AnalogPin.P1, goc01)
        }
    } else if (receivedNumber == 6) {
        if (goc01 >= 10) {
            goc01 += -10
            pins.servoWritePin(AnalogPin.P1, goc01)
        }
    } else if (receivedNumber == 0) {
        Dung()
    }
})
function Lui () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Tien () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Phai () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Dung () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Trai () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
let goc01 = 0
goc01 = 90
let goc02 = 90
pins.servoWritePin(AnalogPin.P1, 90)
pins.servoWritePin(AnalogPin.P2, 90)
