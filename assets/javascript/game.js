var goalNumber = "Undefined";
var firstNumber;
var secondNumber;
var thirdNumber;
var fourthNumber;
var gameRunning = false;
var currentNumber = 0;
var wins = 0;
var losses = 0;
var numberMatch = false;

$(document).ready(function(){

    function runGame(){
        gameRunning = true;
        currentNumber = 0;
        goalNumber = Math.floor(Math.random()*102 + 19)
        firstNumber = Math.floor(Math.random()*12 + 2)
        secondNumber = Math.floor(Math.random()*12 + 2)
        thirdNumber = Math.floor(Math.random()*12 + 2)
        fourthNumber = Math.floor(Math.random()*12 + 2)
        $('#goal-number').text(goalNumber);
    }

    // Start Button
    $('#start-button').on('click', function(){
        $('#start-button').hide("slow");
        $('#current-number').text(currentNumber);
        runGame();
    });

    // Crystal Buttons
    $('#crystal-1').on('click', function(){
        currentNumber += firstNumber;
        $('#current-number').text(currentNumber);
        gameStatus();
    })
    $('#crystal-2').on('click', function(){
        currentNumber += secondNumber;
        $('#current-number').text(currentNumber);
        gameStatus();
    })
    $('#crystal-3').on('click', function(){
        currentNumber += thirdNumber;
        $('#current-number').text(currentNumber);
        gameStatus();
    })
    $('#crystal-4').on('click', function(){
        currentNumber += fourthNumber;
        $('#current-number').text(currentNumber);
        gameStatus();
    })

    // Next Round Button
    // $('#next-round').on('click', function(){
    //     $('#next-round').hide("slow");
    //     runGame();
    //     $('#current-number').text(currentNumber);
    // })

    function gameStatus() {
		if (currentNumber === goalNumber) {
            alert("You won!");
			wins++; 
            $("#win-count").text(wins);
            gameRunning = false;
            $('#next-round').fadeIn();
            runGame();
            $('#current-number').text(currentNumber);

        } 
        
        else if (currentNumber > goalNumber) {
            alert("You lose!");
			losses++;
            $("#loss-count").html(losses);
            gameRunning = false;
            $('#next-round').fadeIn();
            runGame();
            $('#current-number').text(currentNumber);
        }
	};
    


})
