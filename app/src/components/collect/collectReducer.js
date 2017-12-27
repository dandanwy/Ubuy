export default function collectReducer(state = {}, action){
    var newState = JSON.parse(JSON.stringify(state));
    console.log(newState)
    switch(action.type){
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'collectRequested':
            newState.status = 1;
            var aa =  action.response
            newState.response = aa;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error
            break;
    }
    return newState;
}