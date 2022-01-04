沒有贏家 = 0
形狀 = 0

def on_pin_pressed_p0():
    global 沒有贏家, 形狀
    basic.show_number(3)
    basic.show_number(2)
    basic.show_number(1)
    basic.clear_screen()
    沒有贏家 = 1
    while 沒有贏家:
        形狀 = randint(0, 3)
        if 形狀 == 0:
            basic.show_leds("""
                . . # # .
                                . . # # #
                                . . # . .
                                # # # # #
                                . # # # .
            """)
        elif 形狀 == 1:
            basic.show_icon(IconNames.HEART)
        elif 形狀 == 2:
            basic.show_icon(IconNames.PITCHFORK)
        else:
            basic.show_icon(IconNames.SKULL)
        for index in range(randint(50, 200)):
            basic.pause(randint(10, 10))
            if 形狀 == 0:
                if input.pin_is_pressed(TouchPin.P1):
                    for index2 in range(2):
                        basic.show_string("P1 WIN")
                    沒有贏家 = 0
                elif input.pin_is_pressed(TouchPin.P2):
                    for index3 in range(2):
                        basic.show_string("P2 WIN")
                    沒有贏家 = 0
            else:
                if input.pin_is_pressed(TouchPin.P1):
                    for index4 in range(2):
                        basic.show_string("P2 WIN")
                    沒有贏家 = 0
                elif input.pin_is_pressed(TouchPin.P2):
                    for index5 in range(2):
                        basic.show_string("P1 WIN")
                    沒有贏家 = 0
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)
