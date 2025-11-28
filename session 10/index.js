const titulo = document.getElementById("titulo") // querySelector("#titulo")


titulo.innerHTML="<span>barra de </span>";
titulo.innerText="esto es lo mismo que textContent"
titulo.textContent = "4 8 15 16 23 48"

// titulo.style.backgroundColor = "rgba(234,125,78,0.2)";
// titulo.classList.add("highlight")

titulo.addEventListener("mouseover", (event) => {
    titulo.classList.add("highlight");

});

titulo.addEventListener("mouseout", (event) => {
    titulo.classList.remove("highlight");
});

const a = [1,1,2,3,5,8,13,21];

console.log(a)
const b = new Set(a);
console.log(Array.from(b))


// const borrares = document.getElementsByClassName("delete")
// console.log(borrares)
// const borraresArray = Array.from(borrares)
// borraresArray.forEach(element => {
//     element.addEventListener("click" , (event) => {
//         // event.stopImmediatePropagation();
//         console.log(event.target)
//         event.target.parentElement.remove();
//     })
//     // element.addEventListener("click" , (event) => {
//     //     console.log("se ha borrado un elemento")
//     // })
// })


const mainElement = document.querySelector("html > body > main");

// mainElement.addEventListener("click", (event) => {
//     console.log("click en main" , event.target)
//     // event.stopPropagation();
//     // event.stopImmediatePropagation();

//     if (event.target.classList.contains("delete"))
//         event.target.parentElement.remove();

//     setTimeout(()=>{
//         console.log("han pasado 3 segundos desde que me clicaste");
//     } , 3000);
// })

// mainElement.addEventListener("click", (event) => {
//     console.log("click en main" , event.target)

//     const card = event.target.closest('.card');
    
//     if (card.classList.contains("clicado")){
//         card.classList.toggle("highlight");
//         card.classList.remove("clicado");
//     }
//     else{
//         card.classList.add("clicado");
//         setTimeout(()=>{
//             card.classList.remove("clicado")
//         }, 500)
//     }

//     setTimeout(()=>{
//         console.log("han pasado 3 segundos desde que me clicaste");
//     } , 3000);
// }, false)

mainElement.addEventListener("dblclick", (event) => {
    console.log("doble click en main" , event.target)
    const card = event.target.closest('.card');
    card.classList.toggle("highlight");
}, false)


const addButton = document.getElementsByClassName("add")[0]

addButton.addEventListener("click", ()=> {
    console.log("añadir elemento")

    const newCard = document.createElement('div');
    newCard.classList.add("card")
    
    // const newTitle = document.createElement('h2');
    // newTitle.textContent = "Nueva Card";
    // newCard.appendChild(newTitle);

    newCard.innerHTML = `
            <img src="https://placecats.com/300/200" alt="gatito">
            <div class="card-content">
                <h2>Titulo de la targeta</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora explicabo nostrum dignissimos nihil, omnis perferendis incidunt placeat, alias expedita id rerum quis doloribus?
                </p>
            </div>
            <button  class="delete">X</button>`;

    mainElement.appendChild(newCard);

})

// document.addEventListener("click", (event) => {
//     console.log("click en document");
// })







