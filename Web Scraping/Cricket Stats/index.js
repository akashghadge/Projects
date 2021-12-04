const request = require("request");
const cheerio = require('cheerio');

const URL = "https://www.espncricinfo.com/player/rohit-sharma-34102";

function extractHTML(html) {
    const $ = cheerio.load(html);
    let tableData = $("tr > td")
    let tableHead = $(".standings-widget-table.table thead th");
    let stats = {
        batting: {},
        bowling: {}
    }
    let flag = false;
    let dataSpace = 0;
    Array.from(tableHead).forEach((th) => {
        let curr_th = $(th).text().toString();
        dataSpace++;
        if (curr_th == 'Format') {
            flag = !flag;
        }
        else {
            if (flag)
                stats.batting[curr_th] = "";
            else
                stats.bowling[curr_th] = "";
        }
    })

    Array.from(tableData).forEach((td, i) => {
        let curr_td = $(td).text();
        console.log(curr_td);
        if (i % (dataSpace / 2) == 0)
            console.log("seprator---------------------------------");
    })
    // console.log(stats);
}

function callback(err, response, html) {
    if (err)
        console.log(err);
    else
        extractHTML(html);
}
request(URL, callback);
