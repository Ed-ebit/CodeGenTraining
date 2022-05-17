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
        fse.outputFileSync(`./out/${FileHandler.getFolderName()}/${writePath}`, content)
    }

    static readJson() {
        const person = [];
        for (let i = 0; i < fetchedJson.data.length; i++) {

            let values = Object.values(fetchedJson.data[i]);
            person[i] = values;
        }
        console.log(person)
        return person;
    }

    static getFolderName() {
        const currentDate = new Date();
        let dateTime = currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();
        return dateTime;
    }
}

module.exports = {readTemplate(){}, write(){}, readJson(){}, getFolderName(){}};