/*
Saul Rincon
SDI 1507
Functions
07/20/2015
*/

//alert("hi!");




confirm("Do you want to participate in the Florida Lottery or Powerball? (Ok for Lotto, Cancel for Powerball)");



//Variables
var numPicked;
var lottery=false;

//Functions
function Start(){
	result();

}

function lotteryCheck(){

//This is section for lottery

if(lottery==true){
	numPicked=6;
	ballGenerator(1,53);//
}
//This section is for Powerball
else{
	numPicked=5;
	ballGenerator(1,59);
	var ballChosen=Math.random()*(35-1)+1;
	//ballArray[6]=Math.round(ballChosen);
	}
}

//This function will create the random number generator
function ballGenerator(min, max){

	var ballArray=[];//
	for (var i=0; i<numPicked;i++){
	
	var ballChosen=Math.random()*(max-min)+min;//This will pick a random number between min and max
	ballArray[i]=Math.round(ballChosen);//This rounds the previous random number to a whole number

}

	return ballArray;//

}


	function result(){
	lotteryCheck();
	console.log(lotteryCheck);
	
}
	
	
	





























