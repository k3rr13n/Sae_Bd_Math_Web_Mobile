import VolsProvider from "../../services/VolsProvider.js";
import { JSON_VOL } from "../../config.js"

export default class VolCRUD {
    static createVol = async ()=> {
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
        }
    }

    static updateVol = async ()=> {
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
        }
    }

    static deleteVol = async ()=> {
        // Récuperation des données
        let element_id = document.getElementById("delete").value;

        //Envois des données
        let update_task = await fetch(`${JSON_VOL}/${element_id}`, {
            method: "DELETE"
        })
    }
}
