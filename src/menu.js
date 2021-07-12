import * as PIXI from 'pixi.js';
import stairsIcon from './images/stairs-pic.png'
import stairsIcon2 from './images/stairs-pic-2.png'
import stairsIcon3 from './images/stairs-pic-3.png'
import stairs from './images/stairs.png'

import stairs1 from './images/stairs1.png'
import stairs2 from './images/stairs2.png'
import stairs3 from './images/stairs3.png'

import gradient1 from './images/shape-gradient1.png'
import gradient2 from './images/shape-gradient2.png'
import { stairsPic, menu, container, hummerPic, app } from './pixi'
import gsap from 'gsap'
import { final, finalMessage, graphics, opacity, visible, invisible } from './final'


import btnOk from './images/ok-btn.png'


class selectRound {
    constructor(image, alternateImage, stairsImage, alternateStairs) {
        this.image = new PIXI.Sprite.from(image);
        this.width = 130
        this.texture = image
        this.alternateTexture = alternateImage
        this.stairsTexture = stairsImage
        this.alternateStairsTexture = alternateStairs
        this.image.anchor.set(.5)
    }
}



const img4 = PIXI.Texture.from(stairs);
const img4_1 = PIXI.Texture.from(stairs1);
const img4_2 = PIXI.Texture.from(stairs2);
const img4_3 = PIXI.Texture.from(stairs3);
const img7 = PIXI.Texture.from(gradient1)
const img8 = PIXI.Texture.from(gradient2)
const icon1 = PIXI.Texture.from(stairsIcon)
const icon2 = PIXI.Texture.from(stairsIcon2)
const icon3 = PIXI.Texture.from(stairsIcon3)
const ok = PIXI.Texture.from(btnOk)


const menuItemContainer = new PIXI.Container()
const menuItemContainer2 = new PIXI.Container()
menuItemContainer2.x = 130
const menuItemContainer3 = new PIXI.Container()
menuItemContainer3.x = 260


const menuItem1 = new selectRound(img7, img8, img4, img4_1)
const menuItem2 = new selectRound(img7, img8, img4, img4_1)
const menuItem3 = new selectRound(img7, img8, img4, img4_1)


const stairsLilIcon1 = new PIXI.Sprite(icon1)
stairsLilIcon1.x = -40;
stairsLilIcon1.y = -45;

const stairsLilIcon2 = new PIXI.Sprite(icon2)
stairsLilIcon2.x = -40;
stairsLilIcon2.y = -45;

const stairsLilIcon3 = new PIXI.Sprite(icon3)
stairsLilIcon3.x = -40;
stairsLilIcon3.y = -45;

const OkButton = new PIXI.Sprite(ok)
OkButton.x = 0
OkButton.y = 110
OkButton.anchor.set(.5)
OkButton.interactive = true
OkButton.buttonMode = true
OkButton.on('pointerdown', () => {acceptTexture() })

menuItemContainer.addChild(menuItem1.image, stairsLilIcon1)
menuItemContainer2.addChild(menuItem2.image, stairsLilIcon2)
menuItemContainer3.addChild(menuItem3.image, stairsLilIcon3)



function menuItemAppearance() {

    setTimeout(() => {
        menu.addChild(menuItemContainer)
        gsap.fromTo(menuItemContainer, { width: 0, height: 0 }, { duration: .4, ease: "back.out", width: 130, height: 130 });

        setTimeout(() => {
            menuItemContainer.interactive = true
            menuItemContainer.buttonMode = true
            menuItemContainer.on('pointerdown', () => { selectTexture(1, menuItemContainer) })
        }, 400)
    }, 200)
    setTimeout(() => {
        menu.addChild(menuItemContainer2)
        gsap.fromTo(menuItemContainer2, { width: 0, height: 0 }, { duration: .4, ease: "back.out", width: 130, height: 130 });
        setTimeout(() => {
            menuItemContainer2.interactive = true
            menuItemContainer2.buttonMode = true
            menuItemContainer2.on('pointerdown', () => { selectTexture(2, menuItemContainer2) })
        }, 400)
    }, 330)
    setTimeout(() => {
        menu.addChild(menuItemContainer3)
        gsap.fromTo(menuItemContainer3, { width: 0, height: 0 }, { duration: .4, ease: "back.out", width: 130, height: 130 });
        setTimeout(() => {
            menuItemContainer3.interactive = true
            menuItemContainer3.buttonMode = true
            menuItemContainer3.on('pointerdown', () => { selectTexture(3, menuItemContainer3) })
        }, 400)
    }, 460)
}


function selectTexture(number, context) {
    context.addChild(OkButton)
    gsap.fromTo(OkButton, { width: 0, height: 0 }, { duration: .3, ease: "back.out", width: 164, height: 101 });

    menuItem1.image.texture = menuItem1.texture
    menuItem2.image.texture = menuItem1.texture
    menuItem3.image.texture = menuItem1.texture
    let textureCur, item;
    number == 1 ? (textureCur = img4_1, item = menuItem1, menuItemContainer.interactive = false) :
        number == 2 ? (textureCur = img4_2, item = menuItem2, menuItemContainer2.interactive = false) :
            number == 3 ? (textureCur = img4_3, item = menuItem3, menuItemContainer3.interactive = false) : false

    stairsPic.texture = textureCur;

    const time = .7;
    TweenMax.fromTo(stairsPic, time, { y: -100, alpha: 0.0 }, { y: -39, alpha: 1.0 });
    item.image.texture = item.alternateTexture
}

function acceptTexture() {
    menu.removeChildren()
    container.removeChild(hummerPic)
    setTimeout(() => {
        container.addChild(final)
        final.addChild(graphics)
        gsap.fromTo(graphics, { width: 0, height: 0 },
            {
                duration: .3,
                ease: "circ.out",
                width: 1390,
                height: 640
            })
        setTimeout(() => {
            final.addChild(finalMessage)
            graphics.filters = [opacity]
            gsap.fromTo(finalMessage, { width: 0, height: 0 },
                {
                    duration: .6,
                    ease: "circ.out",
                    width: 610,
                    height: 395,
                    x: graphics.width,
                    y: graphics.height - 70
                })
            graphics.zIndex = 0
        }, 300);
    }, 100)
}


export { menuItemContainer, menuItemContainer2, menuItemContainer3, menuItemAppearance }
