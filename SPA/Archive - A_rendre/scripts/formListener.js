import Utils from "./services/Utils.js";
import VolsProvider from "./services/VolsProvider.js";
import { JSON_AEROPORT } from "./config.js"
import AeroportsAll from "./views/AeroportsAll.js";
import { JSON_TERMINAL } from "./config.js"
import TerminalAll from "./views/TerminalAll.js";
import { JSON_VILLE } from "./config.js"
import VillesAll from "./views/VillesAll.js";
import { JSON_VOL } from "./config.js"
import VolsAll from "./views/VolsAll.js";

let request = Utils.parsRequestURL();
// console.log(request)
const content = null || document.querySelector('#main');

document.addEventListener("submit", async (e) =>{
    e.preventDefault()
    
    // Ajout en json pour un nouvel aeroport
    if(request.operation == "aeroports"){
        let nom_aeroport = document.getElementById("nom_aeroport").value;
        let id_ville = document.getElementById("id_ville").value;
        let data = VolsProvider.getAeroportJson(nom_aeroport, id_ville)

        let update_task = await fetch(JSON_AEROPORT, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        content.innerHTML = await (new AeroportsAll).render();
    }
    // Ajout en json pour un nouveau terminal
    else if(request.operation == "terminaux"){
        let nom_aeroport = document.getElementById("nom_aeroport").value;
        let nom_terminal = document.getElementById("nom_terminal").value;
        let data = VolsProvider.getTerminalJson(nom_aeroport, nom_terminal)

        let update_task = await fetch(JSON_TERMINAL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        content.innerHTML = await (new TerminalAll).render();
    }
    // Ajout en json pour une nouvelle ville
    else if(request.operation == "villes"){
        let id_ville = document.getElementById("id_ville").value;
        let id_pays = document.getElementById("id_pays").value;
        let nom_ville = document.getElementById("nom_ville").value;
        let data = VolsProvider.getVilleJson(id_ville, id_pays, nom_ville)

        let update_task = await fetch(JSON_VILLE, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        content.innerHTML = await (new VillesAll).render();
    }
    // Ajout en json pour un nouveau vol
    else if(request.operation == "vols"){
        let nom_compagnie = document.getElementById("nom_compagnie").value;
        let numero_vol = document.getElementById("numero_vol").value;
        let date_heure_depart = document.getElementById("date_heure_depart").value;
        let date_heure_arrivee_prevue = document.getElementById("date_heure_arrivee_prevue").value;
        let terminal_depart = document.getElementById("terminal_depart").value;
        let terminal_arrivee = document.getElementById("terminal_arrivee").value;
        let aeroport_depart = document.getElementById("aeroport_depart").value;
        let aeroport_arrivee = document.getElementById("aeroport_arrivee").value;
        let data = VolsProvider.getVolJson(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee)

        let update_task = await fetch(JSON_VOL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        content.innerHTML = await (new VolsAll).render();
    }
})
