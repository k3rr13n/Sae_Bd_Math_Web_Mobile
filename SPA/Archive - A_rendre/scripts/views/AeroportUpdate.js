import VolsProvider from "./../services/VolsProvider.js";
import Utils from "./../services/Utils.js";

export default class AeroportUpdate{
    async render(){

        let request = Utils.parsRequestURL();

        let aeroport = await VolsProvider.getAeroport(request.id); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>AeroportUpdate</h1>   
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
                <div class="btn_center">
                    <button class="btn-update">Modifier l'aeroport</button>
                    <button class="btn-delete">Supprimer l'aeroport</button>
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