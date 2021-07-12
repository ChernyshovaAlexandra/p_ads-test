import gsap from 'gsap'
import * as PIXI from 'pixi.js';

import { menuItemAppearance } from './menu'
import { background, buttonPic, austinPic, logoPic, stairsPic, hummerPic, flower } from './textures'
import { Layer } from '@pixi/layers'
import { final, graphics } from './final'
let layer = new Layer();


let app = new PIXI.Application({ width: 1390, height: 640 });
document.body.appendChild(app.view);


let size = [1390, 640];
let ratio = size[0] / size[1];
layer.group.enableSort = true;




const container = new PIXI.Container();
const menu = new PIXI.Container();

menu.width = 410
menu.height = 280
menu.x = 900
menu.y = 80

container._width = size[0]
container.height = size[1]



buttonPic
    .on('pointerover', onButtonOver)
    .on('pointerout', onButtonOut);

function onButtonOver() {
    this.alpha = .85;

}
function onButtonOut() {
    this.alpha = 1;
}



buttonPic.scale.x = 1.15
buttonPic.scale.y = 1.15


let scaleSize = 0.004,
    flag = false


app.ticker.add((delta) => {
    if (buttonPic.scale.x >= 1.15 || buttonPic.scale.x <= 1) {
        flag = !flag
    }
    if (!flag) {
        buttonPic.scale.x += scaleSize
        buttonPic.scale.y += scaleSize
    }
    if (flag) {
        buttonPic.scale.x -= scaleSize
        buttonPic.scale.y -= scaleSize
    }
});


setTimeout(() => {
    container.addChild(hummerPic)
    gsap.to(hummerPic, { duration: 1, ease: "bounce.out", y: 270 });
}, 15)
hummerPic
    .on('pointerdown', clickHummer)


function clickHummer() {
    container.removeChild(hummerPic)
    menuItemAppearance()
    hummerPic.texture = ''
}



final.sortableChildren = true
container.addChild(background, austinPic, stairsPic, flower);
logoPic.zIndex = 1000
buttonPic.zIndex = 1000
final.addChild(graphics, logoPic, buttonPic)
app.stage.addChild(container, menu, final);


function placeToLayer(args) {
    for (let i = 0; i < args.length; i++) {
        args[i].parentLayer = layer
        args[i].zIndex = 3
    }
}
placeToLayer(
    [container, buttonPic, logoPic]
)


function resize() {
    if (window.innerWidth / window.innerHeight >= ratio) {
        var w = window.innerHeight * ratio;
        var h = window.innerHeight;
    } else {
        var w = window.innerWidth;
        var h = window.innerWidth / ratio;
    }
    app.view.style.width = w + 'px';
    app.view.style.height = h + 'px';
}

resize();
window.onresize = resize;


export { stairsPic, menu, container, hummerPic, app }
