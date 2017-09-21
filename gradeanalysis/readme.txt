commond issue and solution ot it
--------------------------------

Test case 1
---------------

1.created an angular-cli project with graphs in it, working fine. It includes "node modules" folder where all dependencies listed in "package.json" reside.

2.then deleted "node modules" folder, and compiled it again using "ng serve", which returned an error "@angular/compiler-cli" package was not properly installed.
so, if you find an error like above, try using step 3.

3.then tried to install _node modules_ using "npm install node-modules", but the error remains same.

4.then tried "npm install", HOLA, it worked again :D
