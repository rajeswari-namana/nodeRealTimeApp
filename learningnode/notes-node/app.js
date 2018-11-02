console.log("starting app")
// storing the module in a variable, so all functionality will be available by using fs
const fs=require("fs")
// creates new file if it doesnt exist and appends text to it
fs.appendFile("greeting.js","welcome",function(err){
  if(err){
    console.console.log("error occured");
  }
})

const os=require("os")
var username=os.userInfo()
console.log(username);
