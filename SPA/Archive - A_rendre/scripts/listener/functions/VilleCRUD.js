import VolsProvider from "../../services/VolsProvider.js";
import { JSON_VILLE } from "../../config.js"

export default class VilleCRUD {
    static createVille = async ()=> {
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
        }
    }

    static updateVille = async ()=> {
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
        }
    }

    static deleteVille = async ()=> {
        // Récuperation des données
        let element_id = document.getElementById("delete").value;

        //Envois des données
        let update_task = await fetch(`${JSON_VILLE}/${element_id}`, {
            method: "DELETE"
        });
    }
}
