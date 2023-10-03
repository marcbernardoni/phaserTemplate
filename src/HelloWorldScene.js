import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super('hello-world')
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io')

    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }

  create() {
    this.add.image(400, 300, 'sky')

    this.add.particles(400, 300, 'red', {
      speed: 500,
      lifespan: 2000,
      gravityY: 200,
      blendMode: 'Add',
    })

    const logo = this.physics.add.image(400, 300, 'logo')

    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)
  }
}
