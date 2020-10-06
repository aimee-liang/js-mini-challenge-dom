/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
// document.getElementById("header").style.color = #FFFFFF; 

header.style.color = "red";

/***** Deliverable 3 *****/
function displayPlayers(PLAYERS){
    // declare const assigned to the player-container class
    const playerClass = document.querySelector(".player-container");
    // iterate through each element in the players array
        for (const player of PLAYERS){
        // create a new element inside playerClass
            const playersDiv = document.createElement('div');
            // in the new playersDiv, create a list 
                playersDiv.classList.add("player");
                playersDiv.setAttribute("data-number", `${player.number}`);

                playersDiv.innerHTML = `
                    <h4>${player.name}</h4>
                    <h4>${player.nickname}</h4>
                    <img src="${player.photo}">
                `;
                
        playerClass.append(playersDiv)
    };
}

displayPlayers(PLAYERS)

/***** Deliverable 4 *****/

function removeMe(){
// find the element that doesn't belong by assigning it to a constant and querying it
    const wrongGuy = document.querySelector(`[data-number='7']`);
// .remove()
    wrongGuy.remove();
}
removeMe()