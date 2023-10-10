// Aufgabe:

// In dieser Übung lernen wir SET Date Methods
// Zeige die Daten wie auf dem Screenshot an und nutze die Set Date Methode.
// In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
// Denkt daran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
// Nutzt Google, falls ihr nicht weiterkommt. :)

let date = new Date();

let date1 = new Date(2222, 5, 20, 15, 42, 38);

let date2 = new Date(2123, 1, 24, 15, 42, 38);

date2.setMonth(2);
let date3 = date2.toString();

date2.setDate(3);
let date4 = date2.toString();

let date5 = new Date();
date5.setDate(date.getDate() + 30);
date5 = date5.toString();

// console.log(date);
// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);
// console.log(date5);

document.body.innerHTML = `
<p>${date1}</p>
<p>${date2}</p>
<p>${date3}</p>
<p>${date4}</p>
<p>${date5}</p>
 `;
