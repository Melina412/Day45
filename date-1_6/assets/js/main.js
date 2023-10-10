// Aufgabe:

// Schreibe eine Funktion, um AM und PM zu erhalten.
// Die Funktion enthält:
// Ein Parameter
// Ternary Operator oder if
// getHours()
// Überprüfe deine Funktion in der Konsole.
// Teste sie mit folgenden Argumenten:
// date1 = new Date(1999, 10, 5, 15) //PM
// date2 = new Date()
// date3 = new Date(2019, 12, 3, 12) //PM
// date4 = new Date(2000, 1, 1, 11) //AM

function checkAmPm(date) {
  let hour = date.getHours();
  let result = hour >= 12 ? "PM" : "AM";
  console.log(result);
}

date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

checkAmPm(date1);
checkAmPm(date2);
checkAmPm(date3);
checkAmPm(date4);
