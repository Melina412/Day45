// Aufgabe:

// In dieser Übung lernen wir die Date Methods
// Zeige die Daten wie auf dem Screenshot an.
// Verwende den Code aus dem Kommentarbereich, um den Wochentag und den Monat anzuzeigen.
// Nutze Google, wenn du bei der Umsetzung Hilfe benötigst.
// Du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.
// Erstelle ein schönes CSS-Design für deine elektronische Uhr und füge ein festes Datum ein.Dieses Design werden wir später verwenden, um eine funktionierende Uhr zu bauen!

let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

// *==========================================================================*

let date = new Date();
let year = date.getFullYear();
let month_index = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let weekday_index = date.getDay();
let weekday = date.toLocaleDateString("default", { weekday: "short" });
let month = date.toLocaleDateString("default", { month: "long" }); // Oktober

// * anzeige der daten wie auf dem screenshot:
console.log(date);
console.log(year);
console.log(month_index.toString(), "Monat");
console.log(day.toString(), "Tag");
console.log(hour.toString(), "Stunde");
console.log(minute.toString(), "Minute");

// console.log(month);
// console.log(weekday_index, "Wochentag");
// console.log(weekday, "Wochentag (short)");
// console.log(second, "Sekunde");

// code aus arrays lesen:
for (let i = 0; i < wochenTag.length; i++) {
  if (i === weekday_index) {
    const weekday2 = wochenTag[i];
    console.log(weekday2);
  }
}

for (let i = 0; i < monate.length; i++) {
  if (i === month_index) {
    const month2 = monate[i];
    console.log(month2);
  }
}

// *==========================================================================*

// * code für uhr:

let en_weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let en_weekday = "";
for (let i = 0; i < en_weekdays.length; i++) {
  if (i === weekday_index) {
    en_weekday = en_weekdays[i];
    // console.log(en_weekday);
  }
}

let day_output = document.getElementById("day");
let hour_output = document.getElementById("hours");
let minutes_output = document.getElementById("minutes");
let seconds_output = document.getElementById("seconds");
let period_output = document.getElementById("period");

day_output.innerHTML = en_weekday;
hour_output.innerHTML = hour % 12 || 12;
minutes_output.innerHTML = minute;
seconds_output.innerHTML = second;
period_output.innerHTML = hour >= 12 ? "PM" : "AM";
