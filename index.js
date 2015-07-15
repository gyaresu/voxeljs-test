var createGame = require('voxel-engine')

var game = new createGame({
  texturePath: 'textures'
})

var container = document.body
game.appendTo(container)

var createPlayer = require('voxel-player')(game)

var player = new createPlayer('player.png')
player.possess()
player.yaw.position.set(0, 100, 0)