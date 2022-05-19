const {startMarker, endMarker}  = require("../Locator/Marker");

class Render {

    /**
     *
     * @param {object} entities
     * @param {string} template
     * @param {string} keyPrefix
     * @param {string} keySuffix
     */
    constructor(entities, template,keyPrefix,keySuffix) {
        this.entities = entities;
        this.template = template;
        this.keyPrefix = keyPrefix;
        this.keySuffix = keySuffix;

    }

    generate() {
        const replaceReducerGenerator = (entity) => (prev, key) =>
            prev.replace(`${this.keyPrefix}${key}${this.keySuffix}`, entity[key])

        const entityReducer = (prev, entity) => prev + Object.keys(entity)
            .reduce(
                replaceReducerGenerator(entity),
                this.findByMarker(startMarker,endMarker)
            )

        const returnStr = this.entities.reduce(entityReducer, '');
        // console.log(this.entities.reduce(entityReducer, ''))
        let regexMarker = new RegExp(`${startMarker}.*${endMarker}`, 's')
        return this.template.replace(regexMarker, returnStr);
    }

    findByMarker(startMarker,endMarker) {
        // console.log(this.template.split(startMarker)[1].split(endMarker)[0])
        return this.template.split(startMarker)[1].split(endMarker)[0];
    }

}

module.exports = Render;