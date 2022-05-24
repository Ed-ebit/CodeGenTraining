const getBasePath = require("./GetBasePath");

module.exports = (filePath) => {
    try {
        return require(`${getBasePath()}${filePath}`);
    }
    catch (error) {
        console.error(error);
    }

}