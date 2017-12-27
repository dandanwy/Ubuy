<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";

    $caridarr = isset($_GET["ordergoods"]) ? $_GET["ordergoods"] : '';

    $idxs = explode(',', $caridarr);
    
    foreach ($idxs as $idx) {
        $numIdx = (int)$idx;
        $sql = "delete from buycar where carid=$numIdx";
        $result = excute($sql);
    }
    if($result){
        echo 'ok';
    }else{
        echo 'fail';
    }

?>