let bearing = 0
function check_north (bearing: number) {
    if (bearing < 10 || bearing > 350) {
        basic.showString("N")
    } else {
        basic.clearScreen()
    }
}
// For this program, we check regularly to see if the compass is pointing towards North (above 350 degrees and below 10 degrees).
// 
// If so, we show an N on the device. Otherwise, we clear the screen.
// 
// To do this, we use a function with an input parameter (bearing) which we feed in from the forever loop code.
// 
// We also use a Boolean expression (OR) to check that either the bearing is <10 OR >350. If either are true, we want to show the N.
basic.forever(function () {
    bearing = input.compassHeading()
    check_north(bearing)
})
