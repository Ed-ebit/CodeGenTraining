const fetchedJson = require('../config/config.json');

class fileReader {
// console.log(customValue);
// console.log(fetchedJson);

// const fetchedFirstName = [];

    static readFile() {
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


}

module.exports = {fileReader};

