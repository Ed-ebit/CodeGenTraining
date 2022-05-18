const fs = require ('fs');
const fse = require ('fs-extra');

class FileHandler {

    /**
     *
     * @param {string} readPath
     * @returns {string}
     */
    static readTemplate(readPath) {
        return fs.readFileSync(readPath, 'utf-8')
    }

    static write(writePath, content){
        fse.outputFileSync(writePath, content)
    }

    static getFolderName() {
        const currentDate = new Date();
        return currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();
    }
}

module.exports = FileHandler;