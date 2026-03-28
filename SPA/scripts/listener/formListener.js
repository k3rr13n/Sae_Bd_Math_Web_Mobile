// Services
import Utils from "../services/Utils.js";
// Aeroport
import AeroportsAll from "../views/Aeroport/AeroportsAll.js";
import AeroportsShow from "../views/Aeroport/AeroportShow.js";
import AeroportCRUD from "./functions/AeroportCRUD.js";
// Terminal
import TerminalAll from "../views/Terminal/TerminalAll.js";
import TerminalShow from "../views/Terminal/TerminalShow.js";
import TerminalCRUD from "./functions/TerminalCRUD.js";
// Ville
import VillesAll from "../views/Ville/VillesAll.js";
import VillesShow from "../views/Ville/VilleShow.js";
import VilleCRUD from "./functions/VilleCRUD.js";
// Vol
import VolsAll from "../views/Vol/VolsAll.js";
import VolsShow from "../views/Vol/VolShow.js";
import VolCRUD from "./functions/VolCRUD.js";

const content = null || document.querySelector('#main');

document.addEventListener("submit", async (e) =>{
    e.preventDefault()

    let request = Utils.parsRequestURL();
    console.log(request)
    
    // Opérations lié aux aeroports
    if(request.operation == "aeroports"){
        // Ajout en json pour un nouvel aeroport
        if(request.id == null && document.getElementById("delete") == null){
            await AeroportCRUD.createAeroport();
            content.innerHTML = await (new AeroportsAll).render();
        }
        // Modification en json pour un aeroport
        else if(request.id != null){
            await AeroportCRUD.updateAeroport();
            content.innerHTML = await (new AeroportsShow).render();

        }
        // Suppression en json pour un aeroport
        else if(request.id == null && document.getElementById("delete") != null){
            await AeroportCRUD.deleteAeroport();
            content.innerHTML = await (new AeroportsAll).render();

        }
    }

    // Opérations lié aux terminaux
    if(request.operation == "terminaux"){
        // Ajout en json pour un nouveau terminal
        if(request.id == null && document.getElementById("delete") == null){
            await TerminalCRUD.createTerminal();
            content.innerHTML = await (new TerminalAll).render();
        }
        // Modification en json pour un terminal
        else if(request.id != null){
            await TerminalCRUD.updateTerminal();
            content.innerHTML = await (new TerminalShow).render();
        }
        // Suppression en json pour un terminal
        else if(request.id == null && document.getElementById("delete") != null){
            await TerminalCRUD.deleteTerminal();
            content.innerHTML = await (new TerminalAll).render();
        }
    }

    // Opérations lié aux villes
    if(request.operation == "villes"){
        // Ajout en json pour une nouvelle ville
        if(request.id == null && document.getElementById("delete") == null){
            await VilleCRUD.createVille()
            content.innerHTML = await (new VillesAll).render();
        }
        // Modification en json pour une ville
        else if(request.id != null){
            await VilleCRUD.updateVille()
            content.innerHTML = await (new VillesShow).render();
        }
        // Suppression en json pour une ville
        else if(request.id == null && document.getElementById("delete") != null){
            await VilleCRUD.deleteVille()
            content.innerHTML = await (new VillesAll).render();
        }
    }

    // Opérations lié aux vols
    if(request.operation == "vols"){
        // Ajout en json pour un nouveau vol
        if(request.id == null && document.getElementById("delete") == null){
            await VolCRUD.createVol();
            content.innerHTML = await (new VolsAll).render();
        }
        // Modification en json pour un vol
        else if(request.id != null){
            await VolCRUD.updateVol();
            content.innerHTML = await (new VolsShow).render();
        }
        // Suppression en json pour un vol
        else if(request.id == null && document.getElementById("delete") != null){
            await VolCRUD.deleteVol();
            content.innerHTML = await (new VolsAll).render();
        }
    }
})
