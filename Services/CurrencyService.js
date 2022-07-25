const cheerio = require("cheerio");
const axios = require("axios");
const xml2js = require("xml2js");
const https = require("https");
const parser = new xml2js.Parser();
const concat = require("concat-stream");

const scrapeUrl = async (url) => {

    const httpResult = await axios.default.get(url);
    const $ = await cheerio.load(httpResult.data);

    https.get(url, function(resp) {

    resp.on('error', function(err) {
      console.log('Error while reading', err);
    });

    resp.pipe(concat(function(buffer) {
      var str = buffer.toString();
      parser.parseString(str, function(err, result) {
        console.log('Finished parsing:', result);
      });
    }));
});
}

//scrapeUrl("https://www.tcmb.gov.tr/kurlar/today.xml");