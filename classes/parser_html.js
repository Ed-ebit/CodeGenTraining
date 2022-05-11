const fs = require ('fs');
const {fileReader} = require("./fileReader");

class parserHtml {

//var test = document.getElementById("$firstName");

    static readHtml() {

//     {fs.readFile('./templates/template_html.html', "utf-8",(err, data)  => {
//         if (err) {
//             return err;
//         }
//
//         //console.log(a);
//         //return a;
//     })
// };}
        let data = fs.readFileSync('./templates/template_html.html', 'utf-8')
        // console.log(data)
        return data;
    }

    static replaceHtml(){
        const htmlPattern = `<tr>
        <td>`
        console.log(htmlPattern);
        const result = this.readHtml().replace(htmlPattern, fileReader.buildHtmlReplacement(fileReader.readFile()));
        console.log(result);
        // return result
    }
}



module.exports = {parserHtml};
