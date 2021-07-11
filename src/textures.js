import * as PIXI from 'pixi.js';
import image from './images/background.jpg';
import logo from './images/logo.png';
import Austin from './images/Austin.png';
import button from './images/btn.png'
import stairs from './images/stairs.png'
import dec1 from './images/dec_1.png'
import hummer from './images/icon_hammer.png'





const texture = PIXI.Texture.from(image);
const img1 = PIXI.Texture.from(Austin);
const img2 = PIXI.Texture.from(logo);
const img3 = PIXI.Texture.from(button);
const img4 = PIXI.Texture.from(stairs);
const img5 = PIXI.Texture.from(dec1)
const img6 = PIXI.Texture.from(hummer)



const austinPic = new PIXI.Sprite(img1);
austinPic.x = 690
austinPic.y = 100


const logoPic = new PIXI.Sprite(img2);
logoPic.x = 30;
logoPic.y = 10



const buttonPic = new PIXI.Sprite(img3);
buttonPic.position.set(680, 550)
buttonPic.anchor.set(.5)
buttonPic.interactive = true;
buttonPic.buttonMode = true;



const stairsPic = new PIXI.Sprite(img4);
stairsPic.x = 900
stairsPic.y = -39
stairsPic.anchor.set(0);



const flower = new PIXI.Sprite(img5);
flower.x = 1120
flower.y = 430


const hummerPic = new PIXI.Sprite(img6)
hummerPic.x = 1100
hummerPic.y = -50
hummerPic.interactive = true;
hummerPic.buttonMode = true;

const background = new PIXI.Sprite(texture);
export {
    buttonPic, austinPic, logoPic, stairsPic, hummerPic, flower, background
}