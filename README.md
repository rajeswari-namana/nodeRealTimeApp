# nodeRealTimeApp
Learning node through building app from scratch.

checking for node version, type in cmd:   
### node -v

opens node cmd prompt:

### node

both node and chrome browser run on chromes v8 javascript engine - so u can type same command in node cmd prompt and browser console, console.log("something") which is compiled to machine code and executed. v8 engine is very fast in compiling to machine cose and that makes node very fast.

but both are different node has features like files system manipulations and browser has features like manipulating what shown inside of window.

window is global object in browser which stores everything we have access to. type window in browser console and see. And every variable you create lives inside of window.

in node we have something similar called global.

inside browser we also have access to document which stores reference to dom which displays whats inside the browser, to which we can make changes to reflect in the page.

inside node we have process. to exit it process.exit(0) which means exiting with 0 errors.

node is javascript run time that uses v8 engine. what is v8 engine? open source js engine written in C++ that takes js code and compiles to machine code. it is used inside node js and inside the chrome browser.

run app: node filename.js

---------------
modules: units of functionality.

using require:

1) loading modules that come bundled with node.js eg: http, filesystem fs modules (these are built in no need to install in the terminal)

2) loading 3rd party libraries. eg: express, sequelize etc which help us to write less code.

3) to load our own files, since we break up our huge apps into pieces.

---------------

list of all built in node modules:
https://nodejs.org/api/index.html








