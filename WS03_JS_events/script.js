/* Harjoitus 1 */

function showMessage() {
    alert("You clicked me!");
}

function showTable() {
    let animal = "Jänis";
    let habitat = "Metsä";
    let diet = "Kasvit";
    let table = `
        <table id="example" class="display">
        <thead>
            <tr>
                <th>Eläin</th>
                <th>Elinympäristö</th>
                <th>Ruokavalio</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        </tbody>
    </table>
`;

document.querySelector("#tableContainer").innerHTML = table;
}

/* Harjoitus 2 */

let hoverOverTitle = document.querySelector("#hoverOverTitle");

hoverOverTitle.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

let changeColor = document.querySelector("#changeColor");

changeColor.addEventListener("click", function() {
    changeColor.style.color = "red";
    changeColor.innerHTML = ("Bye bye mouse!");
});

/* Harjoitus 3 */

let textarea = document.querySelector("#feedback");
let status = document.querySelector("#status");

textarea.addEventListener("focus", function(){
    status.innerHTML = "Kirjoitat palautetta.";
    textarea.style.backgroundColor = "lightgreen";
});

textarea.addEventListener("blur", function() {
    status.innerHTML = "";
    textarea.style.backgroundColor = "";
});

let charcount = document.querySelector("#charcount");

textarea.addEventListener("input", function(){
    charcount.innerHTML = textarea.value.length + "/200";
});

let preview = document.querySelector("#preview");

textarea.addEventListener("input", function() {
    preview.innerHTML = textarea.value;
});

/* Harjoitus 4 */

let feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function(event){
    event.preventDefault();
    let length = textarea.value.length;
    if (length < 10 || length > 200) {
    status.innerHTML = "Palautteen pitää olla 10-200 merkkiä pitkä."
} else {
    textarea.value= "";
    status.innerHTML = "Thank you for your feedback!";
}
});

/* Harjoitus 5 */

let keybox = document.querySelector("#keybox");
let keyinfo = document.querySelector("#keyinfo");

document.addEventListener("keydown", function(event) {
    console.log(event);

    keyinfo.innerHTML = `
        Näppäin: ${event.key}<br>
        Koodi: ${event.code}
    `;
    keybox.innerHTML = event.key;
    keybox.style.fontSize = "50px";
});
