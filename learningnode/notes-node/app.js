console.log("starting app")
// storing the module in a variable, so all functionality will be available by using fs
const fs=require("fs")
// creates new file if it doesnt exist and appends text to it
fs.appendFile("greeting.js","welcome ",function(err){
  if(err){
    console.console.log("error occured");
  }
})

const os=require("os")
//fetching logged in user name
var user=os.userInfo()
console.log(user);
// now appending username to file

fs.appendFile("greeting.js",`to node app ${user.username }`,function(err){
  if(err){
    console.log("user not logged")
  }
})
