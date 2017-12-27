export default function loginReducer(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'loginbeforeRequest':
            newState.status = 0;
            break;
        case 'loginRequested':
            newState.status = 1;
            newState.response = action.response;
            break;
        case 'loginrequestError':
            newState.status = -1;
            newState.error = action.error;
            break;
    }
    return newState;
}