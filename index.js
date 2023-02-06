
let numberOfDrumButtons = document.querySelectorAll(".drum").length; // number of buttons



// Detecting Button Press
for( let i = 0; i < numberOfDrumButtons; i++ ){  // "for" connecting our number of buttons
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){ //make function when we click on our buttons

        let buttonInnerHTML = this.innerHTML;  // daughter classes our current button

        makeSound(buttonInnerHTML);             //call function "MAKE SOUND" by innerHTML
        // this.style.color = "white";             // white button

        buttonAnimation(buttonInnerHTML);     // call function "ANIMATION"

    });

}

// Detecting Keyboard Press
        document.addEventListener("keypress", function(event){ //make function by keypress


           makeSound(event.key);  // call function "MAKE SOUND" by event KEY
            buttonAnimation(event.key); // call function "Animation" ny event KEY
        })

        function makeSound(key){    // make function "MAKE SOUND"  by current KEY

            switch (key) {
                case "w":

                    let audio1 = new Audio('sounds/tom-1.mp3');
                    audio1.play();
                    break;

                case "a":
                    let audio2 = new Audio('sounds/tom-2.mp3');
                    audio2.play();
                    break;

                case "s":
                    let audio3 = new Audio('sounds/tom-3.mp3');
                    audio3.play();
                    break;

                case "d":
                    let audio4 = new Audio('sounds/tom-4.mp3');
                    audio4.play();
                    break;

                case "j":
                    let audio5 = new Audio('sounds/snare.mp3');
                    audio5.play();
                    break;

                case "k":
                    let audio6 = new Audio('sounds/crash.mp3');
                    audio6.play();
                    break;

                case "l":
                    let audio7 = new Audio('sounds/kick-bass.mp3');
                    audio7.play();
                    break;
                default: console.log(key);
            }
        }


        function buttonAnimation(currentKey){

        var activeButton = document.querySelector("." + currentKey);

           activeButton.classList.add("pressed");


            setTimeout( function() {
                activeButton.classList.remove("pressed");
                }, 100);

        }


