let maxround = 0; //maximal round zum spielen
let random; //random zahl
let nutzerWahl; //whal des nutzer
let round = -1;
let usercounter = 0;
let comcounter = 0;

//random number
function getRndInteger() {
    random = Math.floor(Math.random() * (5 - 2));
    console.log("randomzahl:" + random);
}

//radiobtn
document.getElementById("rb5").addEventListener("click", () => {
    maxround = 5;
    console.log(maxround);
})
document.getElementById("rb10").addEventListener("click", () => {
    maxround = 10;
    console.log(maxround);
})
document.getElementById("rb15").addEventListener("click", () => {
    maxround = 15;
    console.log(maxround);
})
document.getElementById("rb20").addEventListener("click", () => {
    maxround = 20;
    console.log(maxround);
})

//funktionen des wahl des nutzer
document.getElementById("stein").addEventListener("click", () => {
    nutzerWahl = 0;
    console.log(nutzerWahl)
})
document.getElementById("papier").addEventListener("click", () => {
    nutzerWahl = 1;
    console.log(nutzerWahl)
})
document.getElementById("schere").addEventListener("click", () => {
    nutzerWahl = 2;
    console.log(nutzerWahl)
})

//fuktion zum vergleichen
function spielFunction() {
    getRndInteger()
    if (maxround != 0 && maxround > round) {
        round++;
        document.getElementById("div-radio").style.display = "none";
        document.getElementById("round-counter").innerHTML = `${round} / ${maxround}`;
        console.log("round:" + round);
        switch (nutzerWahl) {
            case 0:
                if (random == 0) {
                    console.log("gleich");
                }
                else if (random == 1) {
                    console.log("lose");
                    comcounter++;
                }
                else if (random == 2) {
                    console.log("winn");
                    usercounter++;
                }
                else {
                    console.log("false");
                }
                break;

            case 1:
                if (random == 0) {
                    console.log("winn");
                    usercounter++;
                }
                else if (random == 1) {
                    console.log("gleich");
                }
                else if (random == 2) {
                    console.log("lose");
                    comcounter++;
                }
                else {
                    console.log("false");
                }
                break;

            case 2:
                if (random == 0) {
                    console.log("lose");
                    comcounter++;
                }
                else if (random == 1) {
                    console.log("winn");
                    usercounter++;
                }
                else if (random == 2) {
                    console.log("gleich");
                }
                else {
                    console.log("false");
                }
                break;



        }
    }
    else if (maxround == round && usercounter > comcounter) {
        document.getElementById("h1-ergebnis").innerHTML = "YOU WIN"
    }
    else if (maxround == round && usercounter < comcounter) {
        document.getElementById("h1-ergebnis").innerHTML = "GAME OVER!"
    }
    else if (maxround == round && usercounter == comcounter) {
        document.getElementById("h1-ergebnis").innerHTML = "="
    }




    document.getElementById("h1-erg-zeigen").innerHTML = `${usercounter} : ${comcounter} `;


}

//funktion für page-refresh(clear)
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
})



