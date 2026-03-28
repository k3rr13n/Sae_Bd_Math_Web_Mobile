import VolsProvider from "../../services/VolsProvider.js";
import { JSON_AEROPORT } from "../../config.js"

export default class AeroportCRUD {
    static createAeroport = async ()=> {
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
        }
    }

    static updateAeroport = async ()=> {
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
        }
    }

    static deleteAeroport = async ()=> {
        // Récuperation des données
        let element_id = document.getElementById("delete").value;
        
        //Envois des données
        let update_task = await fetch(`${JSON_AEROPORT}/${element_id}`, {
            method: "DELETE"
        });
    }
}
