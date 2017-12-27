export default function OrderReducer(state={}, action){
    var newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    switch (action.type) {
        case 'beforeRequest':
            newState.status = 0;
            break;
        case 'orderRequested':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    // console.log('newState', newState)
    return newState;
}