const myHeading = document.getElementById("myTitle");
myHeading.textContent = "Coding Some Basic Javascript";

function searchFunction() {
    const result = document.getElementById("search").value;
    console.log(result);
}


const form = document.getElementById("tigerPhoto");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let resultText = document.getElementById("tiger").value;
    console.log(resultText)
});

// function photoText() {
//     let resultText = document.getElementById("tiger").value;
//     console.log(resultText);
// }
