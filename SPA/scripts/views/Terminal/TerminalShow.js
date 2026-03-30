import VolsProvider from "../../services/VolsProvider.js";
import Utils from "../../services/Utils.js";

export default class TerminalShow{
    async render(){

        let request = Utils.parsRequestURL();

        const url_terminal = JSON.parse(localStorage.getItem(`terminal_data_${request.id}`));
        console.log(url_terminal['nom_aeroport'], url_terminal['nom_terminal'])

        let terminal = await VolsProvider.getTerminal(url_terminal['nom_aeroport'], url_terminal['nom_terminal']); 
        
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
                    <a href="/#/terminaux/${request.id}/update"><button class="btn-update">Modifier le terminal</button></a>
                    <form method="get">
                        <input type="hidden" id="delete" value="${terminal.id}">
                        <input type="submit" class="btn-delete" value="Supprimer le terminal">
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