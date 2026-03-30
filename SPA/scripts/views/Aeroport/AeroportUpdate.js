import VolsProvider from "../../services/VolsProvider.js";
import Utils from "../../services/Utils.js";

export default class AeroportUpdate{
    async render(){

        let request = Utils.parsRequestURL();

        const url_aeroport = JSON.parse(localStorage.getItem(`aeroport_data_${request.id}`));

        let aeroport = await VolsProvider.getAeroport(url_aeroport['nom_aeroport']);
        
        let view = `
            <section class="sections">
                <h1>AeroportUpdate</h1>   
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>Le nom de l'aeroport :</label>
                            <input type="text" id="nom_aeroport" value="${aeroport.nom_aeroport}"></input>

                        <label>L'id de la ville de l'aeroport :</label>
                            <input type="number" min="1" id="id_ville" value="${aeroport.id_ville}"></input>
                        <input type="submit" onclick="window.location.href='/#/aeroports/${request.id}'">
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
        nom_aeroport: "Charle de gaulle",
        id_ville: 1
    },
    {
        nom_aeroport: "Paris-Orly",
        id_ville: 1
    },
    {
        nom_aeroport: "Shanghai-Pudong",
        id_ville: 2
    },
    {
        nom_aeroport: "Rio de Janeiro-Galeão",
        id_ville: 3
    }
]
*/