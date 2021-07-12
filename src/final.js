import * as PIXI from 'pixi.js';
import finalPic from './images/final.png'


const graphics = new PIXI.Graphics();
graphics.beginFill(0x25090C);
graphics.drawRect(0, 0, 1390, 640);
graphics.endFill();

const opacity = new PIXI.filters.AlphaFilter(.6);
const invisible = new PIXI.filters.AlphaFilter(0);
const visible = new PIXI.filters.AlphaFilter(1);
const final = new PIXI.Container()

graphics.filters = [invisible]
graphics.zIndex = 0


const centredImage = PIXI.Texture.from(finalPic);
const finalMessage = new PIXI.Sprite(centredImage);
finalMessage.anchor.set(.5)
finalMessage.x = graphics.width / 2
finalMessage.y = graphics.height / 2 - 70
finalMessage.pivot.x = graphics.width / 2
finalMessage.pivot.y = graphics.height / 2
finalMessage.zIndex = 1


export { final, finalMessage, graphics, opacity, invisible,visible }