const Utils = {
    parsRequestURL(){
        let url = location.hash.slice(1).toLocaleLowerCase() || '/';
        let r = url.split('/');
        let request = {
            operation : null,
            id : null,
        };
        request.operation = r[1];
        request.id = r[2];
        return request;
    }
}

export default Utils;