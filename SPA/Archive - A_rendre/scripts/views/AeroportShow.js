import VolsProvider from "./../services/VolsProvider.js";
import Utils from "./../services/Utils.js";

export default class AeroportsShow{
    async render(){
        
        let request = Utils.parsRequestURL();

        let aeroport = await VolsProvider.getAeroport(request.id); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>AeroportShow</h1>   
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
                    <a href="/#/aeroports/${request.id}/update"><button class="btn-update">Modifier l'aeroport</button></a>
                    <form method="get">
                        <input type="hidden" id="delete" value="${aeroport.id}">
                        <input type="submit" class="btn-delete" onclick="window.location.href='/#/aeroports'" value="Supprimer l'aeroport">
                    </form>
                </div>
            </section>
        `;
        return view;
    }
}
                    // <button class="btn-delete">Supprimer l'aeroport</button>

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