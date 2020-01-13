/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

var markHeight = 1.75;
var markMass = 88;
var markBmi = markMass / (markHeight * markHeight);

var johnHeight = 1.93;
var johnMass = 90;
var johnBmi = johnMass / (johnHeight * johnHeight);
var markJohnBmi = markBmi > johnBmi;
console.log(johnBmi, markBmi);

console.log("Is Marks BMI higher than Johns? " + markJohnBmi);

// If Else Statments

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
	console.log(firstName + " married!");
} else {
	console.log(firstName + " will be married soon");
}

var firstName = "John";
var age = 57;

if (age < 13) {
	console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
	console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
	console.log(firstName + " is a young man");
} else {
	console.log(firstName + " is a man");
}

// Ternary Operators

var firstName = "John";
var age = 22;

age >= 18
	? console.log(firstName + " drinks beer.")
	: console.log(firstName + " drinks juice.");

// OR

var drinks = age >= 18 ? "beer" : "juice";
console.log(drinks);

// SWITCH STATMENT

var job = "cop";
switch (job) {
	case "teacher":
	case " Instucter":
		console.log(firstName + " teaches kids how to code");
		break;
	case "driver":
		console.log(firstName + " drives a cab");
		break;
	case "designer":
		console.log(firstName + " makes great webpages");
		break;
	default:
		console.log(firstName + " is a great guy");
}

var age = 1;
switch (true) {
	case age < 2:
		console.log("is an infant");
		break;
	case age > 2 && age < 10:
		console.log("is a young person");
		break;
	case age >= 10 && age < 20:
		console.log(" getting there");
		break;
	default:
		console.log("getting older");
}

/***************************************************
 * Truthy and Falsy values and equality operators
 */

// falsy values are : undefined, null, 0, " ", NaN

var height;

if (height) {
	// decomes false because it is not defind
	console.log("Var is defind");
} else {
	console.log("Var NOT defind");
}

var height;
height = 20;
if (height) {
	// decomes True
	console.log("Var is defind");
} else {
	console.log("Var NOT defind");
}

var height;
height = 0;
if (height) {
	// it is defind but with a falsy so become NOT defind
	console.log("Var is defind");
} else {
	console.log("Var NOT defind");
}

var height;
height = 0;
if (height || height === 0) {
	// is true because we use ||(or)
	console.log("Var is defind");
} else {
	console.log("Var NOT defind");
}

//Equality Operators ==(Non strict) does type coercion
// (Converts to what it need to be): ie
var height = 23; //number
if (height == "23") {
	//checking to see are they the same
	console.log("The == operator does type coercion");
}

var height = 23; //number
if (height === "23") {
	//checking to see are they the same
	console.log("The == operator does type coercion");
} else {
	console.log(
		"Becomes False because === is a strick operator and have to be the same"
	);
}

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, 
John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. 
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

var johnAve = (89 + 120 + 103) / 3;
var markAve = (116 + 94 + 123) / 3;
var marryAve = (97 + 134 + 105) / 3;
console.log(johnAve, markAve, marryAve);

if (johnAve > markAve && marryAve) {
	console.log("Johns Team Wins");
} else if (marryAve > markAve && johnAve) {
	console.log("Marrys Team Wins");
} else if (markAve > marryAve && johnAve) {
	console.log("Marks Team Wins");
} else {
	console.log("its a 3 way draw");
}

/*********************************************************
 * FUCTIONS
 */

function calculatAge(birthYear) {
	return 2020 - birthYear;
	//      Name     Argument
}
var ageJohn = calculatAge(1990);
//            call function(argument)
var ageMark = calculatAge(1948);
var ageMarry = calculatAge(1969);
console.log(ageJohn, ageMarry, ageMark);

function yearsUntinRetirement(year, firstName) {
	var age = calculatAge(year);
	var retirement = 65 - age;
	if (retirement < 0) {
		console.log(firstName + " Has already retired");
	} else {
		console.log(firstName + " retires in " + retirement + " years");
	}
}
yearsUntinRetirement(1990, "John");
yearsUntinRetirement(1948, "Mark");
yearsUntinRetirement(1969, "Marry");

/*************************************************
 * Funstions Statements and Expressions
 */

// Function declaration
//function whatDoYouDo(job, firstName) {

// Function Expression
var whatDoYouDo = function(job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + " teachers kids how to code";
		case "driver":
			return firstName + " Drives a cab";
		case "designer":
			return firstName + " Designes web cites";
		default:
			return firstName + " Does something else";
	}
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Clint"));
console.log(whatDoYouDo("driver", "Marry"));
//Fuction Expression always has a result!
//Fuction statment dont give an emeedit value
//ie if(true) console.log
// => undefined

/***********************************************
 * ARRAYS
 */
//Initialize new array
//             0       1        2        3
var names = ["John", "Mark", "Brett", "Clint"];
var years = new Array(1990, 1969, 1948, 1975);
console.log(names); // all names
console.log(names.length);
console.log(names[3]); // Only a given name in the array =>"Clint"

// Mutate array data
names[0] = "Jack"; // changes the [0] name to new name
names[names.length] = "Sinead"; //add name to the end off arrays lenth
console.log(names);

//Different data types
var clint = ["Clint", "Davis", 1975, "Designer", true];
clint.push("Blue"); // add to end
clint.unshift("Mr"); //add to begining
console.log(clint);

clint.pop(); //Takes the last one away
clint.shift(); //Takes the first one away
console.log(clint);

console.log(clint.indexOf(1975)); //Asks in witch possion is 1975
// If we get a -1 there there is a problem

var isDesigner =
	clint.indexOf("teacher") === -1
		? "Clint is NOT a Teacher"
		: "Clint IS a designer";
console.log(isDesigner);

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. 
The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 
10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/
/********************CLINTS GO 
var totalTips = [];
var totalBills = [];
function tipCalclator(bill) {
    if (bill < 50) {
        totalTips.push(bill * 0.2);
    } else if (bill > 50 && bill < 200) {
        totalTips.push(bill * 0.15);
    } else {
        totalTips.push(bill * 0.1);
    }
}
totalBills.unshift(124 + 18.59);
totalBills.push(48 + 9.6);
totalBills.push(268 + 26.8);

tipCalclator(124);
tipCalclator(48);
tipCalclator(268);
console.log(totalTips);
console.log(totalBills); */

function tipCalculator(bill) {
	var percentage;
	if (bill < 50) {
		percentage = 0.2;
	} else if (bill >= 50 && bill < 200) {
		percentage = 0.15;
	} else {
		percentage = 0.1;
	}
	return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [
	tipCalculator(bills[0]),
	tipCalculator(bills[1]),
	tipCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, finalValues);

/***************************************************
 * OBJECTS AND PROPERTIES
 *  var name = {}; or var name = new object();
 *  Key: Value,
 */
// Object litural syntex
var clint = {
	firstName: "Clint",
	lastName: "Davis",
	birthYear: 1975,
	family: ["Sinead", "Kitty"],
	job: "Disigner",
	isMarried: true
};
console.log(clint.firstName);
console.log(clint["job"]);
var x = "birthYear";
console.log(clint[x]);

/***************************
 * Mutate
 */
clint.job = "teacher";
clint["firstName"] = "Clinton";
console.log(clint);

// New Object syntes
var sinead = new Object();
sinead.firstName = "sinead";
sinead.lastName = "Davis";
sinead.birthYear = 1985;
sinead[job] = "Nerse";
console.log(sinead);

/***************************************************8
 * Objects and Methods
 */

var clint = {
	firstName: "Clint",
	lastName: "Davis",
	birthYear: 1975,
	family: ["Sinead", "Kitty"],
	job: "Disigner",
	isMarried: true,
	calcAge: function(birthYear) {
		this.age = 2018 - this.birthYear;
	}
};
clint.calcAge();
console.log(clint);

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their 
	full name, mass, and height
2. Then, add a method to each object to calculate the BMI. 
	Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
	together with the full name and the respective BMI.
Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).
GOOD LUCK 😀
*/

var john = {
	firstName: "John",
	height: 200,
	mass: 78,
	calclateBmi: function(bmi) {
		this.bmi = (this.height * height) / this.mass;
	}
};

var mark = {
	firstName: "Mark",
	height: 200,
	mass: 78,
	calclateBmi: function(bmi) {
		this.bmi = (this.height * height) / this.mass;
	}
};
john.calclateBmi();
mark.calclateBmi();
console.log(john);

if (john.bmi > mark.bmi) {
	console.log(john.firstName + " has the hightest BMI of " + john.bmi);
} else if (mark.bmi > john.bmi) {
	console.log(mark.firstName + " has the hightest BMI of " + mark.bmi);
} else {
	console.log(
		"They both have the same BMI's" +
			" " +
			john.firstName +
			" " +
			john.bmi +
			" " +
			" " +
			mark.firstName +
			" " +
			mark.bmi
	);
}
