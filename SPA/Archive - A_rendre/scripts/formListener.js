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
import AeroportsShow from "./views/AeroportShow.js";
import TerminalShow from "./views/TerminalShow.js";
import VillesShow from "./views/VilleShow.js";
import VolsShow from "./views/VolShow.js";

let request = Utils.parsRequestURL();
console.log(request)
const content = null || document.querySelector('#main');

document.addEventListener("submit", async (e) =>{
    e.preventDefault()
    
    // Ajout en json pour un nouvel aeroport
    if(request.operation == "aeroports" && request.id == null && document.getElementById("delete") == null){
        // Récuperation des données
        let nom_aeroport = document.getElementById("nom_aeroport").value;
        let id_ville = document.getElementById("id_ville").value;
        //Vérification des données
        let corect_data = await VolsProvider.is_id_ville(id_ville)
        if(corect_data == false){
            alert(`'${id_ville}' wasn't an existing id for "id_ville"`);
            
        }
        if(corect_data == true){
            //Envois des données
            let data = VolsProvider.getAeroportJson(nom_aeroport, id_ville)

            let update_task = await fetch(JSON_AEROPORT, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new AeroportsAll).render();
        }
    }
    // Modification en json pour un aeroport
    else if(request.operation == "aeroports" && request.id != null){
        // Récuperation des données
        let nom_aeroport = document.getElementById("nom_aeroport").value;
        let id_ville = document.getElementById("id_ville").value;
        let element_id = document.getElementById("id").value;
        //Vérification des données
        let corect_data = await VolsProvider.is_id_ville(id_ville)
        if(corect_data == false){
            alert(`'${id_ville}' wasn't an existing id for "id_ville"`);
            
        }
        if(corect_data == true){
            //Envois des données
            let data = VolsProvider.getAeroportJson(nom_aeroport, id_ville)

            let update_task = await fetch(`${JSON_AEROPORT}/${element_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new AeroportsShow).render();
        }
    }
    // Suppression en json pour un aeroport
    if(request.operation == "aeroports" && request.id == null && document.getElementById("delete") != null){
        // Récuperation des données
        let element_id = document.getElementById("delete").value;
        
        //Envois des données
        let update_task = await fetch(`${JSON_AEROPORT}/${element_id}`, {
            method: "DELETE"
        });

        content.innerHTML = await (new AeroportsAll).render();
    }




    // Ajout en json pour un nouveau terminal
    else if(request.operation == "terminaux" && request.id == null && document.getElementById("delete") == null){
        // Récuperation des données
        let nom_aeroport = document.getElementById("nom_aeroport").value;
        let nom_terminal = document.getElementById("nom_terminal").value;
        //Vérification des données
        let corect_data = await VolsProvider.is_nom_aeroport(nom_aeroport)
        if(corect_data == false){
            alert(`'${nom_aeroport}' wasn't an existing airport for "nom_aeroport"`);
            
        }
        if(corect_data == true){
            //Envois des données
            let data = VolsProvider.getTerminalJson(nom_aeroport, nom_terminal)

            let update_task = await fetch(JSON_TERMINAL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new TerminalAll).render();
        }
    }
    // Modification en json pour un terminal
    else if(request.operation == "terminaux" && request.id != null){
        // Récuperation des données
        let nom_aeroport = document.getElementById("nom_aeroport").value;
        let nom_terminal = document.getElementById("nom_terminal").value;
        let element_id = document.getElementById("id").value;
        //Vérification des données
        let corect_data = await VolsProvider.is_nom_aeroport(nom_aeroport)
        if(corect_data == false){
            alert(`'${nom_aeroport}' wasn't an existing airport for "nom_aeroport"`);
            
        }
        if(corect_data == true){
            //Envois des données
            let data = VolsProvider.getTerminalJson(nom_aeroport, nom_terminal)

            let update_task = await fetch(`${JSON_TERMINAL}/${element_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new TerminalShow).render();
        }
    }
    // Suppression en json pour un terminal
    else if(request.operation == "terminaux" && request.id == null && document.getElementById("delete") != null){
        // Récuperation des données
        let element_id = document.getElementById("delete").value;

        //Envois des données
        let update_task = await fetch(`${JSON_TERMINAL}/${element_id}`, {
            method: "DELETE"
        });

        content.innerHTML = await (new TerminalAll).render();
    
    }




    // Ajout en json pour une nouvelle ville
    else if(request.operation == "villes" && request.id == null && document.getElementById("delete") == null){
        // Récuperation des données
        let id_ville = document.getElementById("id_ville").value;
        let id_pays = document.getElementById("id_pays").value;
        let nom_ville = document.getElementById("nom_ville").value;
        //Vérification des données
        let corect_data_1 = await VolsProvider.is_id_ville(id_ville)
        let corect_data_2 = await VolsProvider.is_id_pays(id_pays)
        if(corect_data_1 == false){
            alert(`'${id_ville}' wasn't an existing city for "id_ville"`);
            
        }
        if(corect_data_2 == false){
            alert(`'${id_pays}' wasn't an existing country for "id_pays"`);
            
        }
        if(corect_data_1 == true && corect_data_2 == true){
            //Envois des données
            let data = VolsProvider.getVilleJson(id_ville, id_pays, nom_ville)

            let update_task = await fetch(JSON_VILLE, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new VillesAll).render();
        }
    }
    // Modification en json pour une ville
    else if(request.operation == "villes" && request.id != null){
        // Récuperation des données
        let id_ville = document.getElementById("id_ville").value;
        let id_pays = document.getElementById("id_pays").value;
        let nom_ville = document.getElementById("nom_ville").value;
        let element_id = document.getElementById("id").value;
        //Vérification des données
        let corect_data_1 = await VolsProvider.is_id_ville(id_ville)
        let corect_data_2 = await VolsProvider.is_id_pays(id_pays)
        if(corect_data_1 == false){
            alert(`'${id_ville}' wasn't an existing city for "id_ville"`);
            
        }
        if(corect_data_2 == false){
            alert(`'${id_pays}' wasn't an existing country for "id_pays"`);
            
        }
        if(corect_data_1 == true && corect_data_2 == true){
            //Envois des données
            let data = VolsProvider.getVilleJson(id_ville, id_pays, nom_ville)

            let update_task = await fetch(`${JSON_VILLE}/${element_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new VillesShow).render();
        }
    }
    // Suppression en json pour une ville
    else if(request.operation == "villes" && request.id == null && document.getElementById("delete") != null){
        // Récuperation des données
        let element_id = document.getElementById("delete").value;

        //Envois des données
        let update_task = await fetch(`${JSON_VILLE}/${element_id}`, {
            method: "DELETE"
        });

        content.innerHTML = await (new VillesAll).render();
    }




    // Ajout en json pour un nouveau vol
    else if(request.operation == "vols" && request.id == null && document.getElementById("delete") == null){
        // Récuperation des données
        let nom_compagnie = document.getElementById("nom_compagnie").value;
        let numero_vol = document.getElementById("numero_vol").value;
        let date_heure_depart = document.getElementById("date_heure_depart").value;
        let date_heure_arrivee_prevue = document.getElementById("date_heure_arrivee_prevue").value;
        let terminal_depart = document.getElementById("terminal_depart").value;
        let terminal_arrivee = document.getElementById("terminal_arrivee").value;
        let aeroport_depart = document.getElementById("aeroport_depart").value;
        let aeroport_arrivee = document.getElementById("aeroport_arrivee").value;
        //Vérification des données
        let corect_data_1 = await VolsProvider.is_nom_compagnie(nom_compagnie)
        let corect_data_2 = await VolsProvider.is_nom_terminal(terminal_depart, aeroport_depart)
        let corect_data_3 = await VolsProvider.is_nom_terminal(terminal_arrivee, aeroport_arrivee)
        let corect_data_4 = await VolsProvider.is_nom_aeroport(aeroport_depart)
        let corect_data_5 = await VolsProvider.is_nom_aeroport(aeroport_arrivee)

        let corect_format_1 = VolsProvider.is_valid_date(date_heure_depart)
        let corect_format_2 = VolsProvider.is_valid_date(date_heure_arrivee_prevue)

        if(corect_data_1 == false){
            alert(`'${nom_compagnie}' wasn't an existing airline for "nom_compagnie"`);
            
        }
        if(corect_data_2 == false){
            alert(`'${terminal_depart}' wasn't an existing terminal for "terminal_depart"`);
            
        }
        if(corect_data_3 == false){
            alert(`'${terminal_arrivee}' wasn't an existing terminal for "terminal_arrivee"`);
            
        }
        if(corect_data_4 == false){
            alert(`'${aeroport_depart}' wasn't an existing airport for "aeroport_depart"`);
            
        }
        if(corect_data_5 == false){
            alert(`'${aeroport_arrivee}' wasn't an existing airport for "aeroport_arrivee"`);
            
        }
        if(corect_format_1 == false){
            alert(`'${date_heure_depart}' wasn't in this format "yyyy-mm-dd hh:mm:ss"`);
            
        }
        if(corect_format_2 == false){
            alert(`'${date_heure_arrivee_prevue}' wasn't in this format "yyyy-mm-dd hh:mm:ss"`);
            
        }
        if(corect_data_1 == true && corect_data_2 == true && corect_data_3 == true && corect_data_4 == true && corect_data_5 == true && corect_format_1 == true && corect_format_2 == true){
            //Envois des données
            let data = VolsProvider.getVolJson(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee)

            let update_task = await fetch(JSON_VOL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new VolsAll).render();
        }
    }
    // Modification en json pour un vol
    else if(request.operation == "vols" && request.id != null){
        // Récuperation des données
        let nom_compagnie = document.getElementById("nom_compagnie").value;
        let numero_vol = document.getElementById("numero_vol").value;
        let date_heure_depart = document.getElementById("date_heure_depart").value;
        let date_heure_arrivee_prevue = document.getElementById("date_heure_arrivee_prevue").value;
        let terminal_depart = document.getElementById("terminal_depart").value;
        let terminal_arrivee = document.getElementById("terminal_arrivee").value;
        let aeroport_depart = document.getElementById("aeroport_depart").value;
        let aeroport_arrivee = document.getElementById("aeroport_arrivee").value;
        let element_id = document.getElementById("id").value;
        //Vérification des données
        let corect_data_1 = await VolsProvider.is_nom_compagnie(nom_compagnie)
        let corect_data_2 = await VolsProvider.is_nom_terminal(terminal_depart, aeroport_depart)
        let corect_data_3 = await VolsProvider.is_nom_terminal(terminal_arrivee, aeroport_arrivee)
        let corect_data_4 = await VolsProvider.is_nom_aeroport(aeroport_depart)
        let corect_data_5 = await VolsProvider.is_nom_aeroport(aeroport_arrivee)

        let corect_format_1 = VolsProvider.is_valid_date(date_heure_depart)
        let corect_format_2 = VolsProvider.is_valid_date(date_heure_arrivee_prevue)

        if(corect_data_1 == false){
            alert(`'${nom_compagnie}' wasn't an existing airline for "nom_compagnie"`);
            
        }
        if(corect_data_2 == false){
            alert(`'${terminal_depart}' wasn't an existing terminal for "terminal_depart"`);
            
        }
        if(corect_data_3 == false){
            alert(`'${terminal_arrivee}' wasn't an existing terminal for "terminal_arrivee"`);
            
        }
        if(corect_data_4 == false){
            alert(`'${aeroport_depart}' wasn't an existing airport for "aeroport_depart"`);
            
        }
        if(corect_data_5 == false){
            alert(`'${aeroport_arrivee}' wasn't an existing airport for "aeroport_arrivee"`);
            
        }
        if(corect_format_1 == false){
            alert(`'${date_heure_depart}' wasn't in this format "yyyy-mm-dd hh:mm:ss"`);
            
        }
        if(corect_format_2 == false){
            alert(`'${date_heure_arrivee_prevue}' wasn't in this format "yyyy-mm-dd hh:mm:ss"`);
            
        }
        if(corect_data_1 == true && corect_data_2 == true && corect_data_3 == true && corect_data_4 == true && corect_data_5 == true && corect_format_1 == true && corect_format_2 == true){
            //Envois des données
            let data = VolsProvider.getVolJson(nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee)

            let update_task = await fetch(`${JSON_VOL}/${element_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })

            content.innerHTML = await (new VolsShow).render();
        }
    }
    // Suppression en json pour un vol
    else if(request.operation == "vols" && request.id == null && document.getElementById("delete") != null){
        // Récuperation des données
        let element_id = document.getElementById("delete").value;

        //Envois des données
        let update_task = await fetch(`${JSON_VOL}/${element_id}`, {
            method: "DELETE"
        })

        content.innerHTML = await (new VolsAll).render();
    }
})
