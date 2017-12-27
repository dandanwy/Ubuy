export default function detailReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
   
    
    switch(action.type){
        case 'beforeRequest':
            newState.type = action.type;
            break;
        case 'detailRequested':
            newState.type = action.type;
            newState.body = action.response
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
        case 'addCarRequested':
            console.log('成功加入购物车');
             break;

    }

    return newState;
}