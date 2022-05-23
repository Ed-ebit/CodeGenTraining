const fs = require('fs');
const fse = require('fs-extra');
const fetchedJson = require("../config/config.json");

class FileHandler {

    /**
     *
     * @param {string} readPath
     * @returns {string}
     */
    static readTemplate(readPath) {
        return fs.readFileSync(readPath, 'utf-8')
    }

    static write(writePath, content) {
        fse.outputFileSync(writePath, content)
    }

    static getFolderName() {
        const currentDate = new Date();
        return currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();
    }

    static setMarkers(dataMarker) {
        const markedJsonData = fetchedJson.data.map(person => {
            return {
                [dataMarker[0]]: person["FIRST_NAME"],
                [dataMarker[1]]: person["LAST_NAME"],
            }
        });
        return markedJsonData
    }
}

module.exports = FileHandler;