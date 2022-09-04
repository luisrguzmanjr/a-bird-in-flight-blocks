def DrawBird():
    bird.fill(9)
    for i in range(4000):
        x = 3*(Math.sin(2*Math.PI*i/2000)**3)
        y  = -1*(Math.cos(8*Math.PI*i/2000))
        ix1 = x*width/sw+80
        iy1 = y*height/sh + 80
        x = (3/2)*(Math.sin(2*Math.PI*i/2000)**3)
        y = -1*(1/2)*(Math.cos(6*Math.PI*i/2000))
        ix2 = x*width/sw+80
        iy2 = y*height/sh + 80
        if (i <= 2000):
            bird.draw_line(ix1, iy1, ix2, iy2, c)
        else:
            bird.set_pixel(ix1, iy1, 0)
            bird.set_pixel(ix2, iy2, 0)
        pause(5)
    bird.flip_y()

# set bird width and height
x = 0
y = 0
sw = 6.5
sh = 7
c = 1
width = 160
height = 140
bird: Image = None
bird = image.create(width, height)
# add image to sprite to render to screen
showBird: Sprite = None
showBird = sprites.create(bird, SpriteKind.player)

# draw bird
DrawBird()
