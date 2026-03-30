import VolsProvider from "../../services/VolsProvider.js";
import Utils from "../../services/Utils.js";

export default class VolsShow{
    async render(){

        let request = Utils.parsRequestURL();

        const url_vol = JSON.parse(localStorage.getItem(`vol_data_${request.id}`));
        // console.log(url_vol['nom_compagnie'], url_vol['numero_vol'], url_vol['date_heure_depart'])

        let vol = await VolsProvider.getVol(url_vol['nom_compagnie'], url_vol['numero_vol'], url_vol['date_heure_depart']);
        console.log(vol)

        let view = `
            <section class="sections">
                <h1>VolsShow</h1>   
                <div class="element">
                    <table>
                        <thead>
                            <td>Compagnie</td>
                            <td>N° vol</td>
                            <td>Date de départ</td>
                            <td>Date d'arrivée</td>
                            <td>Terminal de départ</td>
                            <td>Terminal d'arrivée</td>
                            <td>Aéroport de départ</td>
                            <td>Aéroport d'arrivée</td>
                        <thead>
                        <tbody>
                            <td>${vol.nom_compagnie}</td>
                            <td>${vol.numero_vol}</td>
                            <td>${vol.date_heure_depart}</td>
                            <td>${vol.date_heure_arrive_prevue}</td>
                            <td>${vol.nom_terminal_1}</td>
                            <td>${vol.nom_terminal_2}</td>
                            <td>${vol.nom_aeroport_1}</td>
                            <td>${vol.nom_aeroport_2}</td>
                        <tbody>
                    </table>
                </div>
                <div class="btn_center">
                    <a href="/#/vols/${request.id}/update"><button class="btn-update">Modifier le vol</button></a>
                    <form method="get">
                        <input type="hidden" id="delete" value="${vol.id}">
                        <input type="submit" class="btn-delete" onclick="window.location.href='/#/vols'" value="Supprimer le vol">
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