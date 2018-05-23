"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function read(path) {
    return new Promise((fulfill, reject) => {
        fs.readFile(path, (err, data) => {
            if (err != undefined) {
                reject(err);
                return;
            }
            let proj;
            try {
                proj = JSON.parse(data.toString());
            }
            catch (error) {
                reject(error);
                return;
            }
            fulfill(proj);
        });
    });
}
exports.read = read;
//# sourceMappingURL=Read.js.map