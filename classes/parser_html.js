const fs = require ('fs');
const fse = require ('fs-extra');
const {utilities} = require("./utilities");

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

    static buildHtmlReplacement(person) {
        let replacement = ""
        for (let i = 0; i < person.length; i++)
        {
            replacement += "<tr>\n" +
                "            <td>" + person[i][0] + "</td>\n" +
                "            <td>" + person[i][1] + "</td>\n" +
                "        </tr>\n"
        }
        //console.log(replacement);
        return replacement;
    }

    static replaceHtml(){

        //Suchpattern, um Tags, newlines etc. zu inkludieren und damit größeren Teil des Dokuments zu ersetzen
        let htmlPattern = "$firstName, $lastName"
        const result = this.readHtml().replace(htmlPattern, this.buildHtmlReplacement(utilities.readJson()));
        return result;
    }

    static writeHtml(content){
        fse.outputFileSync(`./out/${utilities.setDate()}/file.html`, content)
    }
}



module.exports = {parserHtml};
