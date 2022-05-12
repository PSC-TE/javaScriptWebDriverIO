var xlsx = require("xlsx")
var wb = xlsx.readFile("./testData/testSpecificData.xlsx")
// console.log(wb);
// console.log(wb.SheetNames);     //[ 'Sheet1' ]
var ws = wb.Sheets[ 'Sheet1' ]
// console.log(ws);
var data = xlsx.utils.sheet_to_json(ws)

// module.exports.data = xlsx.utils.sheet_to_json(ws)
module.exports = data

// console.log(data);
// console.log(data[0].OrganizationName);
// console.log(data[4].FirstName);