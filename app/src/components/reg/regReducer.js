export default function regReducer(state = {}, action){
    // console.log('reg',action)
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'regRequested':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}