const urslMd = require("urls-md");
const fs = require("fs");

/**
 * It will fetch title from the URL and append it
 * Link will convert in below format -
 * input -   www.google.com
 * o/p   -   * [Google](www.google.com)
 */
function convertToTheMarkdown(linkToConvert) {
  urslMd(linkToConvert).then(urls => {
    let link = "* " + urls[0] + "\n";
    fs.appendFile("link.txt", link, function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });
}

var arr = [
  /**
   * Copy-Paster URLs manually OR
   * Use Copy URLs to clipboard chrome extension OR
   * Read URLs from file
   */
];

for (let i = 0; i < arr.length; i++) {
  convertToTheMarkdown(arr[i]);
}
