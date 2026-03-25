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
import AeroportCreate from "./views/AeroportCreate.js";
import TerminalCreate from "./views/TerminalCreate.js";
import VilleCreate from "./views/VilleCreate.js";
import VolCreate from "./views/VolCreate.js";
import AeroportUpdate from "./views/AeroportUpdate.js";
import TerminalUpdate from "./views/TerminalUpdate.js";
import VilleUpdate from "./views/VilleUpdate.js";
import VolUpdate from "./views/VolUpdate.js";

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
