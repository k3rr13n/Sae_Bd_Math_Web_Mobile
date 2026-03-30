import VolsProvider from "../../services/VolsProvider.js";
import Utils from "../../services/Utils.js";

export default class VolUpdate{
    async render(){

        let request = Utils.parsRequestURL();

        let vol = await VolsProvider.getVol(request.id); // Ajouter l'id ou un moyen distinctif

        let view = `
            <section class="sections">
                <h1>VolUpdate</h1>   
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>Le nom de la compagnie aerienne :</label>
                            <input type="text" id="nom_compagnie" value="${vol.nom_compagnie}"></input>

                        <label>Numero de vol :</label>
                            <input type="number" min="1" id="numero_vol" value="${vol.numero_vol}"></input>

                        <label>Date et heure de départ :</label>
                            <input type="text" id="date_heure_depart" value="${vol.date_heure_depart}"></input>

                        <label>Date et heure d'arrivée :</label>
                            <input type="text" id="date_heure_arrivee_prevue" value="${vol.date_heure_arrivee_prevue}"></input>

                        <label>Terminal de départ :</label>
                            <input type="text" id="terminal_depart" value="${vol.terminal_depart}"></input>

                        <label>Terminal d'arrivee :</label>
                            <input type="text" id="terminal_arrivee" value="${vol.terminal_arrivee}"></input>

                        <label>Aeroport de depart :</label>
                            <input type="text" id="aeroport_depart" value="${vol.aeroport_depart}"></input>

                        <label>Aeroport d'arrivee :</label>
                            <input type="text" id="aeroport_arrivee" value="${vol.aeroport_arrivee}"></input>
                            <input type="hidden" id="id" value="${vol.id}">
                        <input type="submit" onclick="window.location.href='/#/vols/${request.id}'">
                    </form>
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