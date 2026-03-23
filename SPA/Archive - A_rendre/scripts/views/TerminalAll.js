import VolsProvider from "./../services/VolsProvider.js";

export default class TerminalAll{
    async render(){

        let terminaux = await VolsProvider.getTerminaux();
        
        let view = `
            <section class="sections">
                <h1>TerminalAll</h1>   
                ${terminaux.map(terminal => `
                    <div class="element">
                        <p>Nom aeroport : ${terminal.nom_aeroport}</p>
                        <p>Nom terminal : ${terminal.nom_terminal}</p>
                    </div>
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