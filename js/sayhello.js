// var johnGreeter = {};
// johnGreeter.nameee = "John";
// johnGreeter.sayHello = function () {
//     console.log("Hello " + johnGreeter.nameee);
// }

(function (window) {
    var johnGreeter = {};
    johnGreeter.nameee = "John";
    var greeting = "Hello";
    johnGreeter.sayHello = function () {
        console.log("Hello " + johnGreeter.nameee);
    }
    window.johnGreeter = johnGreeter;
})(window);
