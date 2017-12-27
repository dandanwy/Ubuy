export function Init(_url, _params) {
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: _url,
        params: _params
    }
}

export function search(_params) {
    return {
        types: ['serbeforeRequest', 'serRequested', 'serrequestError'],
        url: 'search',
        params: _params
    }
}

export function edit(_params) {
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: 'edit',
        params: _params
    }
}

export function addsave(_params) {
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: 'addsave',
        params: _params
    }
}

export function del(_params) {
    return {
        types: ['beforeRequest', 'Requested', 'requestError'],
        url: 'del',
        params: _params
    }
}

