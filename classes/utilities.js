const fetchedJson = require('../config/config.json');

class utilities {

    static readJson() {
        const person = [];
        for (let i = 0; i < fetchedJson.data.length; i++) {

            let values = Object.values(fetchedJson.data[i]);
            person[i] = values;
        }
        console.log(person)
        return person;
    }

    static setDate() {
        const currentDate = new Date();
        let dateTime = currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();
        return dateTime;
    }
}

module.exports = {utilities};

