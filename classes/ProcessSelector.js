const fs = require("fs");

class ProcessSelector {

    static chooseProcess(customValue) {
        try {
            customValue = customValue.charAt(0).toUpperCase() + customValue.slice(1);
            if (fs.existsSync(`./Locator/${customValue}Config.js`)) {
                console.log(`${customValue} wird generiert`);
                const config = require(`../Locator/${customValue}Config`);
                return config.config;
            } else {
                console.log('Bitte bekanntes Argument("xml", "html" oder "csv") beim Start angeben!');
                process.exit();
            }
        } catch {
            console.log('Zusätzliches Argument nicht erkannt/nicht vorhanden. \n' +
                'Bitte "xml", "html" oder "csv" als Argument beim Start angeben!')
            process.exit();
        }

    }

}

module.exports = ProcessSelector;
