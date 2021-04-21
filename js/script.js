// script go with sayhi and sayhello.js
johnGreeter.sayHello();
yaakovGreeter.sayhi();

// Imediately Invoked Function Expression
// can pass something in()
(function () {
    console.log("Hello!");
})();






function orderChicken(sideDish) {
    if (sideDish === undefined) {
        sideDish = "whatever!";
    }
    console.log("chicken with " + sideDish);
}
orderChicken("noodle");
orderChicken();


//  // short code
// function orderChicken(sideDish) {
//     sideDish = sideDish || "whatever!"; // id sideDish is empty then use other argument.

//     console.log("chicken with " + sideDish);
// }
// orderChicken("noodle");
// orderChicken();

//Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";

console.log(company);
console.log("company CEO name is: " + company.ceo.firstName);
console.log(company["name"]);

company["stock of company"] = 110;
console.log("stock price is " + company["stock of company"]);

// similer up
var stockProName = "stock of company";
company[stockProName] = 110;
console.log("var stock price is " + company["stock of company"]);


// better way: object literal

var Facebook = {
    name: "Facebook",
    CEO: {
        firstName: "Mark",
        favColor: "blue"
    },
    stock: 110,
    "stock of company": 120
};
console.log(Facebook.CEO.favColor);


//closures
function makeadd(add) {
    return (
        function (ad) {
            return add + ad;
        }
    );
}
var ttal = makeadd(4);
console.log("function closures: " + ttal(10));



function makeMulti(muti) {
    var myFunc = function (x) {
        return muti - x;
    };
    return myFunc;
}

var mutiBy3 = makeMulti(3);//muti
console.log(mutiBy3(10));//x

var double = makeMulti(2);
console.log(double(30));

function doOper(x, operation) {
    return operation(x);
}

var result = doOper(5, mutiBy3);
console.log(result);
result = doOper(100, double);
console.log(result);

(function (me) {
    console.log("immediately invoked function expression. Hello Coursera" + me)
})("lena. or not passing any thing ()");

//With HTML
// function sayHe() {
//     var name =
//         document.getElementById("name").value;
//     var message = "<h2>Hello " + name + "! </h2>";

//     // document.getElementById("content").textContent = message;

//     document.getElementById("content").innerHTML = message;
// }


function sayHe(event) {
    // console.log(this); //this event point the button so it easy to change it appearance
    this.textContent = "said it!"; // change the work off button
    var name =
        document.getElementById("name").value; // get value(name) of input file and stoge it in var name
    var message = "<h2>Hello " + name + "! </h2>"; // set message to var message

    // document.getElementById("content").textContent = message;

    document
        .getElementById("content").innerHTML = message; //insert message to #content
    if (name === "student") {               // if name value = student then the #title add more text
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";

        document.querySelector("#title").textContent = title; // put all text and change back to #title
    }
}

document.querySelector("button").addEventListener("click", sayHe);
// or can use this code 
// document.querySelector("button").addEventListener.click = sayHe;





//tieng viet

var a = 7;
var b = 9;
var c = 8;

var max = a;
if (max < b) {
    max = b;
    // if (max < c) max = c; //co the lay bo .me
} else {
    if (max < c) max = c;
}
console.log("tieng viet courses: if else if: " + max);

/*

 for (cau lenh 1; dk lap; cau lenh 2){
    // cac lenh bi lap
 }

 cau lenh 1 chi thuc hien 1 lan luc bat dau
 ( dk lap neu dk con dung thi se lap hoai
 cau lenh 2 thuc hien ca khi cac lenh lap chay xong)
 ()cu chay vong lap toi dk sai thi dung


 while (dk lap){
     //cac lenh bi lap
 }


 do{
     //cac lenh bi lap
 } while(dk lap);



 */

// cach tinh tong so tu nhien 1 - 100
var i;
var tong = 0;
for (i = 1; i <= 100; i++) {
    tong += i;
}
console.log("for loop: " + tong);

var w = 1;
var wtong = 0;
while (w <= 100) {
    wtong += w;
    w++;
}
console.log("while loop: " + wtong);


var d = 1;
var dtong = 0;
do {
    dtong += d;
    d++;
}
while (d <= 100);
console.log("do loop: " + dtong);



/**
 //dang 1 giong if else
 switch (bien){
    case value 1 : { cau lenh 1; break;}
     case value2 : { cau lenh 2; break;}
     default : {cau lenh 3; break;}
 }

 //dang 2 so sanh hoac
  switch (bien){
     case value1 : 
    case value 1.1 : { cau lenh 1; break;}
     case value2 : { cau lenh 2; break;}
     default : {cau lenh 3; break;}
 }

 //dang 3: so sanh hoac vi k co break 
  switch (bien){
     case value1 :{ cau lenh 1;} // so sanh hoac vi k co break
    case value 2 : { cau lenh 2; break;}
     case value3 : { cau lenh 3; break;}
     default : {cau lenh ; break;}
 }

 case so sanh neu bien==value thi thuc hien cau lenh  
 */

var sw = 15;
switch (sw) {
    case 1: {
        sw += 10;
        break;
    }
    case 2: {
        sw += 20;
        break;
    }
    default: {
        sw += 15;
        break;
    }
}
console.log("switch 1: " + sw);

// // function de tap hop n 

// // khai bao ham
// function ten_han(){

// }

// //su dung ham
// ten_han();

function tongab(a, b) {
    var tog = a + b;
    console.log("function: " + tog);
}
tongab(13, 13);

/**
 khai bao ham
 function tongab(thamso_1, thamso2){
     return thamso_1 + thamso2;
 }

 //su dung ham
 var tong = tongab(2,3);
 alert(tong);
 */

function tongAB(a, b) {
    var t = a + b;
    return t;
}

var tong = tongAB(2, 4);
// alert(tong);

//or ca write like thic 
function tongAB(a, b) {
    return a + b;
}

var tong = tongAB(2, 5);
// alert(tong);
