// const pre = document.getElementById("output");
// const btn = document.getElementById("loadBtn");

// btn.addEventListener("click", () => {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("algo"), 1000);
//     setTimeout(() => reject("algo"), 5000);
//   });

//   myPromise
//     .then((data) => {
//       pre.textContent = `Promise resolved with data: ${data}`;
//     })
//     .catch((error) => {
//       pre.textContent = `Promise rejected with error: ${error}`;
//     });
// });

const pre = document.getElementById("output");
const btn = document.getElementById("loadBtn");

// btn.addEventListener("click", () => {
//   const elFetch = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   console.log(elFetch);

//   setTimeout(() => {
//     console.log(elFetch);
//   }, 50);

//   elFetch
//     .then((response) => response.json())
//     .then((data) => (pre.textContent = data.id))
//     .catch((error) => {
//       pre.textContent = `Fetch error: ${error}`;
//     });
// });

// btn.addEventListener("click", async () => {
//   const elFetch = fetch("https://pokasdfeapi.co/api/v2/pokemon/ditto");
//   console.log(elFetch);

//   try {
//     const response = await elFetch;
//     const data = await response.json();
//     pre.textContent = data.id;
//   } catch (error) {
//     pre.textContent = `Fetch error: ${error}`;
//   }
// });

const miFormulario = document.getElementById("pokeForm");
const body = document.body;

miFormulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(miFormulario);

  console.log(formData.get("pokeAge")); // No se usa, pero se muestra cómo obtener otro campo

  // secuencialmente una petición tras otra
  fetch(`https://pokeapi.co/api/v2/pokemon/${formData.get("pokeName")}`)
    .then((e) => e.json())
    .then((e) => {
      console.log(e.sprites.front_default);
      const pokeImage = document.getElementById("pokeImage");
      pokeImage.src = e.sprites.front_default;
      return fetch("https://yesno.wtf/api");
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.answer === "yes") {
        body.style.backgroundColor = "green";
      } else {
        body.style.backgroundColor = "red";
      }
    });

  // paralelamente ambas peticiones al mismo tiempo
  fetch(`https://pokeapi.co/api/v2/pokemon/${formData.get("pokeName")}`)
    .then((e) => e.json())
    .then((e) => {
      console.log(e.sprites.front_default);
      const pokeImage = document.getElementById("pokeImage");
      pokeImage.src = e.sprites.front_default;
    });

  fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.answer === "yes") {
        body.style.backgroundColor = "green";
      } else {
        body.style.backgroundColor = "red";
      }
    });
});

miFormulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(miFormulario);

  console.log(formData.get("pokeAge")); // No se usa, pero se muestra cómo obtener otro campo

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${formData.get("pokeName")}`
  );
  const data = await response.json();

  console.log(data.sprites.front_default);
  const pokeImage = document.getElementById("pokeImage");
  pokeImage.src = data.sprites.front_default;

  const response2 = await fetch("https://yesno.wtf/api");
  const data2 = await response2.json();

  console.log(data2);
  if (data2.answer === "yes") {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "red";
  }
});

function main() {
  fetch("./usuarios.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const textDiv = document.getElementById("text");
      textDiv.innerHTML += data
        .map((usuario) => `<p>${usuario.name} - ${usuario.email}</p>`)
        .join("");
    });

  // fetch("https://todo-server-lasalle.onrender.com/todos")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     const textDiv = document.getElementById("text");
  //     textDiv.innerHTML += data
  //       .map((todo) => `<p class="${todo.done}">${todo.text}</p>`)
  //       .join("");
  //   });
}

main();
