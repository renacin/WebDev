// ---------------  Grab Date Information Return Date String   -------------
// Basic Date Information
var myDate = new Date(),
day = myDate.getDate(),
month = myDate.getMonth(),
year = myDate.getFullYear();

var date_str = year + "." + (month + 1) + "." + day;
document.getElementById("parsed_Date").innerHTML = date_str;
console.log(date_str)
