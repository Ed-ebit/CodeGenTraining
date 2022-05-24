const GeneralUtility = require("./GeneralUtility");

module.exports = class DataProcessor {

    startMarker = '##CUSTOMER_START##';
    endMarker   = '##CUSTOMER_END##';

    ModelInstance = null;
    Type = '';

    getEntities(jsonData) {
        return jsonData.data.map((data) => new this.ModelInstance(data))
    }

    render(entities) {
        const type = this.Type.toLowerCase();
        const template = GeneralUtility.getTemplateFile(`/config/${type}/out.${type}`)

        const templatePartial = DataProcessor.findPartialContent({
            startMarker: this.startMarker,
            endMarker: this.endMarker,
            template,
        })

        return template.replace(
            new RegExp(`${this.startMarker}.*${this.endMarker}`, 's'),
            this.replacePartialWithEntities({
                partial: templatePartial,
                entities,
            }).join('')
        );

    }


    replacePartialWithEntities({ partial, entities }) {
        return entities.map(entity => {
            let content = partial;
            Object.keys(entity).forEach(key => {
                content = content.replaceAll(key, entity[key]);
            })
            return content;
        });
    }

    getOutputPath() {
        const currentDate = new Date();
        const folderName = currentDate.getFullYear() + "_" + (currentDate.getMonth() + 1) + "_" + currentDate.getDate();

        return `${GeneralUtility.getBasePath()}out/${folderName}/file.${this.Type.toLowerCase()}`;
    }

    static findPartialContent({ template, startMarker, endMarker }) {
        return template.split(startMarker)[1].split(endMarker)[0];
    }

}