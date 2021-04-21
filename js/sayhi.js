// var yaakovGreeter = {};
// yaakovGreeter.nameee = "Yaakov";
// yaakovGreeter.sayhi = function () {
//     console.log("hi " + yaakovGreeter.nameee);
// }

(function (window) {
    var yaakovGreeter = {};
    yaakovGreeter.nameee = "Yaakov";
    var greeting = "Hi ";
    yaakovGreeter.sayhi = function () {
        console.log(greeting + yaakovGreeter.nameee);
    }
    window.yaakovGreeter = yaakovGreeter;
})(window);

