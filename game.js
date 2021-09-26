
//Creating variables ----
let letters = ["f","k","d","j"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;
//-----------------------------------------------------

//Creating functions ----
function playSound(colour) {

    let sound = new Audio("sounds/"+ colour +".mp3");
    sound.play();
}
function animatePress(currentLetter) {

    $("#"+ currentLetter).addClass("pressed");
    setTimeout(function() {
        $("#"+ currentLetter).removeClass("pressed");
    }, 100);
}
//-----------------------------------------------------

//Starting the game ----
$(document).on("keydown", function() {
    if (started == false) {
        nextSequence();
    }
    started = true;
});    
//-----------------------------------------------------

//Detecting key presses ----
$(document).on("keydown", function(event) {
    
    if (started == true) {

        let letter = event.key;

        switch (letter) {
            case "q":
                userClickedPattern.push("q");
                animatePress("q");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
    
            case "w":
                userClickedPattern.push("w");
                animatePress("w");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;

            case "e":
                userClickedPattern.push("e");
                animatePress("e");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
        
            case "r":
                userClickedPattern.push("r");
                animatePress("r");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
            
            case "t":
                userClickedPattern.push("t");
                animatePress("t");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                checkAnswer();
                }
                break;
        
            case "y":
                userClickedPattern.push("y");
                animatePress("y");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
    
            case "u":
                userClickedPattern.push("u");
                animatePress("u");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
            
            case "i":
                userClickedPattern.push("i");
                animatePress("i");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;

            case "o":
                userClickedPattern.push("o");
                animatePress("o");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
            
            case "p":
                userClickedPattern.push("p");
                animatePress("p");
                playSound("red");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                    break;
        
            case "a":
                userClickedPattern.push("a");
                animatePress("a");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                
            case "s":
                userClickedPattern.push("s");
                animatePress("s");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;

            case "d":
                userClickedPattern.push("d");
                animatePress("d");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                
            case "f":
                userClickedPattern.push("f");
                animatePress("f");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
            
            case "h":
                userClickedPattern.push("h");
                animatePress("h");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                    
            case "j":
                userClickedPattern.push("j");
                animatePress("j");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                        
            case "k":
                userClickedPattern.push("k");
                animatePress("k");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                    
            case "l":
                userClickedPattern.push("l");
                animatePress("l");
                playSound("green");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                
            case "z":
                userClickedPattern.push("z");
                animatePress("z");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                        
            case "x":
                userClickedPattern.push("x");
                animatePress("x");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
            
            case "c":
                userClickedPattern.push("c");
                animatePress("c");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                        
            case "v":
                userClickedPattern.push("v");
                animatePress("v");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                    
                case "b":
                userClickedPattern.push("b");
                animatePress("b");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                            
            case "n":
                userClickedPattern.push("n");
                animatePress("n");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;

            case "m":
                userClickedPattern.push("m");
                animatePress("m");
                playSound("blue");
                if (userClickedPattern.length === gamePattern.length) {
                    checkAnswer();
                }
                break;
                    
            default:
                //alert(letter);
                break;
        }
    }
});
//-----------------------------------------------------

//Adding the next letter to the game pattern ----
function nextSequence() {

    userClickedPattern = [];

    level++;
    $("#level-title").text("level " + level);

    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenLetter = letters[randomNumber];

    gamePattern.push(randomChosenLetter);

    $("#" + randomChosenLetter).fadeOut(100).fadeIn(100);

    playSound(randomChosenLetter);
}
//-----------------------------------------------------

//Detecting mouse clicks ----
$(".btn").on("click", function() {

    //Remember: do NOT use qoutaition marks for using (this) method.
    //Also, to get the element's ID, you need to use (.attr) method.
    let userChosenLetter = $(this).attr("id"); 
    userClickedPattern.push(userChosenLetter);

    animatePress(userChosenLetter);

    playSound(userChosenLetter);

    if (userClickedPattern.length === gamePattern.length) {
        checkAnswer();
    }
});
//-----------------------------------------------------

//Checking the answer ----
function checkAnswer() {

    let passed = false;

    for (let i = 0; i < gamePattern.length; i++) {

        if (userClickedPattern[i] == gamePattern[i]) {
            passed = true;
        } else {
            passed = false;
        }
    }

    if (passed == true) {

        setTimeout(function() {
            nextSequence();
        }, 1000);
    } else {

        started = false;
        level = 0;
        gamePattern = [];
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
    }
}
//-----------------------------------------------------
