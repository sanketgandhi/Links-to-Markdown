const urslMd = require("urls-md");
const fs = require("fs");

function convertToTheMarkdown(linkToConvert) {
  urslMd(linkToConvert).then(urls => {
    // console.log(urls);

    let link = "* " + urls[0] + "\n";

    // console.log(link);

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
