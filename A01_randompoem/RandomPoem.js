"use strict";
let subjects;
let predicates;
let objects;
subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "ermordet"];
objects = ["Zaubertrank", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
console.log(subjects, predicates, objects);
for (let index = subjects.length; index >= 0; index--) {
    console.log(getVerse(subjects, predicates, objects));
}
function getVerse(_subjects, _predicates, _objects) {
    let verseData = "";
    let verseNumber;
    verseNumber = Math.floor(Math.random() * _subjects.length);
    let verseSubjekt = _subjects.splice(verseNumber, 1);
    verseNumber = Math.floor(Math.random() * _predicates.length);
    let versePredicates = _predicates.splice(verseNumber, 1);
    verseNumber = Math.floor(Math.random() * _objects.length);
    let verseObjects = _objects.splice(verseNumber, 1);
    verseData = verseSubjekt + " " + versePredicates + " " + verseObjects;
    return verseData;
}
//# sourceMappingURL=RandomPoem.js.map