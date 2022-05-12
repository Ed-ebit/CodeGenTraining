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
            replacement +=
                "   <name additionalLastname="+person[i][1]+"\>\n" +
                "       "+person[i][0] +" " + person[i][1] +"\n" +
                "   </name>\n"
        }
        //console.log(replacement);
        return replacement;
    }

    static replaceXml(){
        let xmlPattern = /<name.*<\/name>/s;
        // /<name additionalLastname=\"LAST_NAME\"\n###NAME###\n<\/name>/g;
        const result = this.readXml().replace(xmlPattern, this.buildXmlReplacement(utilities.readJson()));
        console.log(result)
        return result;
    }

    static writeXml(content){
        fse.outputFileSync(`./out/${utilities.setDate()}/file.xml`, content)
    }
}



module.exports = {parserXml};
