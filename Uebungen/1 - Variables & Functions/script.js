console.log('Start');

/*
 *   Aufgabe 1: Ausgabe
 *   -----------------------------------
 *   1. Gebe deinen Namen, Alter und Geburtsdatum aus
 *   2. Gebe eine Info aus
 *   3. Gebe eine Warunung aus
 *   4. Gebe einen Fehler aus
 */
console.log('Name: Franjo Franjic' + ' Alter: ' + 18 + ' Geburtstag: ' + new Date('2002-09-27'));
console.info('Das ist eine Information');
console.warn('Das ist eine Warnung!');
console.error('Das hier ist ein Fehler!');

/*   Aufgabe 2: Variabeln 1.0
 *   -----------------------------------
 *   Deklarieren sie Variabeln für ihren Vorname, Nachname, Geburtstag und Alter und geben Sie diese aus
 */
var alter = 18;
var vorname = 'Franjo'
var nachname = 'Franjic';
var geburtstag = new Date('2002-09-27');

/*   Aufgabe 3: Variabeln 2.0
 *   -----------------------------------
 *   Deklarieren sie ein Array mit den Namen Ihrer Familienmitgliedern
 *   Deklarieren sei ein Boolean ob sie männlich sind oder nicht
 */
var familienMitglieder = ['Sophie', 'Dagobert', 'Lucas'];
var isMale = true;

/*   Aufgabe 4: Functions 1.0
 *   -----------------------------------
 *   Erstelle eine Function die 2 + 3 zusammenrechnet und ausgibt (nicht als Parameter übergeben)
 */

function basic() {
    console.log(2 + 3)
}

/*   Aufgabe 6: Rechner 1.0
 *   -----------------------------------
 *   Erstelle vier Functions (Addition, Subtraktion, Division, Multiplikation)
 *   Gebe zwei Zahlen mit und verrechne sie entsprechend der Operation
 */

function addieren(zahl1, zahl2) {
    return zahl1 + zahl2;
}

function subtraktion(zahl1, zahl2) {
    return zahl1 - zahl2;
}

function dividieren(zahl1, zahl2) {
    return zahl1 / zahl2;
}

function multiplizieren(zahl1, zahl2)  {
    return zahl1 * zahl2;
}


/*   Aufgabe 4: Functions 1.0
 *   -----------------------------------
 *   Erstelle eine Function die den Rest der Division ausgibt.
 */

function modulo1(zahl1, zahl2) {
    console.log(zahl1 % zahl2);
}

/*   Aufgabe 5: Functions 2.0
 *   -----------------------------------
 *   Erstelle eine Function die den Rest einer Division zurück gibt
 */
function modulo2(zahl1, zahl2) {
    return zahl1 & zahl2;
}