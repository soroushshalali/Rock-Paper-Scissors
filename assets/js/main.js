let maxround = 0; //maximal round zum spielen
let random; //random zahl
let nutzerWahl; //whal des nutzer
let round = 0;
let usercounter = 0;
let comcounter = 0;
let sumPointsUser = 0;
let sumPointscom = 0;

//random number
function getRndInteger() {
    random = Math.floor(Math.random() * (5 - 2));
    console.log("randomzahl:" + random);
}


//radiobtn
document.getElementById("rb5").addEventListener("click", () => {
    maxround = 5;
    console.log(maxround);
    document.getElementById("schere").style.animationName = "ani1";
    document.getElementById("papier").style.animationName = "ani1";
    document.getElementById("stein").style.animationName = "ani1";
    console.log("eb5");

})
document.getElementById("rb10").addEventListener("click", () => {
    maxround = 10;
    console.log(maxround);
    document.getElementById("schere").style.animationName = "ani1";
    document.getElementById("papier").style.animationName = "ani1";
    document.getElementById("stein").style.animationName = "ani1";
    console.log("eb10");
})
document.getElementById("rb15").addEventListener("click", () => {
    maxround = 15;
    console.log(maxround);
    document.getElementById("schere").style.animationName = "ani1";
    document.getElementById("papier").style.animationName = "ani1";
    document.getElementById("stein").style.animationName = "ani1";
    console.log("eb15");
})
document.getElementById("rb20").addEventListener("click", () => {
    maxround = 20;
    console.log(maxround);
    document.getElementById("schere").style.animationName = "ani1";
    document.getElementById("papier").style.animationName = "ani1";
    document.getElementById("stein").style.animationName = "ani1";
    console.log("eb20");
})

//funktionen des wahl des nutzer
document.getElementById("stein").addEventListener("click", () => {
    nutzerWahl = 0;
    console.log(nutzerWahl);

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

// witer spielen
document.getElementById("weiterspielen").addEventListener("click", () => {
    document.getElementById("div-radio").style.display = "grid";
    document.getElementById("round-counter").innerHTML = "";
    document.getElementById("h1-ergebnis").innerHTML = "Lets play";
    document.getElementById("h1-erg-zeigen").innerHTML = "0 : 0";
    document.getElementById("rb5").checked = false;
    document.getElementById("rb10").checked = false;
    document.getElementById("rb15").checked = false;
    document.getElementById("rb20").checked = false;
    round = -1;
    sumPointsUser += usercounter;
    console.log("user" + sumPointsUser);
    sumPointscom += comcounter;
    console.log("com" + sumPointscom);
    usercounter = 0;
    comcounter = 0;
    maxround = 0;
    document.getElementById("sumpointsuser").innerHTML = `User: ${sumPointsUser}`;
    document.getElementById("sumpointscom").innerHTML = `Com: ${sumPointscom}`;

})

//funktion für page-refresh(clear)
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
})
