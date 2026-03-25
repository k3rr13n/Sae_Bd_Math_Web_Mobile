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
            return json.vols; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getVol = async (id) => {
        try {
            const response = await fetch(`${JSON_VOL}/`);
            const json = await response.json();
            // console.log(json.vols[id-1])
            return json.vols[id-1]; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    // Methodes des villes
    static getVilles = async () => {
        try {
            const response = await fetch(`${JSON_VILLE}/`); 
            const json = await response.json();
            return json.villes; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getVille = async (id) => {
        try {
            const response = await fetch(`${JSON_VILLE}/`);
            const json = await response.json();
            // console.log(json.vols[id-1])
            return json.villes[id-1]; 
            
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
            return json.terminaux; 
            
        } catch (error) {
            console.error(error); 
        }
    }

    static getTerminal = async (id) => {
        try {
            const response = await fetch(`${JSON_TERMINAL}/`);
            const json = await response.json();
            // console.log(json.vols[id-1])
            return json.terminaux[id-1]; 
            
        } catch (error) {
            console.error(error); 
        }
    }
}