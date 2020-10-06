# electron-pixijs-typescript and Spine(pixi-spine)
Sample using Electron, Pixi.JS and Spine(pixi-spine) and TypeScript to make a game app that runs on browser and on desktop.  

**DEMO**  
Web:  
<img src="https://evofan.github.io/electron-pixijs-typescript/screenshot/pic_by_browser.jpg" width="50%">   
[https://evofan.github.io/electron-pixijs-typescript/build/app/index.html](https://evofan.github.io/electron-pixijs-typescript/build/app/index.html)  

Electron:  
<img src="https://evofan.github.io/electron-pixijs-typescript/screenshot/pic_by_electron.jpg" width="50%">   


**How to use it**  
```
npm install
npm run build
npm start
```
You can also build your app to work on a web browser using `npm run web`.  

update library(at 2020/10)  
~~~  
 @types/node              ^11.11.3  →  ^14.11.2
 @types/pixi.js             ^4.8.6  →    ^5.0.0
 del                        ^4.0.0  →    ^6.0.0
 electron                   ^4.0.8  →   ^10.1.3
 gulp                       ^4.0.0  →    ^4.0.2
 gulp-typescript            ^5.0.0  →    ^5.0.1
 merge2                     ^1.2.3  →    ^1.4.1
 minimist                   ^1.2.3  →    ^1.2.5
 pixi.js                    ^4.8.6  →    ^5.3.3
 ts-loader                  ^5.3.3  →    ^8.0.4
 tslint                    ^5.13.1  →    ^6.1.3
 typescript              ^3.3.3333  →    ^4.0.3
 webpack                   ^4.29.6  →   ^4.44.2
 webpack-node-externals     ^1.7.2  →    ^2.5.2
 webpack-stream             ^5.2.1  →    ^6.1.0
 ~~~  

reference  

**PixiJS Examples Pixie**  
[https://pixijs.io/examples/#/plugin-spine/pixie.js](https://pixijs.io/examples/#/plugin-spine/pixie.js)  

**Example: Alien**  
[http://ja.esotericsoftware.com/spine-examples-alien](http://ja.esotericsoftware.com/spine-examples-alien)  
Because spine ver 3.8 or higher is required.  

**electron 5.0.0 “Uncaught ReferenceError: require is not defined”**  
[https://stackoverflow.com/questions/55093700/electron-5-0-0-uncaught-referenceerror-require-is-not-defined](https://stackoverflow.com/questions/55093700/electron-5-0-0-uncaught-referenceerror-require-is-not-defined)  
>nodeIntegration: true

**ReferenceError: PIXI is not defined · Issue #47 · pixijs/pixi-projection**  
[https://github.com/pixijs/pixi-projection/issues/47](https://github.com/pixijs/pixi-projection/issues/47)  

**pixijs/pixi-spine**  
[https://github.com/pixijs/pixi-spine](https://github.com/pixijs/pixi-spine)  
>Basic Example

memo  
erase glup lint...  
nodeIntegration security ok?  
