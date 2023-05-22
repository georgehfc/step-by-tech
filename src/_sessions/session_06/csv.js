var fs = require("fs");

function csvHandler(req, res) {
  fs.readFile('people.csv', function (err, data) {
    if (err) {
      return console.log(err);
    }

    //Convert and store csv information into a buffer.
    bufferString = data.toString();

    lorem_ipsum = bufferString.split('\n');

    const jsonObj = [];
    const headers = lorem_ipsum[0].split(',');

    for(let i = 1; i < lorem_ipsum.length; i++) {
      let data = lorem_ipsum[i].split(',');
      let obj = {};

      for(let j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }

      jsonObj.push(obj);
    }

    JSON.stringify(jsonObj);
  });
}
