import VolsProvider from "./../services/VolsProvider.js";

export default class VolsShow{
    async render(){

        let vol = await VolsProvider.getVol(); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>VolsShow</h1>   
                <div class="element">
                    <p>Nom compagnie : ${vol.nom_compagnie}</p>
                    <p>Numero de vol : ${vol.numero_vol}</p>
                    <p>Date de départ : ${vol.date_heure_depart}</p>
                    <p>Date d'arrivée : ${vol.date_heure_arrivee_prevue}</p>
                    <p>Terminal de départ : ${vol.terminal_depart}</p>
                    <p>Terminal d'arrivée : ${vol.terminal_arrivee}</p>
                    <p>Aeroport de départ : ${vol.aeroport_depart}</p>
                    <p>Aeroport d'arrivée : ${vol.aeroport_arrivee}</p>
                </div>
            </section>
        `;
        return view;
    }
}

/*
[
    {
        nom_compagnie: "Air austral",
        numero_vol: 11215,
        date_heure_depart: "2026-05-10 20:00:14",
        date_heure_arrivee_prevue: "2026-05-10 21:00:01",
        terminal_depart: "J",
        terminal_arrivee: "56",
        aeroport_depart: "Tontouta",
        aeroport_arrivee: "Hamilton"
    },
    {
        nom_compagnie: "Air China",
        numero_vol: 45678,
        date_heure_depart: "2025-02-17 15:00:00",
        date_heure_arrivee_prevue: "2025-02-17 23:30:00",
        terminal_depart: "1",
        terminal_arrivee: "3",
        aeroport_depart: "Benito Juarez",
        aeroport_arrivee: "Indira Gandhi"
    },
    {
        nom_compagnie: "Air france",
        numero_vol: 54123,
        date_heure_depart: "2025-01-03 15:32:12",
        date_heure_arrivee_prevue: "2025-01-03 19:32:12",
        terminal_depart: "E",
        terminal_arrivee: "F",
        aeroport_depart: "Charle de gaulle",
        aeroport_arrivee: "Shanghai-Pudong"
    }
]
*/