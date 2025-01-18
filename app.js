//Propriété = variable rangée dans un objet

const app = {
  invaderDiv: document.querySelector(".invader"),
  form: document.querySelector("form"),
  pixelColors: document.querySelectorAll('input[type="button"]'),
  clikedColor: "",

  init: function () {
    app.form.addEventListener("submit", app.createGrid);
    app.pixelColors.forEach((pixel) => {
      pixel.addEventListener("click", app.changeColor);
    });

    app.invaderDiv.addEventListener("click", (e) => {
      if (app.clikedColor) {
        e.target.className = "";
        e.target.classList.add("square", app.clikedColor);
      }
    });
  },

  createGrid: function (submit) {
    submit.preventDefault();
    console.log(submit);
    const inputGrid = parseInt(document.querySelector(".gridSize").value);
    const inputPixel = parseInt(document.querySelector(".pixelSize").value);

    app.invaderDiv.innerHTML = "";
    for (let index = 0; index < Math.pow(inputGrid, 2); index++) {
      //math.pow = mettre un nb a une puissance. math.pow(nb qu'on veut mettre a une puissance, puissance choisie. ici 2 car on élève au carré)
      const div = document.createElement("div");
      div.classList.add("square");
      app.invaderDiv.append(div);
      app.invaderDiv.style.gridTemplateColumns = `repeat(${inputGrid}, 1fr)`;
      app.invaderDiv.style.gridTemplateRows = `repeat(${inputGrid}, 1fr)`;
      div.style.width = `${inputPixel}px`;
      div.style.height = `${inputPixel}px`;
    }
  },

  changeColor: function (e) {
    app.pixelColors.forEach((pixel) => {
      pixel.style.border = "none"; // Effacer la bordure
      pixel.style.height = "50px"; // Réinitialiser la hauteur
      pixel.style.width = "50px";
      pixel.style.transform = "";
    });
    e.target.style.border = "2px solid white";
    e.target.style.height = "55px";
    e.target.style.width = "55px";
    e.target.style.transform = "translateY(-10px)";

    app.clikedColor = e.target.className;
    //   console.log(clikedColor);
  },
};

document.addEventListener("DOMContentLoaded", app.init());
//attends que le document entier soit chargé pour lancer l'objet.
//peut être utilse si le script.src n'est pas à la fin du body. Permet d'être sur d'avoir tout ce qu'il faut
//BONNE PRATIQUE ! LE FAIRE À CHAQUE FOIS

// function checkSquare() {
//   const inputGrid = document.querySelector(".gridSize").value;
//   let sqrtGrid = Math.sqrt(inputGrid);
//   if (!Number.isInteger(sqrtGrid)) {
//     return Math.round(sqrtGrid);
//   }
// }
