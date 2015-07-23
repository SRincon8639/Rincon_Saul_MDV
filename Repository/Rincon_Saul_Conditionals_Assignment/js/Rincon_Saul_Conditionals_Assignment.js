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
var noAmmo=false;			//Boolean



//Outputs
alert("You have 200 rounds but need 500 to attend training.");//This alert will let user know the amounts of rounds he has
console.log("I currently have"+" " + currentAmmo +" "+"rounds to attend handgun training" + ".");//All the console logs below will address to the user what he needs to add to make calculation work
console.log("I need " + " "+ ammoRequired+ " "+ "rounds to attend the handgun training"+ ".");
console.log("Since I am short on ammunition, I need" +" "+ (ammoRequired-currentAmmo)+" "+ "more to meet the requirement" + ".");
console.log("It is"+" " + noAmmo +" "+ "that I don't have enough ammuniton to attend training "+".");

noAmmoLeft=confirm("Do you have the ammuniton to attend? (Ok for Yes, Cancel for No)");//This confirm is used to dictate whether you have the bullets to train or not

if(noAmmo===false){
	prompt("How many rounds do you have total?");
	

if(ammoRequired===500){
	console.log("Lets go shoot!");
}
else if(ammoRequired>500){
	console.log("You cant train");

}
else {
	console.log("We can now attend the training!");
	}
}
else {
	console.log(" We can attend the training due to"+" "+ ammoToBuy+ " "+"extra rounds bought");
	//var emptyString=prompt("How many rounds were bought");


	if(emptyString===""){
		emptyString=prompt("Enter the rounds that were bought NOW!!")
		

		if(""<500){
			console.log("You cant train if you dont have the rounds");
		}
	}

else{
	emptyString=("");
	console.log("Finally, lets go training with"+" "+ emptyString+" "+"rounds"+".");
	}
}



	



