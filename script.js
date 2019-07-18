$(document).ready(function () {
    // document Variables Global
    let docWin = $("#win");
    let docLose = $("#lose");
    let docHidden = $("#hiddenWord");
    let docLetters = $("#letters");
    let docGuess = $("#guess")
    // Variable Global
    let word;
    let guess= 10;
    let hiddenWord = [];
    let lettersUsed = [];
    let foundLetters = [];
    let lose = 0;
    let win = 0;
    let captainPlanetWords = ["captain planet", "plan teers", "ea rth"];
    let random = captainPlanetWords[Math.floor(Math.random() * captainPlanetWords.length)];

    function PickWord() {
        word = random.split("");
        hiddenWord = word.map(x => x = "_");
        console.log(hiddenWord);
        let spaceCheck = word.indexOf(" ");
        if (spaceCheck > -1) {
            console.log(spaceCheck);
            hiddenWord[spaceCheck] = " ";
            docHidden.text(hiddenWord.join(""));
        }
    }
    function Compare() {
        $(document).on("keyup", function (event) {
            let letter = event.key;
            console.log(event);
            let eventCode = event.keyCode;
            console.log(eventCode);
            if (eventCode >= 65 && eventCode <= 90) {
                word.forEach(function (element, index) {
                        if (element == letter) {
                            hiddenWord[index] = letter;
                        }
                        
                    });
                if (hiddenWord.indexOf(letter) < 0){
                        if(lettersUsed.indexOf(letter)==-1){
                            lettersUsed.push(letter);
                            guess--;
                            docGuess.text(guess);
                        }

                        
                }
                docHidden.text(hiddenWord.join("").toUpperCase());
                docLetters.text(lettersUsed.join("").toUpperCase());
            }
            winLose();


        });
    }

    function winLose(){
        if(hiddenWord.indexOf("_")==-1){
            win++;
            docWin.text(win);
            gameStart();
        }
        if(guess<=0){
            lose++;
            docLose.text(lose);
            gameStart();
        }
        
    }

    const gameStart = function () {
        PickWord();
        Compare();
        lettersUsed=[]
        docLetters.text(lettersUsed.join(""));
    }

    gameStart();
});
