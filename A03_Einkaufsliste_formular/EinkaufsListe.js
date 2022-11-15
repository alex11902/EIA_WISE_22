"use strict";
/*
 Aufgabe:<L03_Einkaufsliste>
 Name: <Alexander Holstein>
 Matrikel: <271466>
 Datum: <13.11.2022>
 Quellen: <Nils schiffman>
*/
var EinkaufsListe;
(function (EinkaufsListe) {
    window.addEventListener("load", handleLoad);
    let submitButton = document.getElementById("addItemSubmit");
    let deleteIcons = document.querySelectorAll(".deleteIcon");
    let editIcons = document.querySelectorAll(".editIcon");
    function handleLoad(_event) {
        submitButton.addEventListener("submit", addItem);
        for (const icon of deleteIcons) {
            icon.addEventListener("click", deleteItem);
        }
        for (const icon of editIcons) {
            icon.addEventListener("click", editItem);
        }
    }
    function addItem(_event) {
        console.log("Item was added.");
    }
    function deleteItem(_event) {
        console.log("Item will now be deleted.");
    }
    function editItem(_event) {
        console.log("Item can now be edited.");
    }
})(EinkaufsListe || (EinkaufsListe = {}));
//# sourceMappingURL=EinkaufsListe.js.map