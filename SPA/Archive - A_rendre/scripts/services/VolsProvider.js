import { API } from "../config.js";
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
            // console.log(json.vols[id-1])
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
            // console.log(json.vols[id-1])
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
            // console.log(json.vols[id-1])
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
            // console.log(json.vols[id-1])
            return new_data; 
            
        } catch (error) {
            console.error(error); 
        }
    }    
}