/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Ball/Ball.sass":
/*!***********************************!*\
  !*** ./components/Ball/Ball.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!../../node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./Ball.sass */ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Ball/Ball.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/Ball/Ball.tsx":
/*!**********************************!*\
  !*** ./components/Ball/Ball.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Ball.sass */ "./components/Ball/Ball.sass");
exports.BallComponent = ({ id, up, color }) => {
    return (react_1.default.createElement("div", { id: id, style: { backgroundColor: color }, className: `ball-component ${up ? 'up' : ''}` }));
};


/***/ }),

/***/ "./components/Game/Game.sass":
/*!***********************************!*\
  !*** ./components/Game/Game.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!../../node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./Game.sass */ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Game/Game.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/Game/Game.tsx":
/*!**********************************!*\
  !*** ./components/Game/Game.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Game.sass */ "./components/Game/Game.sass");
const LinesMap_1 = __webpack_require__(/*! components/LinesMap */ "./components/LinesMap/LinesMap.tsx");
exports.GameComponent = ({ state }) => {
    state.useState();
    react_1.useEffect(() => {
        const keydown = ({ key }) => {
            switch (key) {
                case 'Backspace':
                    state.back();
                    break;
                case 'Escape':
                    state.restart();
                    break;
                case '+':
                    state.appendLine();
                    break;
            }
        };
        document.addEventListener('keydown', keydown);
        return () => {
            document.removeEventListener('keydown', keydown);
        };
    });
    return (react_1.default.createElement("div", { className: "game-component" },
        react_1.default.createElement(LinesMap_1.LinesMapComponent, { state: state })));
};


/***/ }),

/***/ "./components/Line/Line.sass":
/*!***********************************!*\
  !*** ./components/Line/Line.sass ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!../../node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./Line.sass */ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Line/Line.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/Line/Line.tsx":
/*!**********************************!*\
  !*** ./components/Line/Line.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./Line.sass */ "./components/Line/Line.sass");
const Ball_1 = __webpack_require__(/*! components/Ball */ "./components/Ball/Ball.tsx");
exports.LineComponent = ({ state, row }) => {
    const { balls, index, select } = row;
    const upped = { up() {
            upped.up = () => false;
            return true;
        } };
    return (react_1.default.createElement("div", { className: "line-component", onClick: () => state.click(index) }, balls.map((ball, i) => {
        const { colorStyle, id, free } = ball;
        const up = select && !free ? upped.up() : false;
        return react_1.default.createElement(Ball_1.BallComponent, { key: id, id: id, up: up, color: colorStyle });
    })));
};


/***/ }),

/***/ "./components/LinesMap/LinesMap.sass":
/*!*******************************************!*\
  !*** ./components/LinesMap/LinesMap.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!../../node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./LinesMap.sass */ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/LinesMap/LinesMap.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/LinesMap/LinesMap.tsx":
/*!******************************************!*\
  !*** ./components/LinesMap/LinesMap.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./LinesMap.sass */ "./components/LinesMap/LinesMap.sass");
const LinesRow_1 = __webpack_require__(/*! components/LinesRow */ "./components/LinesRow/LinesRow.tsx");
exports.LinesMapComponent = ({ state }) => {
    const { rowsLines } = state;
    return (react_1.default.createElement("div", { className: "lines-map-component" }, rowsLines.map((rowsLine, index) => {
        return react_1.default.createElement(LinesRow_1.LinesRowComponent, { key: `rowLien-${index}`, state: state, rowsLine: rowsLine });
    })));
};


/***/ }),

/***/ "./components/LinesRow/LinesRow.sass":
/*!*******************************************!*\
  !*** ./components/LinesRow/LinesRow.sass ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!../../node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./LinesRow.sass */ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/LinesRow/LinesRow.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./components/LinesRow/LinesRow.tsx":
/*!******************************************!*\
  !*** ./components/LinesRow/LinesRow.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
__webpack_require__(/*! ./LinesRow.sass */ "./components/LinesRow/LinesRow.sass");
const Line_1 = __webpack_require__(/*! components/Line */ "./components/Line/Line.tsx");
exports.LinesRowComponent = ({ state, rowsLine }) => {
    return (react_1.default.createElement("div", { className: "lines-row-component" }, rowsLine.map((row, index) => {
        return react_1.default.createElement(Line_1.LineComponent, { key: `row-${index}`, state: state, row: row });
    })));
};


/***/ }),

/***/ "./index.sass":
/*!********************!*\
  !*** ./index.sass ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./index.sass */ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./index.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ./node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! ./index.sass */ "./index.sass");
const Game_1 = __webpack_require__(/*! components/Game */ "./components/Game/Game.tsx");
const GameState_1 = __webpack_require__(/*! library/GameState */ "./library/GameState.ts");
const delay_1 = __webpack_require__(/*! library/delay */ "./library/delay.ts");
const map = new Uint8Array(
// [1, 5, 5, 2, 4, 6, 1, 4, 4, 2, 0, 3, 2, 0, 0, 3, 6, 1, 3, 0, 4, 1, 2, 3, 6, 6, 5, 5]
// [3, 2, 0, 2, 3, 1, 1, 2, 1, 0, 0, 4, 3, 2, 1, 4, 0, 3, 4, 4]
// [4, 2, 0, 2, 1, 2, 0, 1, 3, 2, 4, 1, 3, 3, 3, 4, 0, 0, 1, 4]
// [2, 0, 1, 2, 1, 2, 1, 2, 1, 0, 0, 0]
// [0, 6, 3, 4, 5, 7, 5, 6, 6, 7, 3, 0, 3, 3, 7, 2, 6, 4, 2, 0, 4, 7, 5, 4, 2, 5, 0, 2, 1, 1, 1, 1]
// [2, 2, 0, 3, 2, 2, 1, 3, 0, 1, 3, 0, 1, 1, 3, 0]
);
const ss = document.getElementById('ss');
const dop = 3;
const staticMovies = [
// [2, 5],
// [1, 5],
// [1, 4],
// [5, 1],
// [1, 3],
// [5, 3],
// [3, 1],
// [0, 5],
// [5, 4],
// [1, 5],
// [5, 3],
// [1, 5],
// [5, 3],
// [4, 1],
// [4, 1],
// [0, 5],
// [5, 2],
// [0, 5],
// [5, 3],
// [0, 1]
];
const root = document.getElementById('root');
const gameState = map.length ? new GameState_1.GameState(map, dop) : GameState_1.GameState.generate(7, dop);
async function main() {
    if (!staticMovies.length) {
        const win = await gameState.calculate();
        if (!win) {
            console.log('Я обосрался');
            ss.innerText = `Решений нет`;
        }
        else {
            ss.innerText = `${win.moves.length}`;
            console.log('Я молодец!');
        }
        if (!win)
            return null;
        console.log(win.moves);
        ss.innerText = `${win.moves.length}`;
        for (let [a, b] of win.moves) {
            await delay_1.delay(400);
            gameState.setSelect(a);
            await delay_1.delay(400);
            gameState.move(a, b);
        }
    }
    else {
        for (let [a, b] of staticMovies) {
            await delay_1.delay(400);
            gameState.setSelect(a);
            await delay_1.delay(400);
            gameState.move(a, b);
        }
    }
}
react_dom_1.render(react_1.default.createElement(Game_1.GameComponent, { state: gameState }), root);
main().catch(console.error);


/***/ }),

/***/ "./library/GameState.ts":
/*!******************************!*\
  !*** ./library/GameState.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const delay_1 = __webpack_require__(/*! ./delay */ "./library/delay.ts");
const s = document.getElementById('s');
const w = document.getElementById('w');
const i = document.getElementById('i');
const lineSize = 4;
exports.ColorList = [
    [0x51, 0x99, 0xFF],
    [0x23, 0x00, 0xB0],
    [0x76, 0xFE, 0xC5],
    [0x00, 0xCF, 0x91],
    [0x00, 0x41, 0x56],
    [0x1E, 0x3C, 0x00],
    [0xFF, 0xD6, 0x00],
    [0xD2, 0xAA, 0x1B],
    [0xFF, 0x75, 0x6B],
    [0xE8, 0xD5, 0xD5],
    [0x46, 0x00, 0x00],
    [0xEF, 0x2F, 0xA2],
    [0x38, 0x04, 0x38],
    [0xA4, 0x00, 0xFF],
    [0x23, 0x1F, 0x20]
];
class Ball {
    constructor(game, index, colorIndex = -1) {
        this.game = game;
        this.colorIndex = colorIndex;
        this.free = false;
        const { color } = this;
        this.id = [index, ...color].map(e => e.toString(16)).join('');
    }
    get colorStyle() {
        if (this.free)
            return 'transparent';
        return `rgb(${this.color.join(',')})`;
    }
    get color() {
        const { colorIndex } = this;
        if (colorIndex == -1) {
            this.free = true;
            return [0, 0, 0];
        }
        return [...exports.ColorList[colorIndex]];
    }
    static free(game, index) {
        return new this(game, index, -1);
    }
}
exports.Ball = Ball;
class GameState {
    constructor(map, dop = 1) {
        this.balls = [];
        this.handlers = [];
        this.steps = [];
        this.stepsHash = [];
        this.select = -1;
        this.startState = [];
        this.moves = [];
        this.win = false;
        for (let i = 0; i < map.length + dop * lineSize; i++) {
            let colorIndex = map[i];
            let ball;
            if (colorIndex !== undefined)
                ball = new Ball(this, i, colorIndex);
            else
                ball = Ball.free(this, i);
            this.balls.push(ball);
        }
        this.startState = [...this.balls];
        this.reduceHandelrs = this.reduceHandelrs.bind(this);
    }
    get rows() {
        const rows = [];
        for (let i = 0; i < this.size; i++) {
            rows.push({
                select: i == this.select,
                index: i,
                balls: this.getRow(i),
                first(ball) {
                    const { balls: bs } = this;
                    const i = bs.indexOf(ball);
                    return i == 0;
                }
            });
        }
        return rows;
    }
    get rowsLines() {
        const { rows, size } = this;
        const center = size > 5 ? Math.ceil(size / 2) : 0;
        return center ? [rows, rows.splice(center)] : [rows];
    }
    get size() {
        return this.balls.length / lineSize;
    }
    getHashBalls(balls) {
        return balls.map(e => (e.colorIndex + 1).toString(16)).join();
    }
    reduceHandelrs() {
        for (let hand of this.handlers)
            hand();
    }
    appendLine() {
        const { balls } = this;
        for (let i = 0; i < lineSize; i++)
            this.balls.push(Ball.free(this, balls.length + i));
        this.reduceHandelrs();
    }
    getMaxOnly(ball) {
        const { rows } = this;
        const rowsCalls = rows.map(row => {
            const { balls } = row;
            const ballsFilter = balls
                .filter(e => e.colorIndex !== -1);
            const haveOther = !!ballsFilter.find(e => e.colorIndex !== ball.colorIndex);
            const { length } = ballsFilter.filter(e => e.colorIndex == ball.colorIndex);
            return { ...row, length, haveOther };
        }).filter(e => !e.haveOther);
        rowsCalls.sort((a, b) => b.length - a.length);
        return rowsCalls[0];
    }
    needMove(rowA, rowB = -1) {
        const row = this.getRow(rowA);
        const topRow = this.getTop(rowA);
        const only = this.getMaxOnly(topRow);
        if (only && only.index != rowB)
            return false;
        const rowBClear = (rowB !== -1 ? this.getRow(rowB) : row)
            .filter(e => e.colorIndex !== -1);
        let size = 0;
        for (let i = 0; i < lineSize; i++) {
            if (row[i].free)
                continue;
            if (row[i].colorIndex == topRow.colorIndex)
                size++;
            else
                return true;
            if (size >= 3)
                return false;
        }
        return rowBClear.length && true;
    }
    canMove(rowA, rowB) {
        const row = this.getRow(rowB);
        if (row.filter(e => !e.free).length == lineSize)
            return false;
        const topA = this.getTop(rowA);
        const topB = this.getTop(rowB);
        if (topB.free || topA.colorIndex == topB.colorIndex)
            return true;
        return false;
    }
    click(rowIndex) {
        if (this.win)
            return null;
        if (this.select == -1) {
            const rowTop = this.getTop(rowIndex);
            if (!rowTop.free)
                this.setSelect(rowIndex);
        }
        else if (this.select == rowIndex) {
            this.setSelect();
        }
        else if (!this.canMove(this.select, rowIndex)) {
            this.setSelect(rowIndex);
        }
        else {
            this.move(this.select, rowIndex);
        }
    }
    setSelect(rowIndex = -1) {
        this.select = rowIndex;
        if (rowIndex !== -1)
            console.log(this.needMove(rowIndex));
        this.reduceHandelrs();
    }
    move(rowA, rowB) {
        const indexA = this.getTopIndex(rowA);
        const indexB = this.getTopIndex(rowB, true);
        const step = [...this.balls];
        this.moves.push([rowA, rowB]);
        this.steps.push(step);
        const a = this.balls[indexA];
        const b = this.balls[indexB];
        this.balls[indexA] = b;
        this.balls[indexB] = a;
        const hash = this.getHashBalls(step);
        if (this.stepsHash.indexOf(hash) == -1)
            this.stepsHash.push(hash);
        this.select = -1;
        this.checkWin();
        this.reduceHandelrs();
    }
    fakeMove(rowA, rowB) {
        const { balls, moves, steps, reduceHandelrs, stepsHash } = this;
        this.balls = [...balls];
        this.steps = [];
        this.moves = [];
        this.stepsHash = [];
        this.reduceHandelrs = () => { };
        this.move(rowA, rowB);
        const newBalls = this.balls;
        this.balls = balls;
        this.steps = steps;
        this.moves = moves;
        this.stepsHash = stepsHash;
        this.reduceHandelrs = reduceHandelrs;
        return newBalls;
    }
    restart() {
        if (!this.steps.length)
            return null;
        this.steps = [];
        this.stepsHash = [];
        this.moves = [];
        this.balls = [...this.startState];
        this.reduceHandelrs();
    }
    back() {
        if (!this.steps.length)
            return null;
        this.balls = [...this.steps.pop()];
        this.moves.pop();
        this.stepsHash.pop();
        this.reduceHandelrs();
    }
    getRow(rowIndex) {
        const row = [];
        for (let i = rowIndex * lineSize; i < rowIndex * lineSize + lineSize; i++)
            row.push(this.balls[i]);
        return row;
    }
    getTop(rowIndex, pre = false) {
        const row = this.getRow(rowIndex);
        let preBall;
        for (let ball of row)
            if (!ball.free)
                return pre ? preBall : ball;
            else
                preBall = ball;
        return preBall;
    }
    getTopIndex(rowIndex, pre = false) {
        const rowTop = this.getTop(rowIndex, pre);
        return this.balls.indexOf(rowTop);
    }
    useState() {
        const [, update] = react_1.useState(0);
        react_1.useEffect(() => {
            let i = 0;
            const handler = () => {
                if (i > 8)
                    i = 0;
                update(++i);
            };
            this.handlers.push(handler);
            return () => {
                let index = this.handlers.indexOf(handler);
                if (index !== -1)
                    this.handlers.splice(index, 1);
            };
        }, []);
    }
    checkWin() {
        for (let i = 0; i < this.size; i++) {
            const row = this.getRow(i).filter((e, i, d) => d[0].colorIndex !== e.colorIndex);
            if (row.length)
                return this.win = false;
        }
        return this.win = true;
    }
    hasStep(balls, a, b) {
        const hashBalls = this.getHashBalls(balls);
        if (this.stepsHash.indexOf(hashBalls) !== -1)
            return true;
        return false;
    }
    clone() {
        const { balls, steps, stepsHash, startState, moves } = this;
        const newState = new GameState(new Uint8Array(0), 0);
        newState.balls = [...balls];
        newState.steps = [...steps];
        newState.moves = [...moves];
        newState.stepsHash = [...stepsHash];
        newState.startState = [...startState];
        return newState;
    }
    async calculate(state = this) {
        const tasks = [state];
        let iS = 0;
        s.innerText = `${tasks.length}`;
        i.innerText = `${iS}`;
        while (tasks.length) {
            const now = tasks.shift().clone();
            s.innerText = `${tasks.length}`;
            if (iS % 123 == 0)
                await delay_1.delay();
            // if(iS > 10000)
            //   return null
            for (let a = 0; a < now.size; a++) {
                for (let b = 0; b < now.size; b++) {
                    if (a !== b) {
                        const stepNow = now.clone();
                        if (stepNow.canMove(a, b)) {
                            if (stepNow.needMove(a, b)) {
                                const preState = stepNow.fakeMove(a, b);
                                if (!stepNow.hasStep(preState, a, b)) {
                                    i.innerText = `${++iS}`;
                                    stepNow.move(a, b);
                                    if (!stepNow.win) {
                                        tasks.unshift(stepNow);
                                        s.innerText = `${tasks.length}`;
                                    }
                                    else {
                                        return stepNow;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            // tasks.sort(() => Math.random() > 0.5 ? 1 : -1)
        }
        return null;
    }
    static generate(size, dop) {
        const array = new Uint8Array(size * lineSize);
        for (let i = 0; i < array.length; i++)
            array[i] = (i - (i % lineSize)) / lineSize;
        array.sort(() => Math.random() > 0.5 ? 1 : -1);
        console.log(array);
        return new this(array, dop);
    }
}
exports.GameState = GameState;


/***/ }),

/***/ "./library/delay.ts":
/*!**************************!*\
  !*** ./library/delay.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function delay(n = 0) {
    return new Promise(r => setTimeout(r, n));
}
exports.delay = delay;


/***/ }),

/***/ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Ball/Ball.sass":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Ball/Ball.sass ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes ball-spawn{0%{opacity:0}100%{opacity:1}}.ball-component{margin:3px;padding:0;width:24px;height:24px;border-radius:100%;animation:ball-spawn  0.6s;transition:0.3s;transform:scale(1.2) translateY(0px)}.ball-component.up{transform:scale(1.4) translateY(-30px)}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Game/Game.sass":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Game/Game.sass ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-component{margin:0;padding:0}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Line/Line.sass":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/Line/Line.sass ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line-component{margin:20px;padding:5px;width:30px;height:120px;border:1px solid;display:flex;flex-direction:column;cursor:pointer}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/LinesMap/LinesMap.sass":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/LinesMap/LinesMap.sass ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lines-map-component{margin:0;padding:0;width:750px;height:400px;border:1px solid;display:flex;flex-direction:column;justify-content:center;align-items:center}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/LinesRow/LinesRow.sass":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./components/LinesRow/LinesRow.sass ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lines-row-component{margin:0;padding:0;width:100%;flex-grow:1;display:flex;justify-content:center;align-items:center}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./index.sass":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?minimize&{discardComments:{removeAll:true}}!./node_modules/sass-loader/dist/cjs.js?outputStyle=compressed!./index.sass ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{width:100%;height:100%;margin:0;padding:0;background:#666}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map