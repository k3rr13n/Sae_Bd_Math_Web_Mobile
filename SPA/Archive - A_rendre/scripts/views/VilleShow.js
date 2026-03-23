import VolsProvider from "./../services/VolsProvider.js";

export default class VillesShow{
    async render(){

        let ville = await VolsProvider.getVille(); // Ajouter l'id ou un moyen distinctif

        let view = `
            <section class="sections">
                <h1>VillesShow</h1>   
                <div class="element">
                    <p>Nom ville : ${ville.nom_ville}</p>
                    <p>Id ville : ${ville.id_ville}</p>
                    <p>Id pays : ${ville.id_pays}</p>
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