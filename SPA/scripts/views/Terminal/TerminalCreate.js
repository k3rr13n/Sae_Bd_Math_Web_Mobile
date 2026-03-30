import VolsProvider from "../../services/VolsProvider.js";

export default class TerminalCreate{
    async render(){

        let terminaux = await VolsProvider.getTerminaux();
        
        let view = `
            <section class="sections">
                <h1>TerminalCreate</h1>
                <div class="div_form">
                    <form method="get" class="formulaire_creation">

                        <label>Le nom de l'aeroport :</label>
                            <input type="text" id="nom_aeroport"></input>

                        <label>Le nom du terminal :</label>
                            <input type="text" id="nom_terminal"></input>
                        <input type="submit" onclick="window.location.href='/#/terminaux'">
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