// Write your JavaScript code here!
window.addEventListener("load", function(){
   const pilot = document.getElementById("pilotName");
   const copilot = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   const form = document.querySelector("form");

   form.addEventListener("submit", function(event){
      if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required.");
         event.preventDefault();
      }
   });
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
