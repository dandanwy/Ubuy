export default function searchReducer(state = {}, action) {
    // console.log(action)
    var newState = JSON.parse(JSON.stringify(state));
    

    switch (action.type) {
        case 'beforeRequest':
            newState.type = action.type;
            break;
        case 'searchRequested':
            // console.log(action.type)s
            newState.type = action.type;
            newState.body = action.response;
            break;
        case 'requestError':
            newState.status = -1;
            newState.error = action.error;
            break;


    }

    return newState;
}