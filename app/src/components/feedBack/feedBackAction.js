export function getData(eve){
    // console.log(eve)
    return {
        types: ['beforeRequest', 'FeedBackRequested', 'requestError'],
        url: 'feedBack.php',
        params:{type:eve.type,word:eve.text,name:eve.name}
    }
}