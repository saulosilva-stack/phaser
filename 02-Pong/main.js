const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload()
{
    this.load.image('square', 'assets/square.png');
}

function create()
{
  const y = 550;

  // bloco central
  this.add.image(400, y, 'square');

  // bloco da esquerda
  this.add.image(368, y, 'square');

  // bloco da direita
  this.add.image(432, y, 'square');
}

function update()
{

}