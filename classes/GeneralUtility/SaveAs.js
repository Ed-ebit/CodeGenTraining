const fse = require('fs-extra');

module.exports = (output, path) => {
    fse.outputFileSync(path, output);
}