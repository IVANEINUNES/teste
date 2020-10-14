def on_button_pressed_a():
    music.play_melody("D D F B E D D E ", 122)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_arrow(ArrowNames.EAST)
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
