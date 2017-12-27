<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';

    $ordergoods = isset($_GET["ordergoods"]) ? $_GET["ordergoods"] : '1';

    $orderinfo = JSON_decode($ordergoods,true);
    // echo json_encode($orderinfo, JSON_UNESCAPED_UNICODE);

    $resValue = '(';
    foreach ($orderinfo as $key => $value){
        $resValue .= 'buycar.carid = '.$value["carid"].' or ';
    }
    
    $resValue = substr($resValue,0,-4).')';
    // echo $resValue;
    $sql = "select * from good,`user`,buycar,images where $resValue and buycar.userid =1 and  buycar.goodid= good.goodid and `user`.userid = buycar.userid and images.goodid = good.goodid GROUP BY buycar.carid;";
    $result = query($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>