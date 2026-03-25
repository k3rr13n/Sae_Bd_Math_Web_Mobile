import VolsProvider from "./../services/VolsProvider.js";

export default class AeroportsAll{
    async render(){

        let aeroports = await VolsProvider.getAeroports();

        let view = `
            <section class="sections">
                <h1>AeroportsAll</h1>
                <a href="/#/aeroports/create"><button class="btn-create">Ajouter un nouvel aeroport</button></a>
                ${aeroports.map((aeroport, i) => `
                    <a href="/#/aeroports/${i+1}">
                        <div class="element">
                            <table>
                                <thead>
                                    <td>Aeroport</td>
                                    <td>Id Ville</td>
                                <thead>
                                <tbody>
                                    <td>${aeroport.nom_aeroport}</td>
                                    <td>${aeroport.id_ville}</td>
                                <tbody>
                            </table>
                        </div>
                    </a>
                `).join("")}
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