class MainRoom extends AdventureScene {
    constructor() {
        super("main", "An aquarium?");
    }

    preload() {
        // freshwater exhibit assets
        this.load.image('freshwater_bg', './assets/freshwater_exhibit/freshwater_bg.png');
        this.load.image('freshwater_tanks', './assets/freshwater_exhibit/freshwater_tanks.png');
        this.load.image('return_main1', './assets/freshwater_exhibit/return_door.png');
        this.load.image('deepsea_door', './assets/freshwater_exhibit/deepsea_door.png');
        this.load.image('employee_board', './assets/freshwater_exhibit/employee_board.png');
    }

    onEnter() {

        let updated = false;

        this.showNarration("Where am I?");

        let main_bg = this.add.image(0, 0, 'main_bg').setOrigin(0,0);
        main_bg.setScale(0.75);

        let main_tanks = this.add.image(0, 0, 'main_tanks').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("This side of the room is lined with ceiling-to-floor tanks."))
            .on('pointerdown', () => {
                if (updated) {
                    this.showNarration("The aquarium is closed today... but even if an aquarium is closed, there should still be fish in the tanks right...?");
                } else {
                    this.showNarration("The tanks are completely empty. Shouldn't there be fish inside?");
                }
            });
        main_tanks.setScale(0.75);

        let freshwater_door = this.add.image(1516*0.75, 446*0.75, 'freshwater_door').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Is this a new room? It looks like a different exhibit."))
            .on('pointerdown', () => {
                this.showNarration("Moving to the next room.");
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
                    this.showNarration("The key fits in the lock.");
                    this.gotoScene('penguin');
                } else {
                    this.showNarration("It's locked. Maybe I need a key?");
                    this.shake(penguin_door);
                }
            });
        penguin_door.setScale(0.75);

        let aquarium_hours = this.add.image(1342*0.75, 788*0.75, 'aquarium_hours').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A piece of paper is on the ground."))
            .on('pointerdown', () => {
                if (updated) {
                    this.showNarration("If I remember right, today is Sunday. The aquarium isn't supposed to be open today.");
                    this.showFlyer("Aquarium Flyer", "Welcome to the ###### Aquarium! Here, we aim to give you the best showcase of marine life in the world. Our exhibits include a host of species, both ocean-dwelling and freshwater.\n\nHours:\n\nSunday: Closed\nMonday: 8:00am-9:00pm\nTuesday: 8:00am-9:00pm\nWednesday: 8:00am-9:00pm\nThursday: 8:00am-9:00pm\nFriday: 8:00am-9:00pm\nSaturday: 9:00am-10:00pm\n");
                } else {
                    this.showNarration("Isn't today Sunday?");
                    this.showFlyer("Aquarium Flyer", "Welcome to the ###### Aquarium! Here, we aim to give you the best showcase of marine life in the world. Our exhibits include a host of species, both ocean-dwelling and freshwater.\n\nHours:\n\nSunday: Closed\nMonday: 8:00am-9:00pm\nTuesday: 8:00am-9:00pm\nWednesday: 8:00am-9:00pm\nThursday: 8:00am-9:00pm\nFriday: 8:00am-9:00pm\nSaturday: 9:00am-10:00pm\n");
                    updated = true;
                }
            });
        aquarium_hours.setScale(0.4);

        let player = this.add.image(500, 500, 'player').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's me."))
            .on('pointerdown', () => {
                this.showNarration("I don't know how I got here. It looks like an aquarium, but...");
            });

        this.sparkleCreate();
        // tank sparkle
        const sparkle1 = this.add.sprite(300, 100, 'sparkle');
        sparkle1.anims.play('sparkle', true);
        // flyer sparkle
        const sparkle2 = this.add.sprite(1342*0.75, 788*0.75, 'sparkle');
        sparkle2.anims.play('sparkle', true);
        // player sparkle
        const sparkle3 = this.add.sprite(500, 500, 'sparkle');
        sparkle3.anims.play('sparkle', true);
        
    }
}

class Freshwater extends AdventureScene {
    constructor() {
        super("freshwater", "The freshwater exhibit.");
    }

    preload() {
        // puzzle room assets
        this.load.image('initial', './assets/key_puzzle/key_puzzle_initial.png');
        this.load.image('solved', './assets/key_puzzle/key_puzzle_solved.png');
        this.load.image('key', './assets/key_puzzle/key.png');

        // deepsea exhibit assets
        this.load.image('deepsea_bg', './assets/deepsea_exhibit/deepsea_bg.png');
        this.load.image('aquarium_closure', './assets/deepsea_exhibit/aquarium_closure.png');
        this.load.image('feeding_times', './assets/deepsea_exhibit/feeding_times.png');
        this.load.image('return_freshwater', './assets/deepsea_exhibit/return_freshwater.png');
    }

    onEnter() {

        this.showNarration("The plaque outside said that this was the freshwater exhibit.");

        let freshwater_bg = this.add.image(0, 0, 'freshwater_bg').setOrigin(0,0);
        freshwater_bg.setScale(0.75);

        let freshwater_tanks = this.add.image(0, 160, 'freshwater_tanks').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Oh?"))
            .on('pointerdown', () => {
                this.showNarration("The tanks here are empty too... Strange.");
            });
        freshwater_tanks.setScale(0.75);

        let deepsea_door = this.add.image(1516*0.75, 446*0.75, 'deepsea_door').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Another room? It's too dark to see what's inside."))
            .on('pointerdown', () => {
                this.showNarration("Moving into the room...");
                this.gotoScene('deepsea');
            });
        deepsea_door.setScale(0.75);

        let return_main1 = this.add.image(1296, 334.5, 'return_main1').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It goes back to the room with the big tanks."))
            .on('pointerdown', () => {
                this.showNarration("Moving back to previous room.");
                this.gotoScene('main');
            });
        return_main1.setScale(0.75);

        let employee_board = this.add.image(1263*.75, 378*.75, 'employee_board').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("I already have the key. No need to check here again.");
                } else {
                    this.showMessage("A board is hanging from the wall.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.showNarration("I don't need to look at that anymore. I have the key.");
                } else {
                    this.showNarration("Taking a closer look--");
                    this.gotoScene('puzzle');
                }
            })
        employee_board.setScale(0.75);

        let player = this.add.image(500, 500, 'player').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's me."))
            .on('pointerdown', () => {
                this.showNarration("There's still no signs of life... no fish, no people.");
            });

        this.sparkleCreate();
        // tank sparkle
        const sparkle1 = this.add.sprite(300, 300, 'sparkle');
        sparkle1.anims.play('sparkle', true);
        // puzzle sparkle
        const sparkle2 = this.add.sprite(1263*.75, 378*.75, 'sparkle');
        sparkle2.anims.play('sparkle', true);
        if (this.hasItem('key')) {
            sparkle2.destroy();
        }
        // player sparkle
        const sparkle3 = this.add.sprite(500, 500, 'sparkle');
        sparkle3.anims.play('sparkle', true);
    }
}

class Puzzle extends AdventureScene {
    constructor() {
        super("puzzle", "A puzzle?");
    }

    onEnter() {

        let tries = 3;

        let initial = this.add.image(0, 0, 'initial').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("There's a key behind some glass."))
            .on('pointerdown', () => {
                this.showMessage("It says to enter a time.");
                this.add.rectangle(0, 0, 1440, 810, 0x000000)
                .setOrigin(0,0)
                .setAlpha(0.75);

                let PuzzleDesc = this.add.text(this.w * 0.75 * 0.5, 250)
                    .setOrigin(0.5, 0.5)
                    .setText("Please enter the correct time for access:")
                    .setStyle({ fontSize: `${36}px`, fontFamily: '"Press Start 2P"', color: '#ffffff' })
                    .setWordWrapWidth(1000);
                
                let WarningDesc = this.add.text(this.w * 0.75 * 0.5, 350)
                    .setOrigin(0.5, 0.5)
                    .setText("WARNING! Three incorrect tries will cause the alarms to sound.")
                    .setStyle({ fontSize: `${28}px`, fontFamily: '"Press Start 2P"', color: '#ff4747' })
                    .setWordWrapWidth(1000);

                // puzzle boxes:
                let options = this.add.container(520, 450);
                
                // option 1:
                let option1 = this.add.container(0, 0);
                let boxButton1 = this.add.rectangle(0, 0, 300, 100, 0xffffff)
                    .setInteractive()
                    .on('pointerdown', () => {
                        tries -= 1;
                        if (tries==0) {
                            this.shake(initial);
                            this.cameras.main.fade(this.transitionDuration, 255, 0, 0);
                            this.gotoScene('badend');
                        }
                        this.shake(boxButton1);
                        this.showMessage("\"Bzzt! Incorrect!\"");
                        this.showNarration("I don't think I know the answer. I should probably look elsewhere first.");
                    });
                option1.add(boxButton1);
                let boxText1 = this.add.text(0, 0)
                    .setOrigin(0.5, 0.5)
                    .setText("7:00am")
                    .setStyle({ fontSize: `${this.s}px`, fontFamily: '"Press Start 2P"', color: '#000000' })
                    .setWordWrapWidth(300-2);
                option1.add(boxText1);
                options.add(option1);

                // option 2:
                let option2 = this.add.container(350, 0);
                let boxButton2 = this.add.rectangle(0, 0, 300, 100, 0xffffff)
                    .setInteractive()
                    .on('pointerdown', () => {
                        tries -= 1;
                        if (tries==0) {
                            this.shake(initial);
                            this.cameras.main.fade(this.transitionDuration, 255, 0, 0);
                            this.gotoScene('badend');
                        }
                        this.shake(boxButton2);
                        this.showMessage("\"Bzzt! Incorrect!\"");
                        this.showNarration("I don't think I know the answer. I should probably look elsewhere first.");
                    });
                option2.add(boxButton2);
                let boxText2 = this.add.text(0, 0)
                    .setOrigin(0.5, 0.5)
                    .setText("9:00am")
                    .setStyle({ fontSize: `${this.s}px`, fontFamily: '"Press Start 2P"', color: '#000000' })
                    .setWordWrapWidth(300-2);
                option2.add(boxText2);
                options.add(option2);

                // option 3:
                let option3 = this.add.container(0, 200);
                let boxButton3 = this.add.rectangle(0, 0, 300, 100, 0xffffff)
                    .setInteractive()
                    .on('pointerdown', () => {
                        tries -= 1;
                        if (tries==0) {
                            this.shake(initial);
                            this.cameras.main.fade(this.transitionDuration, 255, 0, 0);
                            this.gotoScene('badend');
                        }
                        this.shake(boxButton3);
                        this.showMessage("\"Bzzt! Incorrect!\"");
                        this.showNarration("I don't think I know the answer. I should probably look elsewhere first.");
                    });
                option3.add(boxButton3);
                let boxText3 = this.add.text(0, 0)
                    .setOrigin(0.5, 0.5)
                    .setText("12:00pm")
                    .setStyle({ fontSize: `${this.s}px`, fontFamily: '"Press Start 2P"', color: '#000000' })
                    .setWordWrapWidth(300-2);
                option3.add(boxText3);
                options.add(option3);

                // option 4: (only visible if flyer has been checked)
                if (this.hasItem('feeding notice')) {
                    this.showNarration("I should have the answer now.");
                    let option4 = this.add.container(350, 200);
                    let boxButton4 = this.add.rectangle(0, 0, 300, 100, 0xd1cbba)
                        .setInteractive()
                        .on('pointerdown', () => {
                            this.showMessage("It opened!");
                            let solved = this.add.image(0, 0, 'solved').setOrigin(0,0);
                            solved.setScale(0.75);

                            let key = this.add.image(890*0.75, 844*0.75, 'key')
                                .setInteractive()
                                .on('pointerover', () => {
                                    this.showMessage("This should be the key to the locked room.")
                                })
                                .on('pointerdown', () => {
                                    this.showNarration("Taking the key--");
                                    this.gainItem('key');
                                    this.tweens.add({
                                        targets: key,
                                        y: `-=${2 * this.s}`,
                                        alpha: { from: 1, to: 0 },
                                        duration: 500,
                                        onComplete: () => key.destroy()
                                    })
                                });
                            key.setScale(0.75)
                        });
                    option4.add(boxButton4);
                    let boxText4 = this.add.text(0, 0)
                        .setOrigin(0.5, 0.5)
                        .setText("5:00pm")
                        .setStyle({ fontSize: `${this.s}px`, fontFamily: '"Press Start 2P"', color: '#000000' })
                        .setWordWrapWidth(300-2);
                    option4.add(boxText4);
                    options.add(option4);
                }
                
            });
        initial.setScale(0.75);
            
        let boardDesc = this.add.text(this.w * 0.75 * 0.5, 200)
            .setOrigin(0.5, 0.5)
            .setText("Key to Penguin Enclosure")
            .setStyle({ fontSize: `${48}px`, fontFamily: '"Press Start 2P"', color: '#2e2215' })
            .setWordWrapWidth(1000);

        let back = this.add.text(this.w * 0.6, this.h * 0.75, "Step Back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Let's look around the room some more."))
            .on('pointerdown', () => {
                this.showNarration("Stepping away from the board--");
                this.gotoScene('freshwater');
            });
    }
}

class DeepSea extends AdventureScene {
    constructor() {
        super("deepsea", "A very dark room.");
    }

    preload() {
        this.load.image('knife', './assets/penguin_enclosure/knife.png');
        this.load.image('penguin_bg', './assets/penguin_enclosure/penguin_bg.png');
        this.load.image('return_main2', './assets/penguin_enclosure/return_main.png');
        this.load.spritesheet('shadow', './assets/penguin_enclosure/shadow.png', { frameWidth: 173, frameHeight: 158 });
    }

    onEnter() {

        this.showNarration("This room is really dark... I think there are tanks along the wall, but I can't make out what's inside them.");

        let deepsea_bg = this.add.image(0, 0, 'deepsea_bg').setOrigin(0,0);
        deepsea_bg.setScale(0.75);

        let return_freshwater = this.add.image(1515*.75, 439*.75, 'return_freshwater').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("This door goes back to the freshwater exhibit."))
            .on('pointerdown', () => {
                this.showNarration("Moving back...");
                this.gotoScene('freshwater');
            });
        return_freshwater.setScale(0.75);

        let aquarium_closure = this.add.image(1220*0.75, 773*0.75, 'aquarium_closure').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("There's a piece of paper on the ground close to where I'm standing."))
            .on('pointerdown', () => {
                this.showFlyer("Aquarium Closure", "We regret to inform our loyal visitors that, as of ##/##/##, the aquarium will be permanently closed. There have been various reports, by both visitors and staff, of strange noises in the hallways, as well as unexplainable stains on the floors.\n\nThe recent disappearance of one of our employees forced our hands. As the aquarium currently presents a clear danger to those that visit it, we had no other choice but to cease operations. We apologize greatly for this news.");
                this.showNarration("A disappearance? I don't remember working here, but...");
            });
                
        aquarium_closure.setScale(0.4);

        if (this.hasItem('feeding notice')) {
        } else {
            let feeding_times = this.add.image(88*0.75, 845*0.75, 'feeding_times').setOrigin(0,0)
                .setInteractive()
                .on('pointerover', () => this.showMessage("There's another piece of paper further in the room."))
                .on('pointerdown', () => {
                    this.showFlyer("Employee Notice:", "Attention employees! There has been some confusion regarding the feeding times of certain animals. As a result, allow this to be your official guide:\n\nSea Lions: 7:00am\nArapaima: 9:00am\nSeabirds: 12:00pm\nPenguins: 5:00pm");
                    this.showNarration("This might be helpful.");
                    this.gainItem('feeding notice');
                    this.tweens.add({
                        targets: feeding_times,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => feeding_times.destroy()
                    })    
                });
                feeding_times.setScale(0.4);
        }       

        let player = this.add.image(1500*0.75, 800*0.75, 'player').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's me."))
            .on('pointerdown', () => {
                this.showNarration("I can barely see my hands when I hold them out in front of me. What's this room supposed to be?");
            });

        this.sparkleCreate();
        // closure flyer sparkle
        const sparkle1 = this.add.sprite(1220*0.75, 773*0.75, 'sparkle');
        sparkle1.anims.play('sparkle', true);
        // employee notice sparkle
        const sparkle2 = this.add.sprite(88*0.75, 845*0.75, 'sparkle');
        sparkle2.anims.play('sparkle', true);
        if (this.hasItem('feeding notice')) {
            sparkle2.destroy();
        }
        // player sparkle
        const sparkle3 = this.add.sprite(1500*0.75, 800*0.75, 'sparkle');
        sparkle3.anims.play('sparkle', true);
    }
}

class Penguin extends AdventureScene {
    constructor() {
        super("penguin", "A room in shadow.");
    }

    preload() {
        // insert the ending cutscene images here
    }

    onEnter() {
        let penguin_bg = this.add.image(0, 0, 'penguin_bg').setOrigin(0,0);
        penguin_bg.setScale(0.75);

        let return_main2 = this.add.image(96*0.75, 172.8*0.75, 'return_main2').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("That's the way I came from. Should I really go back?"))
            .on('pointerdown', () => {
                this.showNarration("I can't stay here.");
                this.gotoScene('main');
            });
        return_main2.setScale(0.75);

        let knife = this.add.image(500, 500, 'knife').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A knife!"))
            .on('pointerdown', () => {
                this.showNarration("The handle is slimy with something... it's too slippery to hold.");
                this.shake(knife);
            });
        knife.setScale(0.4)
        
        const shadow = this.add.sprite(1363.2, 433.4, 'shadow').setInteractive();
        this.anims.create({
            key: 'shadow',
            frames: this.anims.generateFrameNumbers('shadow', { start: 0, end: 1 }),
            frameRate: 3,
            repeat: -1
        })
        shadow.anims.play('shadow', true);

        shadow.on('pointerup', () =>
        {
            this.showMessage("What's that?!");
            this.gotoScene('outro');

        });

        let player = this.add.image(126*0.75, 272.8*0.75, 'player').setOrigin(0,0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It's me."))
            .on('pointerdown', () => {
                this.showNarration("I have a bad feeling about this room.");
            });
            
        this.sparkleCreate();
        // player
        const sparkle1 = this.add.sprite(126*0.75, 272.8*0.75, 'sparkle');
        sparkle1.anims.play('sparkle', true);
        // knife sparkle
        const sparkle2 = this.add.sprite(500, 500, 'sparkle');
        sparkle2.anims.play('sparkle', true);
}
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload() {
        // global assets
        this.load.image('flyer_big', './assets/global/flyer.png');
        this.load.image('player', './assets/global/player.png');
        this.load.spritesheet('sparkle', './assets/global/sparkle.png', { frameWidth: 87, frameHeight: 97 });

        // main room assets
        this.load.image('main_bg', './assets/main_exhibit/aquarium_bg.png');
        this.load.image('aquarium_hours', './assets/main_exhibit/aquarium_hours.png');
        this.load.image('freshwater_door', './assets/main_exhibit/freshwater_door.png');
        this.load.image('penguin_door', './assets/main_exhibit/penguin_door.png');
        this.load.image('main_tanks', './assets/main_exhibit/tanks.png');
    }

    typewriteTextWrapped(text)
        {
            const lines = this.label.getWrappedText(text)
            const wrappedText = lines.join('\n')
    
            this.typewriteText(wrappedText)
        }

    typewriteText(text)
        {
            const length = text.length
            let i = 0
            this.time.addEvent({
                callback: () => {
                    this.label.text += text[i]
                    ++i
                },
                repeat: length - 1,
                delay: 50
            })
        }

    create() {
        

        this.label = this.add.text(100, 100, '')
            .setFontSize(50)
            .setWordWrapWidth(1900);

        this.typewriteTextWrapped('When I woke up, I was in a place I didn\'t recognize.');
        
        this.time.delayedCall(4000, () => {
            let info = this.add.text(100,300, "Click anywhere to begin.").setFontSize(30)
            .setAlpha(0);
            this.add.tween({
                targets: info,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 255, 255, 255);
            this.time.delayedCall(1000, () => this.scene.start('main'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }

    typewriteTextWrapped(text)
        {
            const lines = this.label.getWrappedText(text)
            const wrappedText = lines.join('\n')
    
            this.typewriteText(wrappedText)
        }

    typewriteText(text)
        {
            const length = text.length
            let i = 0
            this.time.addEvent({
                callback: () => {
                    this.label.text += text[i]
                    ++i
                },
                repeat: length - 1,
                delay: 50
            })
        }

    create() {
        this.label = this.add.text(100, 100, '')
            .setFontSize(35)
            .setWordWrapWidth(1800);

        this.typewriteTextWrapped('When I ran towards the shadow-y shape, hundreds of tiny, beady eyes stared back at me.\n\nI stopped dead in my tracks. The room, lit only from the fire of a cauldron, was surrounded by hundreds and hundreds of penguins. Gentoo, Rockhopper, Galapagos, Humboldt, Macaroni, you name it. Each and every bird turned to look at the intruder in their midst--except for one.\n\nIt was difficult to tell at first, but a penguin in the front was wearing a chef hat. That\'s when I noticed what was in the cauldron.\n\nFish. It was just fish. The aquarium\'s fish, sure, but not like... human meat or something. Under the silent glare of the penguins in the congregation, I quietly walked back through the enclosure door.');
        this.time.delayedCall(37000, () => {
            let endingTextCont = this.add.text(100,800, "Oh yeah, the missing employee guy was there too. Honestly, he seemed pretty happy. He was holding a couple of them.")
                .setWordWrapWidth(1800)
                .setFontSize(30);
        })
        this.time.delayedCall(40000, () => {
            let restart = this.add.text(100,900, "Click anywhere to restart.").setFontSize(30)
            .setAlpha(0);
            this.add.tween({
                targets: restart,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
            this.input.on('pointerdown', () => this.scene.start('intro'));
        })
    }
}

class BadEnd extends Phaser.Scene {
    constructor() {
        super('badend');
    }

    typewriteTextWrapped(text)
        {
            const lines = this.label.getWrappedText(text)
            const wrappedText = lines.join('\n')
    
            this.typewriteText(wrappedText)
        }

    typewriteText(text)
        {
            const length = text.length
            let i = 0
            this.time.addEvent({
                callback: () => {
                    this.label.text += text[i]
                    ++i
                },
                repeat: length - 1,
                delay: 50
            })
        }

    create() {
        this.label = this.add.text(100, 100, '')
            .setFontSize(100)
            .setWordWrapWidth(1900);

        this.typewriteTextWrapped('BAD ENDING');

        this.time.delayedCall(2000, () => {
            let info = this.add.text(100,300, "Click anywhere to restart.").setFontSize(30)
            .setAlpha(0);
            this.add.tween({
                targets: info,
                alpha: {from: 0, to: 1},
                duration: 1000
            });
        })

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('main'));
        });
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, MainRoom, Freshwater, Puzzle, DeepSea, Penguin, BadEnd, Outro],
    title: "Adventure Game",
});

