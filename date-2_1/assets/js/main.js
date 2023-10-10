// Aufgabe:

// Schreibe eine Funktion, die das aktuelle Datum anzeigt.
// Erwartete Ergebnisse: tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr)
// Nutze Befehle:
// getDate(), getMonth(), getFullYear()
// getElementById() oder querySelector()
// Lass Dir das Ergebnis im HTML-Dokument anzeigen.

const output = document.getElementById("output");

let date = new Date();

function showDate(date) {
  let year = date.getFullYear();
  let month_index = date.getMonth() + 1;
  let month = month_index.toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  //   console.log({ day });
  //   console.log({ year });
  //   console.log({ month });

  output.innerHTML = `${day}/${month}/${year}`;
}

showDate(date);

// test einstellige daten:
// date1 = new Date(2023, 5, 4);
// showDate(date1);
