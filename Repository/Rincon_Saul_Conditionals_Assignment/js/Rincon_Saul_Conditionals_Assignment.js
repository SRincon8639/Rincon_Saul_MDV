/*
Saul Rincon
SDI Conditional Assignment
1507
07/23/2015
*/
//alert("hi");

// Variables				
var currentAmmo=200;
var ammoRequired=500;
var ammoToBuy=300;
var noAmmoLeft=false;
//var extraAmmo=200;

//Outputs
alert("You have 200 rounds but need 500 to attend training.");
console.log("I currently have"+" " + currentAmmo +" "+"rounds to attend handgun training" + ".");
console.log("I need " + " "+ ammoRequired+ " "+ "rounds to attemd the handgun training"+ ".");
console.log("Since I am short on ammunition, I need" +" "+ (ammoRequired-currentAmmo)+" "+ "more to meet the requirement" + ".");
console.log("It is"+" " + noAmmo +" "+ "that I don't have enough ammuniton to attend training "+".");

noAmmoLeft=confirm("Do you have the ammuniton to attend? (Ok for Yes, Cancel for No)");

if(noAmmo===true){
	prompt("How many rounds do you have total?");
	console.log("200 rounds");

if(ammoToBuy<=500){
	ammoToBuy=ammoToBuy+currentAmmo;
	console.log(ammoToBuy+" "+ "rounds is the total");
}
else{
	console.log("We can now attend the training!");
	}
}
else{
	console.log(" We can attend the training due to"+" "+ extraRoundsFound+ " "+"rounds found in closet");
	var emptyString=prompt("How many rounds were found");

	if(emptyString===""){
		emptyString=prompt("Enter the rounds that were found in your closet NOW!!")
		console.log("You can train with"+" "+ emptyString+".");
	}

else{
	emptyString=Number("500");
	console.log("Finally, lets go training with"+" "+ emptyString+".");
	}
}



	



