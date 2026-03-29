import VolsProvider from "../../services/VolsProvider.js";
import Utils from "../../services/Utils.js";

export default class VillesShow{
    async render(){

        let request = Utils.parsRequestURL();

        const url_ville = JSON.parse(localStorage.getItem(`ville_data_${request.id}`));
        console.log(url_ville['id_ville'])

        let ville = await VolsProvider.getVille(url_ville['id_ville']); // Ajouter l'id ou un moyen distinctif

        let view = `
            <section class="sections">
                <h1>VillesShow</h1>   
                <div class="element">
                    <table>
                        <thead>
                            <td>Id Ville</td>
                            <td>Ville</td>
                            <td>Id Pays</td>
                        <thead>
                        <tbody>
                            <td>${ville.id_ville}</td>
                            <td>${ville.nom_ville}</td>
                            <td>${ville.id_pays}</td>
                        <tbody>
                    </table>
                </div>
                <div class="btn_center">
                    <a href="/#/villes/${request.id}/update"><button class="btn-update">Modifier la ville</button></a>
                    <form method="get">
                        <input type="hidden" id="delete" value="${request.id}">
                        <input type="submit" class="btn-delete" onclick="window.location.href='/#/villes'" value="Supprimer la ville">
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
        id_ville: 1,
        id_pays: 1,
        nom_ville: "Paris"
    },
    {
        id_ville: 2,
        id_pays: 2,
        nom_ville: "Shanghai"
    },
    {
        id_ville: 3,
        id_pays: 3,
        nom_ville: "Rio de Janeiro"
    },
    {
        id_ville: 4,
        id_pays: 4,
        nom_ville: "New York"
    }
]
*/