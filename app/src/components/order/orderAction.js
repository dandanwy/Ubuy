// export function getData(url,_params) {
//     return {
//         types: ['orderbeforeRequest', 'orderRequested', 'orderrequestError'],
//         url: 'orderSearch.php',
//         method: 'get',
//         params: _params
//     }
// }
export function getData(key){
    var status;
    if(key.type == 2){
        status =2 ;
    }else if(key.type == 3){
        status = 3;
    } else if (key.type == 4) {
        status =3 ;
    } else if (key.type == 1) {
        status = 'all';
    }
    return {
        types: ['orderbeforeRequest', 'orderRequested', 'orderrequestError'],
        url: 'orderSearch.php',
        method: 'get',
        params: {state: status, tel:key.tel}
    }
}

// export function orderAll(){
//     return {
//         type: 'allOrder'
//     }
// }
