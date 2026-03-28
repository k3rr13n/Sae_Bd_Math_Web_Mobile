import VolsProvider from "./../../services/VolsProvider.js";

export default class AeroportsCreate{
    async render(){

        let aeroports = await VolsProvider.getAeroports();
        
        let view = `
            <section class="sections">
                <h1>AeroportsCreate</h1>
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>Le nom de l'aeroport :</label>
                            <input type="text" id="nom_aeroport"></input>

                        <label>L'id de la ville de l'aeroport :</label>
                            <input type="number" min="1" id="id_ville"></input>
                        <input type="submit" onclick="window.location.href='/#/aeroports'">
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