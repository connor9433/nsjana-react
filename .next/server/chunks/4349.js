"use strict";
exports.id = 4349;
exports.ids = [4349];
exports.modules = {

/***/ 4349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Countdown)
/* harmony export */ });
function Countdown() {
    document.addEventListener("readystatechange", (event)=>{
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("clockdiv");
            var countDownDate = new Array();
            for(var i1 = 0; i1 < clockdiv.length; i1++){
                countDownDate[i1] = new Array();
                countDownDate[i1]["el"] = clockdiv[i1];
                countDownDate[i1]["time"] = new Date(clockdiv[i1].getAttribute("data-date")).getTime();
                countDownDate[i1]["days"] = 0;
                countDownDate[i1]["hours"] = 0;
                countDownDate[i1]["seconds"] = 0;
                countDownDate[i1]["minutes"] = 0;
            }
            var countdownfunction = setInterval(function() {
                for(var i = 0; i < countDownDate.length; i++){
                    var now = new Date().getTime();
                    var distance = countDownDate[i]["time"] - now;
                    countDownDate[i]["days"] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]["hours"] = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                    countDownDate[i]["minutes"] = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
                    countDownDate[i]["seconds"] = Math.floor(distance % (1000 * 60) / 1000);
                    if (distance < 0) {
                        countDownDate[i]["el"].querySelector(".days").innerHTML = 0;
                        countDownDate[i]["el"].querySelector(".hours").innerHTML = 0;
                        countDownDate[i]["el"].querySelector(".minutes").innerHTML = 0;
                        countDownDate[i]["el"].querySelector(".seconds").innerHTML = 0;
                    } else {
                        countDownDate[i]["el"].querySelector(".days").innerHTML = countDownDate[i]["days"];
                        countDownDate[i]["el"].querySelector(".hours").innerHTML = countDownDate[i]["hours"];
                        countDownDate[i]["el"].querySelector(".minutes").innerHTML = countDownDate[i]["minutes"];
                        countDownDate[i]["el"].querySelector(".seconds").innerHTML = countDownDate[i]["seconds"];
                    }
                }
            }, 1000);
        }
    });
};


/***/ })

};
;