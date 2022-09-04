function DrawBird () {
    bird.fill(9)
    for (let i = 0; i <= 3999; i++) {
        x = 3 * Math.sin(2 * Math.PI * i / 2000) ** 3
        y = -1 * Math.cos(8 * Math.PI * i / 2000)
        ix1 = x * width / sw + 80
        iy1 = y * height / sh + 80
        x = 3 / 2 * Math.sin(2 * Math.PI * i / 2000) ** 3
        y = -1 * (1 / 2) * Math.cos(6 * Math.PI * i / 2000)
        ix2 = x * width / sw + 80
        iy2 = y * height / sh + 80
        if (i < 2000) {
            bird.drawLine(ix1, iy1, ix2, iy2, c)
        } else {
            bird.setPixel(ix1, iy1, 0)
            bird.setPixel(ix2, iy2, 0)
        }
        pause(5)
    }
    bird.flipY()
}
let iy2 = 0
let ix2 = 0
let iy1 = 0
let ix1 = 0
let y = 0
let x = 0
let bird: Image = null
let height = 0
let width = 0
let c = 0
let sh = 0
let sw = 0
sw = 6.5
sh = 7
c = 1
width = 160
height = 140
bird = image.create(width, height)
let showBird = sprites.create(bird, SpriteKind.Player)
// draw bird
DrawBird()
