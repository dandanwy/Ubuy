export function getData(key){
    // console.log('action',key)
    var sta;
    if(key.type == 3){
        sta = 3
    }else if(key.type == 1){
        sta = 1
    }
    // console.log(sta)
    return {
        types: ['beforeRequest', 'managerOrderRequested', 'requestError'],
        url: 'managerOrder.php',
        params:{state:sta,tel:key.tel},
        method:'post'
    }
}