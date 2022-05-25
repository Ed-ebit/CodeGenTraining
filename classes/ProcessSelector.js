const fs = require("fs");
const config = require("../Locator")


    const checkPossibleConfigs = () => {
        let availableConfigs = fs.readdirSync(`./Locator/`)
        let configList = ''
        // for (let i=0; i<availableConfigs.length; i++)
        // {
        //     configList += availableConfigs[i].split('Config.js') + ' '
        // }
        availableConfigs.forEach((config) => {
            configList += '\n' + config.split('Config.js')[0]
        })
        return configList;
    }

    const getConfig = (customValue) => {
        let possibleConfigs = checkPossibleConfigs();
        try {
            // customValue = customValue.charAt(0).toUpperCase() + customValue.slice(1);
            // if (fs.existsSync(`./Locator/${customValue}Config.js`)) {
            //     console.log(`${customValue} wird generiert`);
            //     // const config = require(`../Locator/${customValue}Config`);
            //     return config.config;
            if (0<1) {
                console.log({config:customValue})
                console.log(`${customValue} wird generiert`);
                console.log({config.customValue})
                // return {config:customValue}.config
            }
             {
                console.log(`Bitte bekanntes Argument beim Start angeben!\nbekannte Argumente: ${possibleConfigs} `);
                process.exit();
            }

        } catch {
            console.log('Zusätzliches Argument nicht erkannt/nicht vorhanden. \n' +
                'Bitte ' + possibleConfigs + '\nals Argument beim Start angeben!')
            process.exit();
        }

}

module.exports = {
    getConfig
};
