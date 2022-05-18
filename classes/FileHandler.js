const fs = require ('fs');
const fse = require ('fs-extra');
const fetchedJson = require ('../config/config.json');

class FileHandler {

    /**
     *
     * @param {string} readPath
     * @returns {string}
     */
    static readTemplate(readPath) {
        let data = fs.readFileSync(readPath, 'utf-8')
        return data;
    }

    static write(writePath, content){
        fse.outputFileSync(writePath, content)
    }

    static getFolderName() {
        const currentDate = new Date();
        let dateTime = currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();
        return dateTime;
    }
}

module.exports = FileHandler;