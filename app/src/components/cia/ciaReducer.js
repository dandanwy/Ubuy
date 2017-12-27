export default function ciaReducer(state = {}, action) {
    var newState = JSON.parse(JSON.stringify(state));
    if (action.response) {
        console.log(JSON.parse(action.response)[0])
    }


    switch (action.type) {
        case 'ciabeforeRequest':
            newState.type = action.type;
            break;
        case 'ciaRequested':
            newState.type = action.type;
            newState.body = JSON.parse(action.response)

    }

    return newState;
}