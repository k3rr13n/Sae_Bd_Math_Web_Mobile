import VolsProvider from "../services/VolsProvider.js";

export default class VilleCreate{
    async render(){

        let villes = await VolsProvider.getVilles();

        let view = `
            <section class="sections">
                <h1>VillesCreate</h1>   
                <button class="btn-create">Ajouter une nouvelle ville</button>
                ${villes.map((ville, i) => `
                    <a href="/#/villes/${i+1}">
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