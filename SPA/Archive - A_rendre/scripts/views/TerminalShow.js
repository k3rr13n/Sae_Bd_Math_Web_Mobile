import VolsProvider from "./../services/VolsProvider.js";

export default class TerminalShow{
    async render(){

        let terminal = await VolsProvider.getTerminal(); // Ajouter l'id ou un moyen distinctif
        
        let view = `
            <section class="sections">
                <h1>TerminalShow</h1>   
                <div class="element">
                    <p>Nom aeroport : ${terminal.nom_aeroport}</p>
                    <p>Nom terminal : ${terminal.nom_terminal}</p>
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