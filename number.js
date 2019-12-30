		let randomNumber = Math.floor(Math.random() * 100) + 1;

		const guesses = document.querySelector('.guesses');
		const lastResult = document.querySelector('.lastResult');
		const lowOrHi = document.querySelector('.lowOrHi');

		const guessSubmit = document.querySelector('.guessSubmit');
		const guessField = document.querySelector('.guessField');

		let guessCount = 1;
		let resetButton;
		//Check Guess Function--------------------------------------------
		function checkGuess() {
		  let userGuess = Number(guessField.value);
		  if (guessCount === 1) {
			guesses.textContent = 'Previous guesses: ';
		  }
		  guesses.textContent += userGuess + ' ';
		 //if guessed correctly-------------------
		  if (userGuess === randomNumber) {
			lastResult.textContent = 'Congratulations! You got it right!';
			lastResult.style.backgroundColor = 'green';
			lowOrHi.textContent = '';
			setGameOver();
		// if after 10 guesses and still not get it right-----------
		  } else if (guessCount === 10) {
			lastResult.textContent = '!!!GAME OVER!!!';
			setGameOver();
		//if guess wrong---------------------------
		  } else {
			lastResult.textContent = 'Wrong!';
			lastResult.style.backgroundColor = 'red';
			if(userGuess < randomNumber) {
			  lowOrHi.textContent = 'Last guess was too low!';
			} else if(userGuess > randomNumber) {
			  lowOrHi.textContent = 'Last guess was too high!';
			}
		  }
		 //Counters------------------
		  guessCount++;
		  guessField.value = '';
		  guessField.focus();
  
		}//end checkGuess---
		//on click event
		var input = document.getElementById("guessField");
		input.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("submitButton").click();
			}
		});
		//guessSubmit.addEventListener('click', checkGuess);
		
		//Set game over function------------
		function setGameOver() {
			guessField.disabled = true;
			guessSubmit.disabled = true;
			resetButton = document.createElement('button');
			resetButton.textContent = 'Start new game?';
			document.body.appendChild(resetButton);
			resetButton.addEventListener('click', resetGame);
		
		
		}//end setGameOver---
		
		//resetGame Function-------------------------------
		function resetGame() {
			guessCount = 1;
			const resetParas = document.querySelectorAll('.resultParas p');
			for (let i = 0; i <resetParas.length; i++) {
				resetParas[i].textContent = '';

			}
			resetButton.parentNode.removeChild(resetButton);
			
			//Counters---
			guessField.disabled = false;
			guessSubmit.disabled = false;
			guessField.value ='';
			guessField.focus();
			
			lastResult.style.backgroundColor = 'white';
			
			randomNumber = Math.floor(Math.random() * 100) + 1;
		
		}//end resetGame---