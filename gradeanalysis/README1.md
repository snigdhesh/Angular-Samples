## How to run the project?
###### Note
- You need to install `ng2 charts`, you can install ng2-charts using npm.
> **command:** `npm install ng2-charts --save`.
- Also install `chart.js` using `npm install angular-chart.js --save` command.


1. Download the project, and go to **gradeanalysis** folder.

2. Run `ng serve`, it shows you an error that **angular/compiler-cli** was not properly installed. Don't panic. This is because I have not included "node_modules" folder in the project as it is 160+ mb in size.

3. Run `npm install`, this should solve the above problem.

4. Now run `ng serve` again, this should now work generally at **localhost:4200**.


## What did I do behind the scenes?

### Test case 1

- Created an angular-cli project with charts in it, it's working fine. 
It includes **node modules** folder, where all dependencies listed in **package.json** file reside.

- Then deleted **node modules** folder, and compiled it again using `ng serve`, which returned an error **@angular/compiler-cli** package was not properly installed.

- Then tried to install **node modules** using `npm install node-modules`, but the error remains same.

- Then tried `npm install`, HOLA, it worked again!!!
