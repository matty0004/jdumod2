var sdb = require('../Platforms/jd2017-pc/songdbs.json');
var ahud = require('./chunk.json');
var bhud = Object.keys(ahud);
var ghud = require('./gdrive_chunk.json');
var nohud = bhud.concat(ghud);

var missingElements = [];

for (var key in sdb) {
  if (sdb.hasOwnProperty(key)) {
    if (nohud.indexOf(key) === -1) {
      missingElements.push(key);
    }
  }
}

console.log(JSON.stringify(missingElements));
