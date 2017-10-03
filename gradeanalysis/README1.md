How to run it?
-------------


NOTE: you need to install ng2 charts,You can install ng2-charts using npm npm install "ng2-charts --save".
Also install chart.js using "npm install angular-chart.js --save" command.


1. download the project, and go to folder gradeanalysis.
2. run "ng serve", it shows you an error that angular/compiler-cli was not properly installed. Don't panic. This is because I have not included "node_modules" folder in the project as it is 160+mb.   :D
3. run "npm install", this should solve the problem.
4. Now run "ng serve" again, this should now work generally at localhost:4200


commond issue and solution ot it
--------------------------------

Test case 1
---------------

1.created an angular-cli project with graphs in it, working fine. It includes "node modules" folder where all dependencies listed in "package.json" reside.

2.then deleted "node modules" folder, and compiled it again using "ng serve", which returned an error "@angular/compiler-cli" package was not properly installed.
so, if you find an error like above, try using step 3.

3.then tried to install _node modules_ using "npm install node-modules", but the error remains same.

4.then tried "npm install", HOLA, it worked again :D
