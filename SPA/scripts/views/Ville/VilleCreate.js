import VolsProvider from "../../services/VolsProvider.js";

export default class VilleCreate{
    async render(){

        let villes = await VolsProvider.getVilles();

        let view = `
            <section class="sections">
                <h1>VillesCreate</h1>   
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>L'id du pays :</label>
                            <input type="number" min="1" id="id_pays"></input>

                        <label>Le nom de la ville :</label>
                            <input type="text" id="nom_ville"></input>
                        <input type="submit" onclick="window.location.href='/#/villes'">
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