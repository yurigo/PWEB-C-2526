
// console.log(window);
console.log(document);

// document.addEventListener("scroll" , (event) => {
//     console.log(event)
// } )

// document.addEventListener("click", (event) => {
//     console.log(event)
// })

document.addEventListener("mouseover", (event) => {
    const cursorFollower = document.getElementById("cursorFollower")
    // console.log(event.clientX)
    // console.log(event.clientY)
    cursorFollower.style.top = event.clientY + "px";
    cursorFollower.style.left = event.clientX + "px";



})


const pes = document.querySelectorAll("p")

console.log(pes)

const arrayPes = Array.from(pes);

console.log(arrayPes);

arrayPes.forEach((pe) => {
    pe.addEventListener("click" , (event) => {
        
        const r = Math.random() * 255;
        const g = Math.random() * 255;
        const b = Math.random() * 255;

        console.table(r,g,b)
        
        const a = "'hola'"
        //const b = 'h"ol"a'
        const d = "\"hola\""
        const c = `h${a}o${d}la`  // h'hola'o"hola"la
                                  // h'hola'o"hola"la

        console.log(c);

        // pe.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        pe.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
})

let confetti = new Confetti('submit');
// Edit given parameters
confetti.setCount(75);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(false);


const miFormulario = document.getElementById("myform");

miFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("🎉");

// Pass in the id of an element

// confetti.destroyTarget(true);


    const formData = new FormData(miFormulario);

    fetch(`https://pokeapi.co/api/v2/pokemon/${formData.get('name')}`)
        .then(e => e.json())
        .then(e => {
            console.log(e.sprites.front_default)
            const pokeImage = document.getElementById("pokeImage");
            pokeImage.src = e.sprites.front_default 
        })

    

})



