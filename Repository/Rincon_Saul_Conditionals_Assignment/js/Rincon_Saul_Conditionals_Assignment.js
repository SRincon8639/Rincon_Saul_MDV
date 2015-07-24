/*
Saul Rincon
SDI Conditional Assignment
1507
07/23/2015
*/
//alert("hi");

// Variables				//These variables will be used in determining if we go training if we buy 300 more rounds
var currentAmmo=200;
var ammoRequired=500;
var ammoToBuy=300;




//Outputs
alert("You have 200 rounds but need 500 to attend training.");//This alert will let user know the amounts of rounds he has
console.log("I currently have"+" " + currentAmmo +" "+"rounds to attend handgun training" + ".");//All the console logs below will address to the user what he needs to add to make calculation work
console.log("I need " + " "+ ammoRequired+ " "+ "rounds to attend the handgun training"+ ".");
console.log("Since I am short on ammunition, I need" +" "+ (ammoRequired-currentAmmo)+" "+ "more to meet the requirement" + ".");


confirm("Do you have the ammuniton to attend? (Ok for Yes, Cancel for No)");//This confirm is used to dictate whether you have the bullets to train or not
//var emptyString=prompt("How many rounds were bought");


if(currentAmmo>=ammoRequired){									//If 200 is greater than or equal to 500, you can attend training
	console.log("You can attend the training");
}

else{
	var emptyString=prompt("How much ammo do you need to buy?");//User input will add a number
	
		}
if(emptyString>=ammoToBuy){										//Empty string will be user input greater than or equal to 500, 
	console.log("You have enough");
}
else{
	prompt("You need to enter 300!");							//if user does not follow alert and enter different number, you will be prompt to add 300
if("">=300){
	console.log("You cant go training if you dont have enough rounds");//if user input is less than 300, you cant attend training
	}

else{
	prompt("For the last time, enter 300!");					//If user input does not want to enter 300, will be reminded again
}


}
(currentAmmo+ammoToBuy===ammoRequired)? console.log("Go to training"):console.log("Get more ammo!");//ternary will indicate whether u can go to training or not



	













