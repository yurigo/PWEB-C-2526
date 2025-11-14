
const a = 20;
let c = 30;
let b = 8;
// a = 4;
b = "pepito";
b = true;
console.log("el valor de b es: " , b);

// 
const tituloH1 = document.getElementById("titulo");
tituloH1.style.backgroundColor = "salmon";


let num = 6;
console.log("num es:" , typeof(num), num)

let string = "lorem ipsum dolor sit amet";
console.log("string es:" , typeof(string), string)

let bool = true;
console.log("bool es:" , typeof(bool), bool)

let und;
console.log("und es:" , typeof(und), und)

let nulo = null;
console.log("nulo es:" , typeof(nulo) , nulo)

const arr = [1,2,3,4,5,6,true,"hola",null,[3,4,5]];

console.log("--->" , arr[7]);

const obj = {
    unakey: "y el value",
    otrakey: 4,
    otrakeymas: {
        a: 10,
        b: 20,
        c: 30
    },
    arr: arr
};

console.log(obj.otrakeymas.a, ": " , obj.arr[9][0])


let cosaRara = "hola".toUpperCase().split("");
console.log(cosaRara.push("6"))
console.log(cosaRara.push("7"))
console.log(cosaRara)

cosaRara = cosaRara.reverse();

console.log(cosaRara)

cosaRara = cosaRara.join("") + "lorem ipsum";

console.log(cosaRara)

console.log(Math.sqrt(4))
console.log(Math.PI)
console.log(Math.E)
console.log(Math.floor(7.8))
console.log(Math.abs(-7.8))
console.log(Math.random())

let _$6 = 9;

let unaVariable;
let unavariable;

if ( 2 == "2"){
    console.log("soy igual porque me paso por el forro el tipo");
}


if ( 2 === "2"){

}
else if( 3 === "3"){

}
else{
    console.log("bieeeeeeen!");
}


const test2 = "algo";

const test = test2 || "hola";

console.log(test)


const varia = true;

let www = varia 
    ? "es true" 
    : "es false";


const listaDeLaCompra = ["leche", "cacao", "avellanas" , "azucar"];

console.log(listaDeLaCompra);

for (let index = 0; index < listaDeLaCompra.length; index++) {
    const element = listaDeLaCompra[index];
    console.log(element)
}

for (const element of listaDeLaCompra) {
    console.log(element)
}

let index = 0
while(true){
    index++;
    if (index === 5) continue;
    console.log("." , index);
    if (index === 10) break;
}

index = 0;
for(;;){
    index++;
    if (index === 5) continue;
    console.log("." , index);
    if (index === 10) break;
}

console.log('b' + 'a' + + 'a' + 'a');



function bubblesortOnce(a) {
    console.log(a)
    for (let i = 0 ; i < a.length - 1 ; i++){
        console.log("x", i)
        console.log("x", a)
        if (a[i] > a[i+1]) a = swap(a, i, i+1);
    }
    return a;
}

function swap(arr , i, j){
    const x = arr[i]
    arr[i] = arr[j]
    arr[j]  = x
    return arr;
}

bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])