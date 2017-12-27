export function getUhui(a,b){
    return {
        types: ['uhuibeforeRequest', 'uhuiRequested', 'uhuiRequestError'],
        url: a,
        method: 'get',
        params: {
            barendid:b.brandid
        }
    }
}