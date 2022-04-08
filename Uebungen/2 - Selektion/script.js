console.log('Start');

/*   Aufgabe 1: Selektion 1.0
*   -----------------------------------
*   Wenn Zahl grösser als 0 gebe aus: die Zahl  ist postiv
*   Falls Zahl Kleiner als 0 ist gebe aus: die Zahl ist negativ
*/
function isPositiv(zahl) {
    if(zahl >= 0){
        console.log('die Zahl ist positiv');
    } else{
        console.log('die Zahl ist negativ.');
    }
}

/*   Aufgabe 2: Selektion 2.0
*   -----------------------------------
*   Wenn Zahl grösser als 0 und kleiner als 10: die Zahl liegt dazwischen
*   Ansonsten gebe aus: die Zahl liegt nicht im gültigen Rahmen
*/
function isBetween(zahl) {
    if(zahl >= 0 && zahl < 10){
        console.log('die Zahl liegt dazwischen');
    } else {
        console.log('die Zahl liegt nicht im gültigen Rahmen')
    }
}

/*   Aufgabe 3: Boolsches Algebra 1.0
*   -----------------------------------
*   Prüfe ob beide Eingaben korrekt sind:
*   Falls beide die Bediengung erfüllen soll true ausgegeben werden.
*   Falls eine der beiden Bediengungen erfüllt ist soll trotzdem false ausgegeben werden. 
*/
if(true && false) {
    console.log("true");
} else {
    console.log("false");
}

/*   Aufgabe 4: Boolsches Algebra 2.0
*   -----------------------------------
*   Prüfe ob eine der beiden Eingaben korrekt ist:
*   Falls eine Bediengung erfüllt ist soll true ausgegeben werden.
*   Wenn keine Bediengung erfüllt ist soll false ausgegeben werden. 
*/
function hasValue() {
    if(true || false) {
        console.log("true");
    } else {
        console.log("false");
    }
}

/*   Aufgabe 5: Noten Function
*   -----------------------------------
*   Bei Noten unter 4: ungenügende Note
*   Bei Noten über 4: genügende Note
*/

function noteAnzeige(note) {
    if(note < 4) {

    } else if(note > 4) {

    }
}

/*   Aufgabe 6: Switch-Case
*   -----------------------------------
*   Erstelle eine Klasse Person
*/

class person {
    name;
    geschlecht;
}

function WerDarfMit(person) {
    switch(person.geschlecht){
        case Weiblich:
            console.log("Weiblich");
            break;
        case Männlich:
            console.log("Männlich");
            break;
        default:
            console.log("Ein Tier oder so");
            break;
    }
}

/*   Aufgabe 7: Trinkspiel
*   -----------------------------------
*   Erstelle eine Function welche je nach Alter folgendes zurück gibt:
*   bei Alter unter 18 : nichts da!
*   zwischen 18 und 45: zwei Birchen gehen
*   zwischen 50 und 80: ein Whiskey
*   An den Rest: Her mit dem Whiskey!
*/
function whatDrink(alter) {
    if(alter < 18) {
        console.log("nichts da");
    } else if(alter < 80 && alter > 50) {
        console.log("ein Whiskey")
    } else if(alter >=18 && alter < 45) {
        console.log("zwei Bierchen");
    } else {
        console.log("paar Whiskeys");
    }
}

/*
*   Aufgabe 8: BMI
*   -----------------------------------
*   Schreibe eine Funktion, die den "body mass index" berechnet. (bmi = weight / height ^ 2).
*
*   if bmi <= 18.5 return "Underweight"
*
*   if bmi <= 25.0 return "Normal"
*
*   if bmi <= 30.0 return "Overweight"
*
*   if bmi > 30 return "Obese"
*/
function calculaterBMI(weight, height){
    var bmi = weight / height * height;
    if(bmi <= 18.5) {return 'Underweight';}
    else if(bmi <= 25) {return 'Normal';}
    else if(bmi <= 30) {return 'Overweight';}
    else if(bmi > 30) {return 'Obese';}
}