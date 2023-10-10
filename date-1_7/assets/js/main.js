// Aufgabe:

// Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
// Überprüfe dein Ergebnis in der Konsole.
// Nutze:
// Conditionals Statement
// Comparison Operators
// Funktion mit einem Parameter
// Aktuelles Datum
// getDay()
// return "Weekend"
// return "Arbeitstag"
// Teste folgende Daten:
// 12.15.2019
// 2.16.2001
// 2.1.2020
// 2.29.2020
// * Ergebnisvorschau ist falsch

function checkWeekend(date) {
  let day = date.getDay();
  let result = day > 0 && day < 6 ? "Arbeitstag" : "Weekend";
  console.log(result);
}
// ! format: mm.dd.yyyy
let date1 = new Date(2019, 11, 15); // 12.15.2019 -> So
let date2 = new Date(2001, 1, 16); // 2.16.2001 ->Fr
let date3 = new Date(2020, 1, 1); // 2.1.2020 -> Sa
let date4 = new Date(2020, 1, 29); // 2.29.2020 -> Sa

// console.log({ date1 });
// console.log({ date2 });
// console.log({ date3 });
// console.log({ date4 });

checkWeekend(date1);
checkWeekend(date2);
checkWeekend(date3);
checkWeekend(date4);
