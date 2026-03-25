import Utils from "./services/Utils.js";
import VolsProvider from "./services/VolsProvider.js";
import { JSON_AEROPORT } from "./config.js"
import AeroportsAll from "./views/AeroportsAll.js";


let request = Utils.parsRequestURL();
const content = null || document.querySelector('#main');

document.addEventListener("submit", async (e) =>{
    e.preventDefault()
    
    console.log(document.getElementById("nom_aeroport"))
    let nom_aeroport = document.getElementById("nom_aeroport").value;
    let id_ville = document.getElementById("id_ville").value;
    let data = VolsProvider.getAeroportJson(nom_aeroport, id_ville)
    // console.log(data)

    let update_task = await fetch(JSON_AEROPORT, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    console.log(update_task)

    content.innerHTML = await (new AeroportsAll).render();
})
