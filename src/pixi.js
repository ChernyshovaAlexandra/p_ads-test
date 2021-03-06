import gsap from 'gsap'
import * as PIXI from 'pixi.js';

import { menuItemAppearance } from './menu'
import { background, buttonPic, austinPic, logoPic, stairsPic, hummerPic, flower, pointer } from './textures'
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
// gsap.to(buttonPic, time, { ease: "back.out", x: container._width - 320, repeat: -1, yoyo: true });
gsap.fromTo(buttonPic.scale,
    {
        x: 1, y: 1,
    },
    {
        duration: .8, x: 1.1, y: 1.1, repeat: -1, yoyo: true
    });
// ------------------
// old animation
// ------------------
// let scaleSize = 0.004,
//     flag = false

// app.ticker.add((delta) => {
//     if (buttonPic.scale.x >= 1.15 || buttonPic.scale.x <= 1) {
//         flag = !flag
//     }
//     if (!flag) {
//         buttonPic.scale.x += scaleSize
//         buttonPic.scale.y += scaleSize
//     }
//     if (flag) {
//         buttonPic.scale.x -= scaleSize
//         buttonPic.scale.y -= scaleSize
//     }
// });
let showPointer = true

setTimeout(() => {
    container.addChild(hummerPic)
    gsap.to(hummerPic, {
        duration: 1, ease: "bounce.out", y: 270,
    });


}, 1500)

setTimeout(() => {
    const time = .7
    if (showPointer) {
        container.addChild(pointer);
        gsap.to(pointer, time, { ease: "back.out", x: container._width - 320, repeat: -1, yoyo: true })
    }

}, 2500)

hummerPic
    .on('pointerdown', clickHummer)


function clickHummer() {
    showPointer = false
    container.removeChild(hummerPic, pointer)
    menuItemAppearance()
    hummerPic.texture = ''
}


pointer.x = container._width - 300
pointer.y = container._height / 2
pointer.rotation = 45



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
