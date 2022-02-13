import {flipACoin} from "./modules/coin.mjs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const args = require("minimist")(process.argv.slice(2));
args["call"];
const callArg = args.call || "";

if (callArg === "") {
    console.log("Error: no input.");
} else {
    console.log(flipACoin(callArg));
}