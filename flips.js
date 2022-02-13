import {coinFlip} from "./modules/coin.mjs";
import {countFlip} from "./modules/coin.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args["number"]
const number = args.number || 1;

let flips = [];
for (let i  = 0; i < number; i++){
    flips[i] = coinFlips(1); 
}

console.log(flips);
console.log(countFlips(flips));