/* Harjoitus 1 */
let taskOneHeading = document.querySelector("#taskOneHeading");
let animalText = document.querySelector("#animalText");

let changeHeadingButton = document.querySelector("#changeHeadingButton");
let changeStyleButton = document.querySelector("#changeStyleButton");
let changeTextButton = document.querySelector("#changeTextButton");

changeHeadingButton.addEventListener("click", function() {
    taskOneHeading.innerHTML = ("Muokattu otsikko!");
})

changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
})

changeTextButton.addEventListener("click", function() {
    animalText.textContent = ("Valaat ovat maailman suurimpia eläimiä.");
})

/* Harjoitus 2 */

function showAnimalButton() {
    let animalContent = document.getElementById("animalContent");

    animalContent.innerHTML = "";
    animalContent.style.display = "";

    let otsikko = document.createElement("h3");
    otsikko.textContent = "Päivän eläin";
    otsikko.classList.add("animal-heading");

    let kappale = document.createElement("p");
    kappale.textContent = "Tämä eläin on jänis. Se voi olla kotieläimenä itsepäinen.";

    let kuva = document.createElement("img");
    kuva.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Heimtier_004_2023_08_26.jpg/1280px-Heimtier_004_2023_08_26.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail";
    kuva.alt = "Jänis";
    kuva.width = 300;
    kuva.height = 200;

    animalContent.append(otsikko, kappale, kuva);

}

function hideAnimalButton() {
    let animalContent = document.getElementById("animalContent");
    animalContent.style.display = "none";
}

document.getElementById("showAnimalButton").addEventListener("click", showAnimalButton);
document.getElementById("hideAnimalButton").addEventListener("click", hideAnimalButton);

/* Harjoitus 3 Vissiin ois hyvä käyttää constia */

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

const animals = {
    elephant: {
        name: "Elefantti",
        image: "images/elephant.jpg",
        alt: "Elefantti",
        description: "Elefantit ovat maailman suurimpia maaeläimiä."
    },
    tiger: {
        name: "Tiikeri",
        image: "images/tiger.jpg",
        alt: "Tiikeri",
        description: "Tiikeri on uhanalainen laji."
    },
    penguin: {
        name: "Pingviini",
        image: "images/penguin.jpg",
        alt: "Pingviini",
        description: "Pingviininit eivät osaa lentää, vaikka ne ovatkin lintuja. Pingviini liikkuu vedessä nopeasti siipiensä ansiosta."
    },
    panda: {
        name: "Panda",
        image: "images/panda.jpg",
        alt: "Panda",
        description: "Pandojen ruokavaliosta 99% koostuu bambusta."
    }
}

animalSelect.addEventListener("change", function() {
    const value = animalSelect.value;
    const animal = animals[value];

    animalName.textContent = animal.name;
    animalImage.src = animal.image;
    animalImage.alt = animal.alt;
    animalDescription.textContent = animal.description;
})

animalImage.addEventListener("mouseenter", function() {
    animalImage.classList.add("image-highlight");
})

animalImage.addEventListener("mouseleave", function() {
    animalImage.classList.remove("image-highlight");
})
