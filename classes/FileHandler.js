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

    static setMarkers(dataMarker, jsonMarker) {
        return fetchedJson.data.map(person => {
            const entity = {}
            for (let i = 0; i < dataMarker.length; i++) {
                entity[dataMarker[i]] = person[jsonMarker[i]];
            }
            return entity;
        });
    }
}

module.exports = FileHandler;