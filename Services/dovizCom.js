const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const Doviz = require("../Models/dovizcom");

const scrapeDoviz = async (url, type) => {
        const httpResult = await axios.default.get(url);
        const $ = await cheerio.load(httpResult.data);
        let result = await $(".value")[type].children[0].data;
        let resultFinal = result.replace(",",".");
        return resultFinal;
        //let slicedResult = resultFinal.substring(0, resultFinal.length - 2);
        //slicedResult = parseFloat(slicedResult);
        return slicedResult;
}

//scrapeDoviz("https://www.doviz.com/",2);
/*
const run = async () => {
    const altin = await scrapeDoviz("https://www.doviz.com/",0);
    const dolar = await scrapeDoviz("https://www.doviz.com/",1);
    const euro = await scrapeDoviz("https://www.doviz.com/",2);
    const sterlin = await scrapeDoviz("https://www.doviz.com/",3);
    //const bitcoin = await scrapeDoviz("https://www.doviz.com/",5);
    //console.log("sterlin : ", sterlin);
    const prices = new Doviz({
        _id: mongoose.Types.ObjectId(),
        altin,dolar,euro,sterlin
    });
    prices.save();
    return;
}
*/
//module.exports = run;

const run = async () => {
    const altin = await scrapeDoviz("https://www.doviz.com/",0);
    const dolar = await scrapeDoviz("https://www.doviz.com/",1);
    const euro = await scrapeDoviz("https://www.doviz.com/",2);
    const sterlin = await scrapeDoviz("https://www.doviz.com/",3);
    //const bitcoin = await scrapeDoviz("https://www.doviz.com/",5);
    console.log("-------------------");
    console.log("sterlin : ", sterlin);
    console.log("dolar : ", dolar);
    console.log("euro : ", euro);
    
    await Doviz.findByIdAndUpdate({_id : "62d6a373adf35c42cbc4c3bc"},{altin,dolar,euro,sterlin});
    return;
}

exports.run = run;
