class Render {

    /**
     *
     * @param {object} entities
     * @param {string} template
     */
    constructor(entities, template, config) {
        this.entities = entities;
        this.template = template;
        this.config = config;
    }

    generate() {
        const replaceReducerGenerator
            = (entity) =>
                (prev, key) =>
                     prev.replace(key, entity[key]);

        const entityReducer = (prev, entity) => prev + Object.keys(entity)
            .reduce(replaceReducerGenerator(entity),
                this.findByMarker(this.config.startMarker,this.config.endMarker)
            );
        const returnStr = this.entities.reduce(entityReducer, '');
        let regexMarker = new RegExp(`${this.config.startMarker}.*${this.config.endMarker}`, 's')
        return this.template.replace(regexMarker, returnStr);
    }

    findByMarker(startMarker,endMarker) {
        return this.template.split(startMarker)[1].split(endMarker)[0];
    }
}

module.exports = Render;