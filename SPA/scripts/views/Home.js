export default class Home{
    async render(){
        let view = `
            <section class="sections">
                <h2>Home</h2>
                <section class="nav_home">
                    <a href="/#/vols">
                        <div class="block_vols">
                            <p>Nos vols</p>
                        </div>
                    </a>
                    <a href="/#/villes">
                        <div class="block_villes">
                            <p>Nos villes</p>
                        </div>
                    </a>
                    <a href="/#/aeroports">
                    <div class="block_aeroports">
                        <p>Nos aeroports</p>
                    </div>
                    </a>
                    <a href="/#/terminaux">
                    <div class="block_terminaux">
                        <p>Nos terminaux</p>
                    </div>
                    </a>
                </section>
            </section>
        `;
        return view;
    }
}