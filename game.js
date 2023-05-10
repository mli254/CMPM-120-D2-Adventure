class MainRoom extends AdventureScene {
    constructor() {
        super("main", "An aquarium.");
    }

    preload() {
        this.load.image('freshwater_bg', './assets/freshwater_exhibit/freshwater_bg.png');
        this.load.image('freshwater_tanks', './assets/freshwater_exhibit/freshwater_tanks.png');
        this.load.image('return_freshwater', './assets/freshwater_exhibit/return_door.png');
        this.load.image('deepsea_door', './assets/freshwater_exhibit/deepsea_door.png');
        this.load.image('employee_board', './assets/freshwater_exhibit/employee_board.png');
    }

    onEnter() {

        let main_bg = this.add.image(0, 0, 'main_bg').setOrigin(0,0);
        main_bg.setScale(0.75);

        let main_tanks = this.add.image(0, 0, 'main_tanks').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("?"))
            .on('pointerdown', () => {
                this.showMessage("If this is an aquarium, why are the tanks empty?");
            });
        main_tanks.setScale(0.75);

        let freshwater_door = this.add.image(1516*0.75, 446*0.75, 'freshwater_door').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A new room?"))
            .on('pointerdown', () => {
                this.showMessage("Moving to the next room.");
                this.gotoScene('freshwater');
            });
        freshwater_door.setScale(0.75);
        
        let penguin_door = this.add.image(1296, 334.5, 'penguin_door').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("I have the key now.");
                } else {
                    this.showMessage("A closed door.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.showMessage("The key fits in the lock.");
                } else {
                    this.showMessage("It's locked. Maybe I need a key?");
                    this.tweens.add({
                        targets: penguin_door,
                        x: '+=' + this.s,
                        repeat: 2,
                        yoyo: true,
                        ease: 'Sine.inOut',
                        duration: 100
                    });
                }
            });
        penguin_door.setScale(0.75);

        let aquarium_hours = this.add.image(1342*0.75, 788*0.75, 'aquarium_hours').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A piece of paper lays on the ground."))
            .on('pointerdown', () => {
                this.showFlyer();
                });
        aquarium_hours.setScale(0.4);

        let player = this.add.image(500, 500, 'player').setOrigin(0,0);

        // let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Metal, bent."))
        //     .on('pointerdown', () => {
        //         this.showMessage("No touching!");
        //         this.tweens.add({
        //             targets: clip,
        //             x: '+=' + this.s,
        //             repeat: 2,
        //             yoyo: true,
        //             ease: 'Sine.inOut',
        //             duration: 100
        //         });
        //     });

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })

        // let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         if (this.hasItem("key")) {
        //             this.showMessage("You've got the key for this door.");
        //         } else {
        //             this.showMessage("It's locked. Can you find a key?");
        //         }
        //     })
        //     .on('pointerdown', () => {
        //         if (this.hasItem("key")) {
        //             this.loseItem("key");
        //             this.showMessage("*squeak*");
        //             door.setText("🚪 unlocked door");
        //             this.gotoScene('demo2');
        //         }
        //     })

    }
}

class Freshwater extends AdventureScene {
    constructor() {
        super("freshwater", "The freshwater exhibit.");
    }

    preload() {
        this.load.image('initial', './assets/key_puzzle/key_puzzle_initial.png');
        this.load.image('solved', './assets/key_puzzle/key_puzzle_solved.png');
        this.load.image('key', './assets/key_puzzle/key.png');

        this.load.image('deepsea_bg', './assets/deepsea_exhibit/deepsea_bg.png');
        this.load.image('aquarium_closure', './assets/deepsea_exhibit/aquarium_closure.png');
        this.load.image('feeding_times', './assets/deepsea_exhibit/feeding_times.png');
        this.load.image('return_freshwater', './assets/deepsea_exhibit/return_freshwater.png');
    }

    onEnter() {

        let freshwater_bg = this.add.image(0, 0, 'freshwater_bg').setOrigin(0,0);
        freshwater_bg.setScale(0.75);

        let freshwater_tanks = this.add.image(0, 160, 'freshwater_tanks').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Oh?"))
            .on('pointerdown', () => {
                this.showMessage("The tanks here are empty too... Strange.");
            });
        freshwater_tanks.setScale(0.75);

        let deepsea_door = this.add.image(1516*0.75, 446*0.75, 'deepsea_door').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Another room? I can't see what's inside."))
            .on('pointerdown', () => {
                this.showMessage("Moving to the next room.");
                this.gotoScene('deepsea');
            });
        deepsea_door.setScale(0.75);

        let return_freshwater = this.add.image(1296, 334.5, 'return_freshwater').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Goes back to the room with the big tanks."))
            .on('pointerdown', () => {
                this.showMessage("Moving back to previous room.");
                this.gotoScene('main');
            });
        return_freshwater.setScale(0.75);

        let employee_board = this.add.image(1263*.75, 378*.75, 'employee_board').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A board is hanging from the wall."))
            .on('pointerdown', () => {
                this.showMessage("Taking a closer look--");
                this.gotoScene('puzzle');
            });
        employee_board.setScale(0.75);

        let player = this.add.image(500, 500, 'player').setOrigin(0,0);

        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('main');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Puzzle extends AdventureScene {
    constructor() {
        super("puzzle", "A puzzle?");
    }
}

class DeepSea extends AdventureScene {
    constructor() {
        super("deepsea", "A very dark room.");
    }

    onEnter() {

        let deepsea_bg = this.add.image(0, 0, 'deepsea_bg').setOrigin(0,0);
        deepsea_bg.setScale(0.75);


    }
}

class Penguin extends AdventureScene {
    constructor() {
        super("penguin", "A room in shadow.");
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload() {
        this.load.image('flyer_big', './assets/global/flyer.png');
        this.load.image('player', './assets/global/player.png');
        this.load.image('sparkle1', './assets/global/sparkle1.png');
        this.load.image('sparkle2', './assets/global/sparkle2.png');
        this.load.image('main_bg', './assets/main_exhibit/aquarium_bg.png');
        this.load.image('aquarium_hours', './assets/main_exhibit/aquarium_hours.png');
        this.load.image('freshwater_door', './assets/main_exhibit/freshwater_door.png');
        this.load.image('penguin_door', './assets/main_exhibit/penguin_door.png');
        this.load.image('main_tanks', './assets/main_exhibit/tanks.png');
    }

    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('main'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, MainRoom, Freshwater, Outro],
    title: "Adventure Game",
});

