import VolsProvider from "./../services/VolsProvider.js";
import Utils from "./../services/Utils.js";

export default class TerminalUpdate{
    async render(){

        let request = Utils.parsRequestURL();

        let terminal = await VolsProvider.getTerminal(request.id); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>TerminalUpdate</h1>   
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>Le nom de l'aeroport :</label>
                            <input type="text" id="nom_aeroport" value="${terminal.nom_aeroport}"></input>

                        <label>Le nom du terminal :</label>
                            <input type="text" id="nom_terminal" value="${terminal.nom_terminal}"></input>
                            <input type="hidden" id="id" value="${terminal.id}">
                        <input type="submit" onclick="window.location.href='/#/terminaux/${request.id}'">
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
        nom_aeroport: "Amsterdam-AMS",
        nom_terminal: "D"
    },
    {
        nom_aeroport: "Arlanda",
        nom_terminal: "C"
    },
    {
        nom_aeroport: "Auckland-AKL",
        nom_terminal: "D"
    },
    {
        nom_aeroport: "Barajas",
        nom_terminal: "4S"
    }
]
*/