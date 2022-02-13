import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args["number"]
const number = args.number || 1;

var flips = [];
for (let i  = 0; i < number; i++){
    flips.push(coinFlips(1)); 
}

console.log(flips);
console.log(countFlips(flips));