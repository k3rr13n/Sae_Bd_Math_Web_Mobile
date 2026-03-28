import VolsProvider from "../../services/VolsProvider.js";
import { JSON_TERMINAL } from "../../config.js"

export default class TerminalCRUD {
    static createTerminal = async ()=> {
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
        }
    }

    static updateTerminal = async ()=> {
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
        }
    }

    static deleteTerminal = async ()=> {
        // Récuperation des données
        let element_id = document.getElementById("delete").value;

        //Envois des données
        let update_task = await fetch(`${JSON_TERMINAL}/${element_id}`, {
            method: "DELETE"
        });
    }
}


    // Ajout en json pour un nouveau terminal
    // if(request.operation == "terminaux" && request.id == null && document.getElementById("delete") == null){
    //     // Récuperation des données
    //     let nom_aeroport = document.getElementById("nom_aeroport").value;
    //     let nom_terminal = document.getElementById("nom_terminal").value;
    //     //Vérification des données
    //     let corect_data = await VolsProvider.is_nom_aeroport(nom_aeroport)
    //     if(corect_data == false){
    //         alert(`'${nom_aeroport}' wasn't an existing airport for "nom_aeroport"`);
            
    //     }
    //     if(corect_data == true){
    //         //Envois des données
    //         let data = VolsProvider.getTerminalJson(nom_aeroport, nom_terminal)

    //         let update_task = await fetch(JSON_TERMINAL, {
    //             method: "POST",
    //             headers: {"Content-Type": "application/json"},
    //             body: JSON.stringify(data)
    //         })

    //         content.innerHTML = await (new TerminalAll).render();
    //     }
    // }
    // Modification en json pour un terminal
    // else if(request.operation == "terminaux" && request.id != null){

    // }
    // // Suppression en json pour un terminal
    // else if(request.operation == "terminaux" && request.id == null && document.getElementById("delete") != null){
    //     // Récuperation des données
    //     let element_id = document.getElementById("delete").value;

    //     //Envois des données
    //     let update_task = await fetch(`${JSON_TERMINAL}/${element_id}`, {
    //         method: "DELETE"
    //     });

    //     content.innerHTML = await (new TerminalAll).render();
    
    // }