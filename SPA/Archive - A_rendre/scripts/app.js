import Utils from "./services/Utils.js";
import Error404 from "./views/Error404.js";
import Home from "./views/Home.js";
import VolsAll from "./views/VolsAll.js";
import VillesAll from "./views/VillesAll.js";
import AeroportsAll from "./views/AeroportsAll.js";
import TerminalAll from "./views/TerminalAll.js";
import VolShow from "./views/VolShow.js";
import VilleShow from "./views/VilleShow.js";
import AeroportShow from "./views/AeroportShow.js";
import TerminalShow from "./views/TerminalShow.js";

const routes = {
    '/' : Home,
    '/vols' : VolsAll,
    '/vols/:id' : VolShow,
    '/villes' : VillesAll,
    '/villes/:id' : VilleShow,
    '/aeroports' : AeroportsAll,
    '/aeroports/:id' : AeroportShow,
    '/terminaux' : TerminalAll,
    '/terminaux/:id' : TerminalShow,
}

const router = async () => {
    const content = null || document.querySelector('#main');

    let request = Utils.parsRequestURL();

    let parsedURL = (request.operation ? '/' + request.operation : '/') +
                    (request.id ? '/:id' : '');

    console.log(parsedURL)
    let page = routes[parsedURL] ? new routes[parsedURL] : new Error404();

    content.innerHTML = await page.render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
