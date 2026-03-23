import VolsProvider from "./../services/VolsProvider.js";

export default class AeroportsShow{
    async render(){

        let aeroport = await VolsProvider.getAeroport(); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>AeroportShow</h1>   
                <div class="element">
                    <p>Nom aeroport : ${aeroport.nom_aeroport}</p>
                    <p>Id ville : ${aeroport.id_ville}</p>
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