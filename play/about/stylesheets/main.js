var numSquares = 6;
var colors = generateRandomColors(numSquares);
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var imageA = document.getElementsByClassName("imagesA");
var imageB = document.getElementsByClassName("imagesB");
var imageC = document.getElementsByClassName("imagesC");
var imageD = document.getElementsByClassName("imagesD");
var imageE = document.getElementsByClassName("imagesE");
var blocks = document.querySelector("#container");
var count = 0;

messageDisplay.textContent = "Pick the color that matches the code above."
colorDisplay.textContent = pickedColor;


document.addEventListener("click", function() {
		count++;
});


for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			// changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
			blocks.classList.add("display-off");
			blocks.classList.remove("display-on");
			
			if(count <= 1) {
				openRandomImageA();
			} else if(count === 2) {
				openRandomImageB();
			} else if(count === 3) {
				openRandomImageC();
			} else if(count === 4) {
				openRandomImageD();
			} else if(count >= 5) {
				openRandomImageE();
			}
			count = 0;

			
			resetButton.addEventListener("click", function() {
				colors = generateRandomColors(numSquares);
				pickedColor = pickColor();
				messageDisplay.textContent= "Pick the color that matches the code above.";
				colorDisplay.textContent = pickedColor;
				for(var i = 0; i < squares.length; i++) {
					squares[i].style.background = colors[i];
				}
				h1.style.background = "steelblue";
				closeRandomImageA();
				closeRandomImageB();
				closeRandomImageC();
				closeRandomImageD();
				closeRandomImageE();
			});
			
		} else {
			messageDisplay.textContent = "Keep trying, select a different color...";
			this.style.background = "#232323";
		}
	});
}



easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

});

resetButton.addEventListener("click", function() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	messageDisplay.textContent= "Pick the color that matches the code above.";
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	closeRandomImageA();
	closeRandomImageB();
	closeRandomImageC();
	closeRandomImageD();
	closeRandomImageE();
	blocks.classList.add("display-on");
	blocks.classList.remove("display-off");
	count = 0;
});


function changeColors(col) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = col;
	}
}


function pickColor() {
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for(var i = 0; i < num; i++) { 
	arr.push(randomColor());
	}
	return arr;
}


function randomColor() {
var r = Math.floor(Math.random() * 256);	
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";

}

function openRandomImageA() {
	for (var i = 0; i < imageA.length; i++) {
		if(imageA[i].classList.contains('display-on')) {
			var skip = i;
			imageA[i].classList.remove("display-on");
			imageA[i].classList.add("display-off");
		}
	}
	
		var randomNumber = skip;
		
		while(randomNumber === skip) {
	        randomNumber = Math.floor(Math.random() * imageA.length);
		}
	    	imageA[randomNumber].classList.remove('display-off');
	    	imageA[randomNumber].classList.add('display-on');	
}

function openRandomImageB() {
	for (var i = 0; i < imageB.length; i++) {
		if(imageB[i].classList.contains('display-on')) {
			var skip = i;
			imageB[i].classList.remove("display-on");
			imageB[i].classList.add("display-off");
		}
	}
	
		var randomNumber = skip;
		
		while(randomNumber === skip) {
	        randomNumber = Math.floor(Math.random() * imageB.length);
		}
	    	imageB[randomNumber].classList.remove('display-off');
	    	imageB[randomNumber].classList.add('display-on');	
}

function openRandomImageC() {
	for (var i = 0; i < imageC.length; i++) {
		if(imageC[i].classList.contains('display-on')) {
			var skip = i;
			imageC[i].classList.remove("display-on");
			imageC[i].classList.add("display-off");
		}
	}
	
		var randomNumber = skip;
		
		while(randomNumber === skip) {
	        randomNumber = Math.floor(Math.random() * imageC.length);
		}
	    	imageC[randomNumber].classList.remove('display-off');
	    	imageC[randomNumber].classList.add('display-on');	
}

function openRandomImageD() {
	for (var i = 0; i < imageD.length; i++) {
		if(imageD[i].classList.contains('display-on')) {
			var skip = i;
			imageD[i].classList.remove("display-on");
			imageD[i].classList.add("display-off");
		}
	}
	
		var randomNumber = skip;
		
		while(randomNumber === skip) {
	        randomNumber = Math.floor(Math.random() * imageD.length);
		}
	    	imageD[randomNumber].classList.remove('display-off');
	    	imageD[randomNumber].classList.add('display-on');	
}

function openRandomImageE() {
	for (var i = 0; i < imageE.length; i++) {
		if(imageE[i].classList.contains('display-on')) {
			var skip = i;
			imageE[i].classList.remove("display-on");
			imageE[i].classList.add("display-off");
		}
	}
	
		var randomNumber = skip;
		
		while(randomNumber === skip) {
	        randomNumber = Math.floor(Math.random() * imageE.length);
		}
	    	imageE[randomNumber].classList.remove('display-off');
	    	imageE[randomNumber].classList.add('display-on');	
}




function closeRandomImageA() {
	for (var i = 0; i < imageA.length; i++) {
		if(imageA[i].classList.contains('display-on')) {
			imageA[i].classList.remove("display-on");
			imageA[i].classList.add("display-off");
		}
	}
	
		for (var i = 0; i < blocks.length; i++) {
		if(blocks[i].classList.contains('display-off')) {
			blocks[i].classList.remove("display-off");
			blocks[i].classList.add("display-on");
		}
	}
}

function closeRandomImageB() {
	for (var i = 0; i < imageB.length; i++) {
		if(imageB[i].classList.contains('display-on')) {
			imageB[i].classList.remove("display-on");
			imageB[i].classList.add("display-off");
		}
	}
	
		for (var i = 0; i < blocks.length; i++) {
		if(blocks[i].classList.contains('display-off')) {
			blocks[i].classList.remove("display-off");
			blocks[i].classList.add("display-on");
		}
	}
}

function closeRandomImageC() {
	for (var i = 0; i < imageC.length; i++) {
		if(imageC[i].classList.contains('display-on')) {
			imageC[i].classList.remove("display-on");
			imageC[i].classList.add("display-off");
		}
	}
	
		for (var i = 0; i < blocks.length; i++) {
		if(blocks[i].classList.contains('display-off')) {
			blocks[i].classList.remove("display-off");
			blocks[i].classList.add("display-on");
		}
	}
}


function closeRandomImageD() {
	for (var i = 0; i < imageD.length; i++) {
		if(imageD[i].classList.contains('display-on')) {
			imageD[i].classList.remove("display-on");
			imageD[i].classList.add("display-off");
		}
	}
	
		for (var i = 0; i < blocks.length; i++) {
		if(blocks[i].classList.contains('display-off')) {
			blocks[i].classList.remove("display-off");
			blocks[i].classList.add("display-on");
		}
	}
}


function closeRandomImageE() {
	for (var i = 0; i < imageE.length; i++) {
		if(imageE[i].classList.contains('display-on')) {
			imageE[i].classList.remove("display-on");
			imageE[i].classList.add("display-off");
		}
	}
	
		for (var i = 0; i < blocks.length; i++) {
		if(blocks[i].classList.contains('display-off')) {
			blocks[i].classList.remove("display-off");
			blocks[i].classList.add("display-on");
		}
	}
}

