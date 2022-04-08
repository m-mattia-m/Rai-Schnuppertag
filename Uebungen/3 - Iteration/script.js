console.log('Start');

/*   Aufgabe 1:  While-Schleife
*   -----------------------------------
*   While-Schleife erstellen, welche Werte von 1-10 und ausgeben
*/
function whileDo() {
    var i = 0;
    while(i <= 10) {
        console.log(i);
        i++;
    }
}
whileDo();
/*   Aufgabe 2: Do...While-Schleife
*   -----------------------------------
*   Do-While Schleife erstellen, welche Werte von 1-10 und ausgeben
*/
function doWhile() {
    var i = 0
    do {
        console.log(i);
        i++;
    } while(i<=10)
}
doWhile();

/*
*   Aufgabe 3: For-Schliefe
*   -----------------------------------
*   erstelle eine For-Schleife, welche das folgende Ausgibt
*
*   3
*   9
*   27
*   81
*   243
*   729
*/
function exponential () {
    for(var i=3; i<=729; i * i){
        console.log(i);
    }
}

/*   Aufgabe 4: Multiplikation 
*   -----------------------------------
*   Eine Multiplikation Function erstellen
*
*   Die Function soll durch Addition und Subtraktion eine Multiplikation nachbauen
*
*   Bsp 1: 5 * 3 = 5 + 5 + 5 = 15
*   Bsp 2: -3 * 4 = -3 + -3 + -3 + -3 = -12
*
*/

function multiplikation (zahl1, zahl2) {
    for(var i=1; i<zahl2; i++){
        zahl1+= zahl1;
    }

    console.log(zahl1);
}

function multiplikationNegativ (zahl1, zahl2) {
    if(zahl2 < 0) {
        for(var i=-1; i>zahl2; i--){
            zahl1-= zahl1;
        }  
    } else {
        for(var i=1; i<zahl2; i++){
            zahl1+= zahl1;
        }    
    }

    console.log(zahl1);
}

/*   Aufgabe 5: Durchschnittsberechnung
*   -----------------------------------
*   Man erhält ein Array aus Zahlen und soll den durchschnitt berechnen
*
*
*   Vorgehen:
*       1. For Schleife erstellen
*       2. Zahl zum durchschnitt hinzufügen und Schleifenvariable um 1 erhöhen
*       3. durchschnitt berechnen
*/
var zahlen = [1, 2, 3, 3, 3, 4 ,5 ,9 ,24];
function durchschnittsBerechnung(zahlen) {
    var i = 0;
    var durchschnitt = 0;

    while(i < zahlen.length) {
        durchschnitt += zahlen[i];
        i++;
    }
    durchschnitt = durchschnitt / i;
    return durchschnitt;
}

/*   Aufgabe 6: Median
*   -----------------------------------
*   Du erhälst ein Array mit Zahlen, gebe den Median aus
*   Median ist der Wert der in der Mitte eines Datensatzes (Arrays) liegt 
*
*   Bsp. 1: [1 ,3, 6, 6, 8, 9, 12,15, 16] => Median: 8
*   Bsp. 2: [-4, 3, 3, 4, 5, 9] => Median: 3.5 
*   (Weil es eine gerade Anzahl an Elementen im Array gibt muss der Durchschnitt der beiden Datensätze genommen werden, die am nächsten an der Mitte liegen)
*
*   Vorgehen:
*       1. Array der Grösse nach sortieren
*       2. Mitte des Arrays finden 
*       (Tipp: (array.length % 2) zeigt an ob es eine gerade Anzahl Elemente hat oder nicht)
*       2.1 Falls es eine ungerade Anzahl Elemente hat:
*           Die Mitte holen und ausgeben 
*           (Tipp: Mitte = (Anzahl Elemente + 1) / 2)
*       2.2 Falls es eine gerade Anzahl Elemente hat:
*           Die Mitte berechnen und diese Zahl umwandeln in int
*           (Tipp: Mitte = (Anzahl Elemente + 1) / 2) & (Anzahl Elemente / 2
*           Man erhält zwei Zahlen, diese Elemente holt man aus dem Array und berechnet den Durchschnitt)
*/
function median(zahlen) {
    var medianIndex = zahlen.length / 2;
    return zahlen[medianIndex];
}

/*   Aufgabe 7: Summe aller positiven Zahlen
*   -----------------------------------
*   Du erhälst ein Zahlen Array und gibst die Summe aller positiven Zahlen zurück
*
*   Bsp: [1,-4,7,12] => 1 + 7 + 12 = 20
*
*   Vorgehen:
*       1. For Schleife erstellen
*       2. Ist die Zahl grösser als 0?
*           2.1 Zahl zum Resultat hinzufügen
*/
var zahlen = [0,-5,4,8,-3,48];
function zahlenPositiv(zahlen) {
    var res = 0;
    for(var i = 0; i < zahlen.length; i++) {
        if(zahlen[i] > 0) {
            res += zahlen[i];
        }
    }
    return res;
}

