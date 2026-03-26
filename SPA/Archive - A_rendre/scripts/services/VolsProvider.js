import { API, JSON_COMPAGNIE, JSON_PAYS } from "../config.js";
import { JSON_VOL } from "../config.js";
import { JSON_VILLE } from "../config.js";
import { JSON_AEROPORT } from "../config.js";
import { JSON_TERMINAL } from "../config.js";

export default class VolsProvider {
    static fetchVols = async (page)=> {
        try {
            const response = await fetch(`${API}/`); 
            const json = await response.json();
            return json.data; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    // Methodes des vols
    static getVols = async () => {
        try {
            const response = await fetch(`${JSON_VOL}/`); 
            const json = await response.json();
            return json; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getVol = async (id) => {
        try {
            const response = await fetch(`${JSON_VOL}/`);
            const json = await response.json();
            // console.log(json.vols[id-1])
            return json[id-1]; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getVolJson = (nom_compagnie, numero_vol, date_heure_depart, date_heure_arrivee_prevue, terminal_depart, terminal_arrivee, aeroport_depart, aeroport_arrivee) => {
        try {
            let new_data = {}
            new_data['nom_compagnie'] = nom_compagnie
            new_data['numero_vol'] = numero_vol
            new_data['date_heure_depart'] = date_heure_depart
            new_data['date_heure_arrivee_prevue'] = date_heure_arrivee_prevue
            new_data['terminal_depart'] = terminal_depart
            new_data['terminal_arrivee'] = terminal_arrivee
            new_data['aeroport_depart'] = aeroport_depart
            new_data['aeroport_arrivee'] = aeroport_arrivee
            return new_data; 
            
        } catch (error) {
            console.error(error); 
        }
    }   

    // Methodes des villes
    static getVilles = async () => {
        try {
            const response = await fetch(`${JSON_VILLE}/`); 
            const json = await response.json();
            return json; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getVille = async (id) => {
        try {
            const response = await fetch(`${JSON_VILLE}/`);
            const json = await response.json();
            // console.log(json.vols[id-1])
            return json[id-1]; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getVilleJson = (id_ville, id_pays, nom_ville) => {
        try {
            let new_data = {}
            new_data['id_ville'] = id_ville
            new_data['id_pays'] = id_pays
            new_data['nom_ville'] = nom_ville
            // console.log(json.vols[id-1])
            return new_data; 
            
        } catch (error) {
            console.error(error); 
        }
    }    

    // Methodes des aeroports
    static getAeroports = async () => {
        try {
            const response = await fetch(`${JSON_AEROPORT}/`); 
            const json = await response.json();
            return json; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getAeroport = async (id) => {
        try {
            const response = await fetch(`${JSON_AEROPORT}/`);
            const json = await response.json();
            return json[id-1]; 
            
        } catch (error) {
            console.error(error); 
        }
    }    
    
    static getAeroportJson = (nom_aeroport, id_ville) => {
        try {
            let new_data = {}
            new_data['nom_aeroport'] = nom_aeroport
            new_data['id_ville'] = id_ville
            return new_data; 
            
        } catch (error) {
            console.error(error); 
        }
    }
    
    // Methodes des terminaux
    static getTerminaux = async () => {
        try {
            const response = await fetch(`${JSON_TERMINAL}/`); 
            const json = await response.json();
            return json; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getTerminal = async (id) => {
        try {
            const response = await fetch(`${JSON_TERMINAL}/`);
            const json = await response.json();
            return json[id-1]; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getTerminalJson = (nom_aeroport, nom_terminal) => {
        try {
            let new_data = {}
            new_data['nom_aeroport'] = nom_aeroport
            new_data['nom_terminal'] = nom_terminal
            return new_data; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    // Verification de données
    static is_id_ville = async (id_ville) => {
        let villes = await this.getVilles()
        let bool = false
        villes.forEach(ville => {
            if(id_ville == ville.id_ville){
                bool = true
            }
        });
        return bool
    }

    static is_nom_aeroport = async (nom_aeroport) => {
        let aeroports = await this.getAeroports()
        let bool = false
        aeroports.forEach(aeroport => {
            if(nom_aeroport == aeroport.nom_aeroport){
                bool = true
            }
        });
        return bool
    }

    static is_id_pays = async (id_pays) => {
        let payss = await this.getPayss()
        let bool = false
        payss.forEach(pays => {
            if(id_pays == pays.id_pays){
                bool = true
            }
        });
        return bool
    }

    static is_nom_compagnie = async (nom_compagnie) => {
        let compagnies = await this.getCompagnies()
        let bool = false
        compagnies.forEach(compagnie => {
            if(nom_compagnie == compagnie.nom_compagnie){
                bool = true
            }
        });
        return bool
    }

    static is_nom_terminal = async (nom_terminal, nom_aeroport) => {
        let terminaux = await this.getTerminaux()
        let bool = false
        terminaux.forEach(terminal => {
            if(nom_terminal == terminal.nom_terminal && nom_aeroport == terminal.nom_aeroport){
                bool = true
            }
        });
        return bool
    }

    static is_valid_date = (date) => {
        let bool = false
        var regex = new RegExp("^(\\d{4})\\-(0?[1-9]|1[012])\\-(0?[1-9]|[12][0-9]|3[01]) ([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$");
        if(regex.test(date)){
            bool = true
        }
        return bool
    }

//=:=:=:=:==:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=

    static getPayss = async () => {
        try {
            const response = await fetch(`${JSON_PAYS}/`); 
            const json = await response.json();
            return json; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getCompagnies = async () => {
        try {
            const response = await fetch(`${JSON_COMPAGNIE}/`); 
            const json = await response.json();
            return json; 
            
        } catch (error) {
            console.error(error); 
        }
    }
}