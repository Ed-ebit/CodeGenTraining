const fetchedJson = require ('./config/config.json');

// document.getElementById("./config/config.json");
const customIndex = process.argv.indexOf('--custom');
let customValue;

if (customIndex >= 0) {
    customValue = process.argv[customIndex+1];
}
// require('./templates/template_'+ customValue +'.'+customValue);
switch (customValue){
    case 'xml':
        // console.log('xmlhöhö')
        require('./templates/template_xml.xml')
        break;
    case 'html':
        // console.log('htmlhöhö')
        require('templates/template_html.html')
        break;
    default:
        // console.log('unbekanntes Argument! Opfa')
        break;
}
// console.log(customValue);
// console.log(fetchedJson);

// const fetchedFirstName = [];

for (const obj in fetchedJson) {
//     console.log(`${obj}: ${fetchedJson[name]}`);
    for (let i = 0; i < fetchedJson.Data.length; i++){
        //console.log(fetchedJson.Data[i]);
        // console.log(itemExists(fetchedJson.Data.keys, "name"))
        // if (itemExists(Object.keys(fetchedJson.Data), "name")){
            //

        let keys = Object.keys(fetchedJson.Data[i]);
        let values = Object.values(fetchedJson.Data[i]);
        var person = [];

        for( let i = 0; i < keys.length; i++){
            if (keys[i] === 'name' || keys[i] === 'last_name'){
                // console.log((values[i]))
                person[i] = values[i] ;
            }
        }

        console.log(person)
    }
    //}
    // fetchedFirstName[i] = name;
    // console.log(fetchedFirstName[i]);
    // i++;
    //console.log(Object.keys(fetchedJson.Data[0]))
}



var jsonData = [{person:"me", age :"30"},{person:"you",age:"25"}];

function itemExists(haystack, needle) {
    for(let i=0; i<haystack.length; i++) {
        console.log(haystack[i])
        if ((haystack[i] === needle)) return true;
    }
    return false;
}//isEqual
