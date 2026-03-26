import VolsProvider from "./../services/VolsProvider.js";
import Utils from "./../services/Utils.js";

export default class VilleUpdate{
    async render(){

        let request = Utils.parsRequestURL();

        let ville = await VolsProvider.getVille(request.id); // Ajouter l'id ou un moyen distinctif

        let view = `
            <section class="sections">
                <h1>VilleUpdate</h1>   
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>L'id de la ville :</label>
                            <input type="number" min="1" id="id_ville" value="${ville.id_ville}"></input>

                        <label>L'id du pays :</label>
                            <input type="number" min="1" id="id_pays" value="${ville.id_pays}"></input>

                        <label>Le nom de la ville :</label>
                            <input type="text" id="nom_ville" value="${ville.nom_ville}"></input>
                            <input type="hidden" id="id" value="${ville.id}">
                        <input type="submit" onclick="window.location.href='/#/villes/${request.id}'">
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