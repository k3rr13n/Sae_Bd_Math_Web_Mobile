const Utils = {
    parsRequestURL(){
        let url = location.hash.slice(1).toLocaleLowerCase() || '/';
        let r = url.split('/');
        // console.log(r)
        let request = {
            operation : null,
            id : null,
            crud : null,
        };

        request.operation = r[1];
        if(isNaN(parseInt(r[2]))){
            request.crud = r[2];
        }
        else{
            request.id = r[2];
            request.crud = r[3];
        }
        // console.log(request)
        return request;
    }
}

export default Utils;