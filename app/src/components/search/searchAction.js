import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
export function search(){
    var aa = $('#search_ipt').val();
    
    return{
        types: ['beforeRequest', 'searchRequested','requestError'],
        url:'search.php',
        method:'get',
        params:{
            searchword:aa
        }
    }
}
export function toDetail(a){
    // console.log(a)
    var aa=a[0].goodid;
    // console.log(aa)
        // return {
        //     types: ['beforeRequest', 'detailRequested', 'requestError'],
        //     url: 'getGoodDetail.php',
        //     params: { goodid: aa }
        // }
    hashHistory.push('/detail/'+aa)
}
