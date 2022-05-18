const {startMarker, endMarker}  = require("./Marker");

class Render {

    /**
     *
     * @param {object} entities
     * @param {string} template
     */
    constructor(entities, template) {
        this.entities = entities;
        this.template = template;

    }

    generate() {
        const replaceReducerGenerator = (entity) => (prev, key) =>
            prev.replace(`##${key}##`, entity[key])

        const entityReducer = (prev, entity) => prev + Object.keys(entity)
            .reduce(
                replaceReducerGenerator(entity),
                this.findByMarker(startMarker,endMarker)
            )

        const returnStr = this.entities.reduce(entityReducer, '');
        let regex = new RegExp(`${startMarker}.*${endMarker}`, 's')
        // console.log(this.template.replace(regex, returnStr));
        return this.template.replace(regex, returnStr);
    }

    findByMarker(startMarker,endMarker) {
        // console.log(this.template.split(startMarker)[1].split(endMarker)[0])
        return this.template.split(startMarker)[1].split(endMarker)[0];
    }

}

module.exports = Render;