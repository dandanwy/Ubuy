export function getData(_url, _params){
    return {
        types: ['loginbeforeRequest', 'loginRequested', 'loginrequestError'],
        url: _url,
        method: 'get',
        params: _params
    }
}