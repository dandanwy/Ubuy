export function getData(_url, _params){
    return {
        types: ['beforeRequest', 'Requestedcarget', 'requestError'],
        url: _url,
        params: _params
    }
}

export function updateData(_url, _params,_methods){
    return{
        types: ['beforeRequest', 'Requestedcarget', 'requestError'],
        url: _url,
        params: _params,
        method:_methods
    }
}

export function delData(_url, _params,_methods){
    return{
        types: ['beforeRequest', 'Requestedcarget', 'requestError'],
        url: _url,
        params: _params,
        method:_methods
    }
}