const fs = require ('fs');
const fse = require ('fs-extra');
const {utilities} = require("./utilities");hiop

class parserHtml {

    static readHtml() {
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
        return replacement;
    }

    static replaceHtml(){
        const regex =/<td.*<\/td>/s;
        const result = this.readHtml().replace(regex, this.buildHtmlReplacement(utilities.readJson()));
        return result;
    }

    static writeHtml(content){
        fse.outputFileSync(`./out/${utilities.setDate()}/file.html`, content)
    }
}

module.exports = {parserHtml};
