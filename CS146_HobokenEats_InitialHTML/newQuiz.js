function sadTimes(){
    document.getElementById("crisis").onsubmit=function() {
        type = parseInt(document.querySelector('input[name = "type"]:checked').value);
        money = parseInt(document.querySelector('input[name = "money"]:checked').value);
        energy = parseInt(document.querySelector('input[name = "energy"]:checked').value);
        mood = parseInt(document.querySelector('input[name = "mood"]:checked').value);
    
        total= type + money + energy + mood;
    
        if(total <= 5) {
            document.getElementById("quiz-result").innerHTML = "You got SHAKE SHACK.";
        }
        if(total >=5 && total < 8) {
            document.getElementById("quiz-result").innerHTML = "You got O'BAGEL.";
        }
        if(total >=8 && total < 10) {
            document.getElementById("quiz-result").innerHTML = "You got AYAME.";
        }
        if(total >=10 && total < 13) {
            document.getElementById("quiz-result").innerHTML = "You got CHARRITOS.";
        }
        if(total >=13 && total < 16 ) {
            document.getElementById("quiz-result").innerHTML = "You got KARMA KAFE.";
        }
        if(total >=16) {
            document.getElementById("quiz-result").innerHTML = "You got GRIMALDI'S.";
        }

        return false; // required to not refresh the page; just leave this here
    }// end the submit function
}