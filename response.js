const axios = require("axios");
const convert = require('xml-js');


module.exports = {
    getHoroscope: async (type) => {
        const {data} = await axios.get(`https://ignio.com/r/export/utf/xml/daily/${type}.xml`);
        const converted = JSON.parse(convert.xml2json(data))

        return converted.elements[0].elements.reduce((acc, elem) => {
            acc[elem.name] = elem.attributes || elem.elements.reduce((a, e) => {
                a[e.name] = e.elements[0].text;
                return a;
            }, {})
            return acc;
        }, {});
    }
}
