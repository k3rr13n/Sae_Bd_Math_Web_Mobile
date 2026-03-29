import VolsProvider from "../../services/VolsProvider.js";
import { JSON_VILLE } from "../../config.js"

export default class VilleCRUD {
    static createVille = async ()=> {
        // Récuperation des données
        let id_pays = document.getElementById("id_pays").value;
        let nom_ville = document.getElementById("nom_ville").value;
        //Vérification des données
        let corect_data_1 = await VolsProvider.is_id_pays(id_pays)

        if(corect_data_1 == false){
            alert(`'${id_pays}' wasn't an existing country for "id_pays"`);
            
        }
        if(corect_data_1 == true){
            //Envois des données
            await VolsProvider.createVille(id_pays, nom_ville)
        }
    }

    static updateVille = async ()=> {
        // Récuperation des données
        let id_pays = document.getElementById("id_pays").value;
        let nom_ville = document.getElementById("nom_ville").value;
        let element_id = document.getElementById("id").value;
        const url_ville = JSON.parse(localStorage.getItem(`ville_data_${element_id}`));

        //Vérification des données
        let corect_data_1 = await VolsProvider.is_id_pays(id_pays)
        if(corect_data_1 == false){
            alert(`'${id_pays}' wasn't an existing country for "id_pays"`);
            
        }
        if(corect_data_1 == true){
            //Envois des données
            await VolsProvider.updateVille(url_ville['id_ville'], id_pays, nom_ville)
        }
    }

    static deleteVille = async ()=> {
        // Récuperation des données
        let element_id = document.getElementById("delete").value;
        const url_ville = JSON.parse(localStorage.getItem(`ville_data_${element_id}`));

        //Envois des données
        await VolsProvider.deleteVille(url_ville['id_ville'])
        localStorage.removeItem(`ville_data_${element_id}`)
    }
}
