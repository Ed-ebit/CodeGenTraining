module.exports = class HtmlEntity {

    constructor(data) {
        this['##FIRSTNAME##'] = data['FIRST_NAME'];
        this['##LASTNAME##'] = data['LAST_NAME'];
    }

}