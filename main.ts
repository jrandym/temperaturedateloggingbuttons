input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    light.showAnimation(light.rainbowAnimation, 100)
    datalogger.addValue("NewData", 0)
    datalogger.addRow()
    light.showRing(
    `black yellow black yellow black black yellow black yellow black`
    )
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `black yellow black yellow black black yellow black yellow black`
    )
    running = 0
    datalogger.setEnabled(false)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `green black green black green green black green black green`
    )
    running = 1
    datalogger.setEnabled(true)
})
let running = 0
light.showRing(
`black yellow black yellow black black yellow black yellow black`
)
datalogger.setSeparator(LogSeparator.Comma)
datalogger.setSampleInterval(100)
datalogger.sendToConsole(true)
datalogger.setEnabled(true)
running = 0
forever(function () {
    if (running == 1) {
        datalogger.addValue("Temp", input.temperature(TemperatureUnit.Fahrenheit))
        datalogger.addRow()
    }
    pause(1000)
})
