export function getData(_url, _params){
    // console.log(_params, _url)
    return {
        types: ['beforeRequest', 'regRequested', 'requestError'],
        url: _url,
        method: 'get',
        params: _params
    }
}
export function regFuc(obj) {
    return {
        types: ['beforeRequest', 'regRequested', 'requestError'],
        query: obj
    }
}