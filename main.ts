sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.disintegrate, 500)
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`1000100004010101020202020202020201010101040402020101020202020201020201010104040202020202020202020201020101020304040404010101030102020101020201020201010401010101020101010102020201010204010101020101010101010102010102040201020202010101010102020201010401010102010201010102010202010404010101020302020101020103010404010101010102020101010201020204040101010102010201010101020102020404040404040102010101010202020202020101010404040201010202020101010101010101010404020102010101010101030301010103040401010101010101010101010101010104`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.rock2], TileScale.Sixteen))
for (let value of tiles.getTilesByType(sprites.castle.rock2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        2 . . . 2 2 2 2 2 2 2 . . . 2 . 
        2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 . 
        2 2 e 2 2 2 2 2 2 2 2 2 e 2 2 . 
        2 2 . 2 2 2 2 2 2 2 2 2 . 2 2 . 
        2 . . . e e e e e e e . . . 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.setTileAt(value, sprites.castle.tileGrass1)
    tiles.placeOnTile(mySprite, value)
}
let manneke = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . f 3 e . . . . . . . 
    . . . . . 3 3 3 e . . . . . . . 
    . . . . . . 3 3 . . . . . . . . 
    . . 3 3 8 8 8 8 8 8 3 3 . . . . 
    . . . . 8 8 8 8 8 8 . 3 . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . 8 8 8 8 . . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e . e e . . . . . . 
    . . . . f f f . f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(manneke, 100, 100)
