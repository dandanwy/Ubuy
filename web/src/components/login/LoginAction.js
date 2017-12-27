export function Find(_params){
    return {
        types: ['loginBeforeRequest', 'loginRequested', 'loginRequestError'],
        url : 'login.php',
        params: _params
    }
}

// export function Token(api,obj){
//     return {
//         types: ['BeforeRequest', 'Requested', 'RequestError'],
//         url: api,
//         data:obj
//     }
// }


// export function PersonalInformation(sql){
//     return {
//         types: ['BeforeRequest', 'PersonalRequested', 'RequestError'],
//         url: 'datagrid.php',
//         data:{
//             select:sql
//         }
//     }
// }

