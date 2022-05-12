var xlsx = require("xlsx")
function getDataFromExcel(path, sheetName){
    var wb = xlsx.readFile(path)
    // let totalSheets = wb.SheetNames
    // console.log(totalSheets);
    let ws = wb.Sheets[sheetName];
    // console.log(ws);
    let excelData = xlsx.utils.sheet_to_json(ws)
    return excelData
}
module.exports =  getDataFromExcel
// console.log((getDataFromExcel("./testData/testSpecificData.xlsx","Sheet1"))[0].FirstName); 
// "./testData/testSpecificData.xlsx","Sheet1"