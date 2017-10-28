var dateInMillSec = function(){
  var date = new Date();
  var msdate = (date).toISOString().substring(0, 10)+" "+date.toString().split(" ")[4]+"."+date.getMilliseconds();
  return msdate;
}
var dateInSec = function(){
  var date = new Date();
  var secdate = (date).toISOString().substring(0, 10)+" "+date.toString().split(" ")[4];
  return secdate;
}
module.exports = {
	dateMs: dateInMillSec,
	dateSec : dateInSec
}