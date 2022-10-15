
let subjects: string[];
let predicates: string[];
let objects: string[];
 
subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];

predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "ermordet"];

objects = ["Zaubertrank", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

console.log(subjects, predicates, objects);

for (let index: number = subjects.length; index >= 0; index--) {

    
    console.log(getVerse( subjects, predicates, objects ));

}

function getVerse( _subjects: string[], _predicates: string[], _objects: string[] ): string {

let verseData: string = "";

let verseNumber: number ;

verseNumber = Math.floor( Math.random() * _subjects.length );
let verseSubjekt: string[] = _subjects.splice(verseNumber, 1);

verseNumber = Math.floor( Math.random() * _predicates.length );
let versePredicates: string[] = _predicates.splice( verseNumber, 1 );

verseNumber = Math.floor( Math.random() * _objects.length );
let verseObjects: string[] = _objects.splice( verseNumber, 1 );

verseData = verseSubjekt + " " + versePredicates + " " + verseObjects;


return verseData;

}