"use strict";
var EventInspektor;
(function (EventInspektor) {
    window.addEventListener("load", handleLoad);
    let div0 = document.getElementById("div0");
    let div1 = document.getElementById("div1");
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
    }
    function setInfoBox(_event) {
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        div0?.addEventListener("click", logInfo);
        div0?.addEventListener("keyup", logInfo);
        div1?.addEventListener("click", logInfo);
        div1?.addEventListener("keyup", logInfo);
    }
    function logInfo(_event) {
        console.log();
    }
})(EventInspektor || (EventInspektor = {}));
//# sourceMappingURL=EventInspektor.js.map