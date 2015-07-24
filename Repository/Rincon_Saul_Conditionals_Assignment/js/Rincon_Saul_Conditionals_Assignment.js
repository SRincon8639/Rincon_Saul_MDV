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


if(currentAmmo>=ammoRequired){
	console.log("You can attend the training");
}

else{
	var emptyString=prompt("How much ammo do you need to buy?");
	
		}
if(emptyString>=ammoToBuy){
	console.log("You have enough");
}
else{
	prompt("You need to enter 300!");
if("">=300){
	console.log("You cant go training if you dont have enough rounds");
	}

else{
	prompt("For the last time, enter 300!");
}


}
(currentAmmo+ammoToBuy===ammoRequired)? console.log("Go to training"):console.log("Get more ammo!");



	













