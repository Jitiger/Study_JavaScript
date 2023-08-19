const player = {
    name: "nico",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice meet you");
    },
};

console.log(player.name);
player.sayHello("gitae")


//function plus(potato,tomato){
  //  console.log(potato+tomato);
//}
//plus(potato=2, tomato=4);
//alert(potato);
//plus(4,5);
//console.log(potato);

//계산기 만들기 코드

const calculator={
    plus:function(a,b){
        console.log(a+b);
    },
    minus:function(a,b){
        console.log(a-b);
    },
    divide:function(a,b){
        console.log(a/b);
    },
    multi:function(a,b){
        console.log(a*b);
    },
    square:function(a,b){
        console.log(a**b);
    },
};
calculator.plus(3,5);
calculator.minus(3,5);
calculator.divide(3,5);
calculator.multi(3,5);
calculator.square(3,5);



