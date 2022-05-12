const fetchedJson = require('../config/config.json');

class utilities {
// console.log(customValue);
// console.log(fetchedJson);

// const fetchedFirstName = [];

    static readJson() {
        for (const obj in fetchedJson) {
//     console.log(`${obj}: ${fetchedJson[name]}`);
            var person = [];
            for (let i = 0; i < fetchedJson.data.length; i++) {
                //console.log(fetchedJson.Data[i]);
                // console.log(itemExists(fetchedJson.Data.keys, "name"))
                // if (itemExists(Object.keys(fetchedJson.Data), "name")){
                //

                //let keys = Object.keys(fetchedJson.data[i]);
                let values = Object.values(fetchedJson.data[i]);


                //for( let i = 0; i < keys.length; i++){
                //if (keys[i] === 'name' || keys[i] === 'last_name'){
                //console.log((values[i]))
                person[i] = values;

                //}

                //}

                //console.log(person);
            }
            //}
            // fetchedFirstName[i] = name;
            // console.log(fetchedFirstName[i]);
            // i++;
            //console.log(Object.keys(fetchedJson.Data[0]))
            return person;
        }

// var jsonData = [{person:"me", age :"30"},{person:"you",age:"25"}];
//
// function itemExists(haystack, needle) {
//     for(let i=0; i<haystack.length; i++) {
//         console.log(haystack[i])
//         if ((haystack[i] === needle)) return true;
//     }
//     return false;
//}isEqual
    }
    static setDate(){
        const currentDate = new Date();
        let dateTime = currentDate.getFullYear() + "_" + (currentDate.getMonth()+1)+ "_" + currentDate.getDate();
        return dateTime;
    }

}

module.exports = {utilities};

