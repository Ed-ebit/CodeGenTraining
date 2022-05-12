const fs = require ('fs');
const fse = require ('fs-extra');
const {utilities} = require("./utilities");

class parserXml {

    static readXml() {

        let data = fs.readFileSync('./templates/template_xml.xml', 'utf-8')
        return data;
    }

    static buildXmlReplacement(person) {
        let replacement = ""
        for (let i = 0; i < person.length; i++)
        {
            // Formatierung XML intern, Suchpattern zum ersetzen größerer Sections
            let LAST_NAME = person[i][1];
            replacement += "<user>\n" +
                "            <name additionalLastname=\"LAST_NAME\">\n" +
                "                   "+person[i][0] + person[i][1] +
                "            </name>\n" +
                "</user>\n"
        }
        console.log(replacement);
        return replacement;
    }

    static replaceXml(){
        let xmlPattern = "###NAME###"
        const result = this.readXml().replace(xmlPattern, this.buildXmlReplacement(utilities.readJson()));
        return result;
    }

    static writeXml(content){
        fse.outputFileSync(`./out/${utilities.setDate()}/file.html`, content,{ flag: 'a+' })
    }
}



module.exports = {parserXml};
