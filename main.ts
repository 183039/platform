namespace SpriteKind {
    export const cloud = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jump = 0
})
function level_4 () {
    tiles.setTilemap(tilemap`level9`)
}
function level_5 () {
    tiles.setTilemap(tilemap`level10`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    level_5()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 1) {
        mySprite.vy = -100
        jump += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    level_3()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    level_2()
})
function level_2 () {
    tiles.setTilemap(tilemap`level4`)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    level_4()
})
function level_1 () {
    tiles.setTilemap(tilemap`level2`)
}
function level_3 () {
    tiles.setTilemap(tilemap`level8`)
}
let jump = 0
let mySprite: Sprite = null
game.showLongText("omnomnom", DialogLayout.Bottom)
mySprite = sprites.create(img`
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    ......................1..
    ................442..1...
    ..............7542211....
    .............875421111...
    .2222........8754221f11..
    245542.....1188754211111.
    245882111111118754211111.
    245711111111118754211111.
    24571111111111875421.....
    24571111111111111111.....
    24571111111111111111.....
    ..511111111111111111.....
    ...11111.11111.11111.....
    ...1111..11111.11111.....
    ....fff..11111..fff......
    ...........ff............
    .........................
    .........................
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
jump = 0
level_1()
forever(function () {
    mySprite.ay = 200
})
