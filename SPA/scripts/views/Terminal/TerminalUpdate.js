import VolsProvider from "../../services/VolsProvider.js";
import Utils from "../../services/Utils.js";

export default class TerminalUpdate{
    async render(){

        let request = Utils.parsRequestURL();

        const url_terminal = JSON.parse(localStorage.getItem(`terminal_data_${request.id}`));

        let terminal = await VolsProvider.getTerminal(url_terminal['nom_aeroport'], url_terminal['nom_terminal']);

        let view = `
            <section class="sections">
                <h1>TerminalUpdate</h1>   
                <div class="div_form">
                    <form class="formulaire_creation" id="update-terminal-form">
                        <label>Aéroport (non modifiable) :</label>
                        <input type="text" id="nom_aeroport" value="${terminal.nom_aeroport}" readonly style="background:#eee">

                        <label>Nom du terminal :</label>
                        <input type="text" id="nom_terminal" value="${terminal.nom_terminal}">
                        
                        <input type="hidden" id="old_terminal_name" value="${terminal.nom_terminal}">
                        
                        <button type="submit" class="btn-update">Enregistrer les modifications</button>
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