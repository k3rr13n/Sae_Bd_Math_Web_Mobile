import Utils from "./services/Utils.js";
import Error404 from "./views/Error404.js";
import Home from "./views/Home.js";
import VolsAll from "./views/Vol/VolsAll.js";
import VillesAll from "./views/Ville/VillesAll.js";
import AeroportsAll from "./views/Aeroport/AeroportsAll.js";
import TerminalAll from "./views/Terminal/TerminalAll.js";
import VolShow from "./views/Vol/VolShow.js";
import VilleShow from "./views/Ville/VilleShow.js";
import AeroportShow from "./views/Aeroport/AeroportShow.js";
import TerminalShow from "./views/Terminal/TerminalShow.js";
import AeroportCreate from "./views/Aeroport/AeroportCreate.js";
import TerminalCreate from "./views/Terminal/TerminalCreate.js";
import VilleCreate from "./views/Ville/VilleCreate.js";
import VolCreate from "./views/Vol/VolCreate.js";
import AeroportUpdate from "./views/Aeroport/AeroportUpdate.js";
import TerminalUpdate from "./views/Terminal/TerminalUpdate.js";
import VilleUpdate from "./views/Ville/VilleUpdate.js";
import VolUpdate from "./views/Vol/VolUpdate.js";

const routes = {
    '/' : Home,

    '/vols' : VolsAll,
    '/vols/:id' : VolShow,
    '/vols/create' : VolCreate,
    '/vols/:id/update' : VolUpdate,

    '/villes' : VillesAll,
    '/villes/:id' : VilleShow,
    '/villes/create' : VilleCreate,
    '/villes/:id/update' : VilleUpdate,

    '/aeroports' : AeroportsAll,
    '/aeroports/:id' : AeroportShow,
    '/aeroports/create' : AeroportCreate,
    '/aeroports/:id/update' : AeroportUpdate,

    '/terminaux' : TerminalAll,
    '/terminaux/:id' : TerminalShow,
    '/terminaux/create' : TerminalCreate,
    '/terminaux/:id/update' : TerminalUpdate,
}

const router = async () => {
    const content = null || document.querySelector('#main');

    let request = Utils.parsRequestURL();

    let parsedURL = (request.operation ? '/' + request.operation : '/')

    if(request.id == null){
        // console.log(request.crud)
        parsedURL += (request.crud ? '/create' : '');
    }
    else{
        // console.log(request.crud)
        parsedURL += (request.id ? '/:id' : '') + (request.crud ? '/update' : '')
    }

    console.log(parsedURL)
    let page = routes[parsedURL] ? new routes[parsedURL] : new Error404();

    content.innerHTML = await page.render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
