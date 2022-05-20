const fs = require ('fs');
const fse = require ('fs-extra');
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

    static write(writePath, content){
        fse.outputFileSync(writePath, content)
    }

    static getFolderName() {
        const currentDate = new Date();
        return currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();
    }

    static setMarkers(dataMarker){
        return fetchedJson.data.forEach(person => {
            // console.log(dataMarker)
            person[`${dataMarker[0]}`] = person["FIRST_NAME"]; //Wie kann man hier ### als Marker nutzen, ohne dass der key zum string wird?
            person[dataMarker[1]] = person["LAST_NAME"];
            //console.log(dataMarker)
            delete(person)["FIRST_NAME"];
            delete(person)["LAST_NAME"];
             console.log(dataMarker, person)
        } );
    }
}

module.exports = FileHandler;