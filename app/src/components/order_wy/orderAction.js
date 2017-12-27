export function getData(_url, _params){
    return {
        types: ['beforeRequest', 'Requestedordersel', 'requestError'],
        url: _url,
        params: _params
    }
}


export function insertorder(_url, _params){
    return {
        types: ['beforeRequest', 'Requestedorderins', 'requestError'],
        url: _url,
        params: _params
    }
}

export function delorder(_url, _params){
    return {
        types: ['beforeRequest', 'Requestedorderdel', 'requestError'],
        url: _url,
        params: _params
    }
}