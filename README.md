A simple adventure game by Madison Li based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: 
    - MainRoom
    - Freshwater
    - Puzzle
    - DeepSea
    - Penguin

- **2+ scenes *not* based on `AdventureScene`**:
    - Intro
    - Outro
    - BadEnd

- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: showFlyer()
        - The method creates a flyer from an asset I drew, and displays it on the screen. It then destroys the flyer image once the player clicks on it a second time. The method also takes text as input, and displays/destroys the text along with the flyer.
    - Enhancement 2: sparkleCreate()
        - The method creates a sparkling animation, which can then be created and played in the AdventureScene the method was called in.
    - Enhancement 3: shake()
        - The method takes in a variable name, and then animates that variable to shake. This was helpful to animate objects that couldn't be picked up, unlocked, or "wrong" (as in the puzzle).
    - Enhancement 4: this.narration/showNarration()
        - Using the existing this.messageBox and showMessage() code in the script, I added the new field and its corresponding update function so that flavor text gained from clicking would be separate from text gained from hovering the cursor.

Experience requirements:
- **4+ locations in the game world**:
    - the "Main Room" of the aquarium.
    - the "Freshwater Exhibit", where the puzzle was located.
    - the "Puzzle Room", where the key could be gained.
    - the "DeepSea Exhibit", where the puzzle solution could be found.
    - the "Penguin Enclosure", where the ending could be reached.

- **2+ interactive objects in most scenes**:
    - In the "Main Room":
        - large tanks
        - player
        - flyer on the ground
        - door to "Freshwater Exhibit"
        - door to the "Penguin Enclosure", initially locked
    - In the "Freshwater Exhibit":
        - multiple tanks
        - player
        - employee board (the puzzle)
        - door back to the "Main Room"
        - door to the "Deepsea Exhibit"
    - In the "Puzzle Room"
        - the background (initiates the puzzle)
        - the four buttons of the puzzle
        - the key
    - In the "Deepsea Exhibit"
        - the player
        - the aquarium closure notice
        - the employee feeding times notice (solution)
        - door back to the "Freshwater Exhibit"
    - In the "Penguin Enclosure"
        - the player
        - the knife
        - the shadow-y shape
- **Many objects have `pointerover` messages**:
    - The tanks in the "Main Room" will display: "This side of the room is lined with ceiling-to-floor tanks."
    - the door to the "Freshwater Exhibit" will display: "Is this a new room? It looks like a different exhibit."
- **Many objects have `pointerdown` effects**: 
    - The tanks in the "Main Room" have two versions:
        - If the flyer in the same room hasn't been viewed yet, the text will be "The tanks are completely empty. Shouldn't there be fish inside?"
        - Otherwise, if the flyer has been read, the text will be "The aquarium is closed today... but even if an aquarium is closed, there should still be fish in the tanks right...?"
- **Some objects are themselves animated**:
    - Using spritesheets, I animated a sparkle effect on the items in each room that could be interacted with, besides the doors.
    - Using tweens, I was able to animate a shaking effect to indicate to the player that the item couldn't be picked up, the door was locked, or the button pressed was incorrect.

Asset sources:
- All image assets, including the various backgrounds, sprites, and interactable items, were created by me in Clip Studio Paint.
- The font was downloaded from Google, and I manipulated its font-size, color, and line-spacing in-engine.

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.
- The typewriter effect was achieved through the code found in [this tutorial](https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/).
- To implement spritesheets, I referenced the code example [here](https://labs.phaser.io/edit.html?src=src/scalemanager/full%20screen%20game.js).