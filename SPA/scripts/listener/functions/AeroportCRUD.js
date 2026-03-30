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
            await VolsProvider.createAeroport(nom_aeroport, id_ville)
        }
    }

    static updateAeroport = async ()=> {
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
            await VolsProvider.updateAeroport(nom_aeroport, id_ville)
        }
    }

    static deleteAeroport = async ()=> {
        // Récuperation des données
        let element_id = document.getElementById("delete").value;
        const url_aeroport = JSON.parse(localStorage.getItem(`aeroport_data_${element_id}`));
        
        //Envois des données
        await VolsProvider.deleteAeroport(url_aeroport['nom_aeroport'])
        localStorage.removeItem(`aeroport_data_${element_id}`)
    }
}
