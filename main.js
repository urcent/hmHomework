Main = {};
Main.WordArray = [];
Main.WordUArray = [];
Main.Lives = 4;

Main.NumberInWordbank = 10; // including zero

Main.Word = "darryl"; //testing only

Main.WordU = ""; // instantiate underlined word

Main.PullWord = function(){
	Main.Word = Words.List[(Math.floor(Math.random() * Main.NumberInWordbank))];
}

Main.SetUnderline = function(){
	Main.PullWord();
	for(i=0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		Main.WordUArray[i] = "_";
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("word").innerHTML = Main.WordU;
	document.getElementById("Letters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
	Main.Changes = 0;
	for(i=0; i < Main.Word.length; i++){
		Main.WordArray[i] = Main.Word.charAt(i);
		if(Main.Word.charAt(i) == letter){
		Main.WordUArray[i] = letter;
		Main.Changes += 1;
		}
	}
	if(Main.Changes < 1){
		Main.Lives -= 1;
		document.getElementById("lives").innerHTML = Main.Lives;
	}
	Main.WordU = Main.WordUArray.join("");
	document.getElementById("word").innerHTML = Main.WordU;
	
	Main.Word1 = Main.WordArray.join("");
	Main.Word2 = Main.WordUArray.join("");
	
	if(Main.Lives < 1){
		document.getElementById("word").innerHTML = Main.Word1;
		alert("Sorry you lose, Time to Reset!");
		window.location.reload();
		
	}
	if(Main.Word1 === Main.Word2){
		alert("You Won! Time to Reset For A New Game!");
		window.location.reload();
	}
}

Main.PullWord();

Main.SetUnderline();