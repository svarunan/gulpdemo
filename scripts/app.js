// a test npm module to check
var md5 = require('md5');

// import your custom files 
var helper = require('./helper.js');

// my framework function
//	myClient function name will be use as a reference function after bundling
var Client = window.myClient = function(){};

// test for gulp replace
var version = "1.0.10";

Client.prototype.md5Converter = function(text){
	var md5Text = md5(text);
	document.write(helper.dateMs() + " :: md5 of " + text + " is "+md5Text + "<br>");
	document.write("version: "+version);
}
// module.exports = Client;