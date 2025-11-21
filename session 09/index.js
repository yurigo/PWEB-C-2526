// ------------- fun ctions! --------------
// 
const greet = function() {
    console.log("Hello world")
}

greet();


// for(let i = 0; i< 10; i++)
{
        const elResultado = otherGreet("Alice" , "Doe");
        function otherGreet(nombre, apellido){
            console.log("Hello " + nombre + " " + apellido +" from the other side");
            return "hola";
        }
        console.log(elResultado)
}


function suma (num1 = 2, num2 = 1){
    return num1 + num2;
}

console.log(suma(undefined,6));

const saludar = (nombre, edad) => "Hola, " + nombre;

console.log(saludar("Pepito"));


function a(){
    return 0
}

const b = function(){
    return 0
}

const c = () => 0;


console.clear();

// arrays


const compra = [
    "leche",
    "cacao",
    "avellanas",
    "salmon"
]

console.log(compra)
compra.push("azucar")
compra.pop();
compra.unshift("azucar");
compra.pop();

// const result = compra.find(
//     function(elemento){
//         return elemento === "leche";
//     }
// )

// const result = compra.filter(
//     function(elemento){
//         return elemento.length === 5;
//     }
// )

const result = compra.filter((e) => e.length === 5);

console.log(result);


let usuarios = [
    {
        id: 1,
        name: "Alice",
        age: 18
    },
    {
        id: 2,
        name: "Bob",
        age: 26
    },
    {
        id: 3,
        name: "Charlie",
        age: 20
    },
    {
        id: 4,
        name: "Dave",
        age: 10
    },
    {
        id: 5,
        name: "Eevee",
        age: 19
    },
    {
        id: 6,
        name: "Frank",
        age: 8
    },
]


console.log(usuarios)

const mayoresDeEdad = usuarios.filter((e)=>e.age >= 18)
console.log(mayoresDeEdad)

usuarios = usuarios.filter((e) => e.id !== 2);
console.log(usuarios)


const numeros = [1,2,3,4,5,6,7,8];

const numerosMapeados = numeros.map((e) => e * 2);

console.log(numerosMapeados);




const usuariosMapeados = usuarios.map((e) => {
    return {
        name: e.name,
        age: e.age,
        timestamp: new Date()
    }
})

console.log(usuariosMapeados);






