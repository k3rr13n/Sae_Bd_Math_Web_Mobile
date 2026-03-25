import VolsProvider from "./../services/VolsProvider.js";
import Utils from "./../services/Utils.js";

export default class TerminalShow{
    async render(){

        let request = Utils.parsRequestURL();

        let terminal = await VolsProvider.getTerminal(request.id); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>TerminalShow</h1>   
                <div class="element">
                    <table>
                        <thead>
                            <td>Aeroport</td>
                            <td>Terminal</td>
                        <thead>
                        <tbody>
                            <td>${terminal.nom_aeroport}</td>
                            <td>${terminal.nom_terminal}</td>
                        <tbody>
                    </table>
                </div>
                <div class="btn_center">
                    <button class="btn-update">Modifier le terminal</button>
                    <button class="btn-delete">Supprimer le terminal</button>
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