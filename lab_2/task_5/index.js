import {calc as calcV2} from "./MathOperationsModuleExport.js";
import calc from "./MathOperationsModuleExportDefault.js";

const res2 = calcV2(1, 2, '+')
console.log(res2)

const res3 = calc(1, 2, '+')
console.log(res3)