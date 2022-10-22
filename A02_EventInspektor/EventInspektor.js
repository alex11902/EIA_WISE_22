"use strict";
/*
Aufgabe: Aufgabe 2 EventInspektor
Name: Alexander Holstein
Matrike: 271466
Datum: 22.10.2022
Quellen: Hilfe von Henning Pils bekommen
*/
var EventInspektor;
(function (EventInspektor) {
    window.addEventListener("load", handleLoad);
    let div0 = document.querySelector("div0");
    let div1 = document.querySelector("div1");
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        let span = document.querySelector("span");
        console.log(span);
        let posX = `${_event.clientX}`;
        let posY = `${_event.clientY}`;
        span.innerHTML = `X: ${posX}, Y: ${posY}, Target: ${_event.target}`;
        let offsetX = _event.clientX + 15;
        let offsetY = _event.clientY + 15;
        span.style.left = `${offsetX}px`;
        span.style.top = `${offsetY}px`;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
})(EventInspektor || (EventInspektor = {}));
//# sourceMappingURL=EventInspektor.js.map