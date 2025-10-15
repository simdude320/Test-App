// Select the div where UI elements will go
const appDiv = document.getElementById("app");

// Create a button dynamically
const button = document.createElement("button");
button.textContent = "Click Me";
button.onclick = () => alert("Button Clicked!");

// Add button to the app div
appDiv.appendChild(button);