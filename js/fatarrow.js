

// 1 Funtion Defination

function myFuntionA(n){  // this is a formal arguments
    // function body
    console.log("hello "+n+" how are you ?");
}

// Function calling/Invoking        call/invoke

myFuntionA("javed hussain"); // this is actual arguments

// Functio Defination  

let myFunctionC= (name)=>{
    console.log("hello "+name+" how are you ?");
}

// function calling/Invoke

myFunctionC("sharik");

// Spread/copy operator
let a = ['javed','sharik','rajab'];
console.log(a);

let b = [...a,'Anas','Bulli','little','shanawaz'];

console.log(b);

// An array is a special variable

let c = ['An'];
let d = [...c,'array'];
let e = [...d,'is'];
let f = [...e,'a'];
let g = [...f,'special'];
let h = [...g,'variable'];

console.log(h);

var peragraph = " ";
for(var i =0; i<h.length; i++){
    console.log(h[i]);
     peragraph = peragraph + h[i]+" ";
}

console.log(peragraph);