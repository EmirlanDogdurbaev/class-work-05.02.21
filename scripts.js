// let h1 = document.createElement("h1");
// h1.innerText = "JavaScript Styling";
// document.body.append(h1);

// let ul = document.createElement('ul');
// for (let  i = 1; i <= 5 ; i++){
//     let li = document.createElement('button');
//     let button = document.innerText = "Example";
// button.id = "example" + i;

// li.append(buttton);
// ul.append(li);
// }
// document.body.append
// let ull = document.createElement("ul");
// let lii = document.createElement("li");
// let butt = document.createElement("button");

// H1.append(newH1);
// ull.append(newull);
// lii.append(newlii);
// butt.append(newbutt);

// // console.log()

// let ex1 = document.querySelector(".ex1")
// ex1.style.border = "solid black 1px";
// ex1.style.width = "50px";
// ex1.style.padding = "5px 10px";
// ex1.style.textAlign = "center"
// ex1.style.marginBottom = "15px"

// let ex2 = document.querySelector(".ex2")
// ex2.style.border = " dotted black 5px";
// ex2.style.backgroundColor = "Red"
// ex2.style.width = "50px";
// ex2.style.padding = "5px 10px";
// ex2.style.textAlign = "center"
// ex2.style.margingTop = "15px"
// ex2.style.marginBottom = "15px"

// let ex3 = document.querySelector(".ex3")
// ex3.style.border = " dotted aqua 5px";
// ex3.style.color = "blue"
// ex3.style.width = "50px";
// ex3.style.padding = "5px 10px";
// ex3.style.textAlign = "center"
// ex3.style.margingTop = "15px"
// ex3.style.marginBottom = "15px"

// let ex4 = document.querySelector(".ex4")
// ex4.style.border = "none";
// ex4.style.color = "black"
// ex4.style.backgroundColor = "tomato"
// ex4.style.width = "50px";
// ex4.style.padding = "15px 20px";
// ex4.style.textAlign = "center"
// ex4.style.margingTop = "15px"
// ex4.style.marginBottom = "15px"

// let ex5 = document.querySelector(".ex5")
// ex5.style.border = " solid black 5px";
// ex5.style.backgroundColor = "black"
// ex5.style.width = "100px";
// ex5.style.color = "white"
// ex5.style.padding = "5px 10px";
// ex5.style.textAlign = "center"
// ex5.style.margingTop = "15px"
// ex5.style.marginBottom = "15px"

// example1.onlick = example;
// example1.addEventListener('click', example);
// example1.addEventListener('click', );

// function example(){
//     alert("Clicked")
// }

// let btn = document.querySelector("button")
// btn.addEventListener('click', function(){
//    this.style.backgroundColor = "red"
// }
//  );

// let h1 = document.querySelector("h1");
// h1.innerText = "0";
// art.append(h1);

// let btn = document.querySelector(".ex1");
// btn.innerText = "Нажми";
// btn.addEventListener("click", function () {
//   this.style.backgroundColor = "red";
//   if ((i == h1, i >= h1, i <= h1, i++)) {
//     document.write(h1);
//   }
// });

//     function printCount(number){
//       for (i = 1; i <= number; i++){
//          printLine(i)
//       }
//   }


// let h1 = document.createElement('h1');
// h1.innerText = 0;
// document.body.before(h1);
// let num = 0;
/////////////////////////
// let ul = document.createElement('ul');
// for(let i = 1; i <= 5; i++){
//     let li = document.createElement('li');
//     let button = document.createElement('button');
//     button.id = "#example";
//     button.innerText = "Example" + i;
//     li.append(button);
//     ul.append(li);
// }
// document.body.before(ul);
//////////////



















let colorButton = document.querySelector(".color");
let increaseButton = document.querySelector(".size-plus");
let decreaseButton = document.querySelector(".size-minus");
let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");

let header = document.querySelector("h1");
header.innerText = 0;
let num = 0;

colorButton.addEventListener("click", function(){
    header.style.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

})

increaseButton.addEventListener("click", function(){
    num ++;
    header.style.fontSize = num + "5px";
})
decreaseButton.addEventListener("click", function(){
    num --;
    header.style.fontSize = num + "5px";
})

plusButton.addEventListener("click", function(){
    num ++;
    header.innerText = num;

})

minusButton.addEventListener("click", function(){
    num --;
    header.innerText = num;
})