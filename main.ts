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
`green black green black green green black green black green`
)
datalogger.setSeparator(LogSeparator.Comma)
datalogger.setSampleInterval(1000)
datalogger.sendToConsole(true)
datalogger.setEnabled(true)
running = 1
forever(function () {
    if (running == 1) {
        datalogger.addValue("Temp", input.temperature(TemperatureUnit.Celsius))
        datalogger.addRow()
    }
    pause(1000)
})
