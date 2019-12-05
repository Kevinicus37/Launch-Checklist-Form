// Write your JavaScript code here!
window.addEventListener("load", function(){
   const pilot = document.getElementById("pilotName");
   const copilot = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   const form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         target = document.getElementById("missionTarget");
         target.innerHTML = `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">`
      })
   })

   form.addEventListener("submit", function(event){
      if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required.");
      } else if (!isNaN(Number(pilot.value)) || !isNaN(Number(copilot.value)) || isNaN(Number(fuelLevel.value)) || isNaN(Number(cargoMass.value))) {
         alert("Make sure to enter valid information for each field!");
      } else {
         let status = document.getElementById("launchStatus");
         let readyToLaunch = true;
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch.`;
         if (Number(fuelLevel.value) < 10000){
            document.getElementById("fuelStatus").innerHTML = `There is not enough fuel for this journey!`;
            readyToLaunch = false;
         }
         if (Number(cargoMass.value) > 10000){
            readyToLaunch = false;
            document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off.`;
         }
         if (!readyToLaunch){
            status.innerHTML = `Shuttle not ready for launch!`;
            status.style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
         } else {
            status.style.color = "green";
            status.innerHTML = "Shuttle is ready for launch!";
         }
      }
      event.preventDefault();
         
      
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
