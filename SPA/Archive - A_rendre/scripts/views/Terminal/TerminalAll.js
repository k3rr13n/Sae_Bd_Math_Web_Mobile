import VolsProvider from "../../services/VolsProvider.js";

export default class TerminalAll{
    async render(){

        let terminaux = await VolsProvider.getTerminaux();
        
        let view = `
            <section class="sections">
                <h1>TerminalAll</h1>
                <a href="/#/terminaux/create"><button class="btn-create">Ajouter un nouveau terminal</button></a>
                ${terminaux.map((terminal, i) => `
                    <a href="/#/terminaux/${i+1}">
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