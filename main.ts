let 沒有贏家 = 0
let 形狀 = 0
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
    
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    沒有贏家 = 1
    while (沒有贏家) {
        形狀 = randint(0, 3)
        if (形狀 == 0) {
            basic.showLeds(`
                . . # # .
                                . . # # #
                                . . # . .
                                # # # # #
                                . # # # .
            `)
        } else if (形狀 == 1) {
            basic.showIcon(IconNames.Heart)
        } else if (形狀 == 2) {
            basic.showIcon(IconNames.Pitchfork)
        } else {
            basic.showIcon(IconNames.Skull)
        }
        
        for (let index = 0; index < randint(50, 200); index++) {
            basic.pause(randint(10, 10))
            if (形狀 == 0) {
                if (input.pinIsPressed(TouchPin.P1)) {
                    for (let index2 = 0; index2 < 2; index2++) {
                        basic.showString("P1 WIN")
                    }
                    沒有贏家 = 0
                } else if (input.pinIsPressed(TouchPin.P2)) {
                    for (let index3 = 0; index3 < 2; index3++) {
                        basic.showString("P2 WIN")
                    }
                    沒有贏家 = 0
                }
                
            } else if (input.pinIsPressed(TouchPin.P1)) {
                for (let index4 = 0; index4 < 2; index4++) {
                    basic.showString("P2 WIN")
                }
                沒有贏家 = 0
            } else if (input.pinIsPressed(TouchPin.P2)) {
                for (let index5 = 0; index5 < 2; index5++) {
                    basic.showString("P1 WIN")
                }
                沒有贏家 = 0
            }
            
        }
    }
})
