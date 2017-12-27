export function cia() {

    return {
        types: ['ciabeforeRequest', 'ciaRequested', 'ciaRequestError'],
        url: 'cia.php',
        method: 'get',
        params: {
            goodid:'3'
        }
    }
}
