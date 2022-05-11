const fs = require ('fs');
const {fileReader} = require("./fileReader");

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
        const result = this.readXml().replace(xmlPattern, this.buildXmlReplacement(fileReader.readFile()));
        return result;
    }

    static writeXml(content){
        fs.writeFileSync('./out/xmlFiles/file.xml', content,{ flag: 'a+' })
    }
}



module.exports = {parserXml};
