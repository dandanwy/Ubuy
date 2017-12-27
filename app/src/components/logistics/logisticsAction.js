export function getData(key){
    console.log(key)
    return {
        types: ['beforeRequest', 'logisticsRequested', 'requestError'],
        url: 'logistics.php',
        params:{}
    }
}