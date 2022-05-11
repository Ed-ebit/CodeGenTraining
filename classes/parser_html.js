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
        const result = this.readHtml().replace(htmlPattern, this.buildHtmlReplacement(fileReader.readFile()));
        return result;
    }

    static writeHtml(content){
        fs.writeFileSync('./out/htmlFiles/file.html', content)
    }
}



module.exports = {parserHtml};
