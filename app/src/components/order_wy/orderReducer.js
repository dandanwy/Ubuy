export default function StudentReducer(state = {}, action) {
    var reState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'beforeRequestordersel':
            reState.loading = true;
            break;
        case 'Requestedordersel':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrorordersel':
            reState.loading = false;
            reState.error = action.error
            break;
            
        case 'beforeRequestorderins':
            reState.loading = true;
            break;
        case 'Requestedorderins':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrororderins':
            reState.loading = false;
            reState.error = action.error
            break;

        case 'beforeRequestdel':
            reState.loading = true;
            break;
        case 'Requesteddel':
            reState.loading = false;
            reState.response = action.response;
            break;
        case 'requestErrordel':
            reState.loading = false;
            reState.error = action.error
            break;
    }
    return reState;
}