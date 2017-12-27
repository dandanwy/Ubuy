<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    
    $ordergoods = isset($_GET["ordergoods"]) ? $_GET["ordergoods"] : '';
    
    $orderinfo = JSON_decode($ordergoods,true);

    
    foreach ($orderinfo as $key => $value){
        $resKey = '(';
        $resValue = '(';
        // $value = JSON_decode($value,true);
        foreach($value as $key2 => $value2){
            
            $resKey .= "$key2,";
            $resValue .= "$value2,";
            
        }
        
        $resKey = substr($resKey,0,-1).')';
        $resValue = substr($resValue,0,-1).')';
        $sql = "insert into `order` $resKey values $resValue;";
        $result = excute($sql);
        
        if($result){
            echo "ok";
            // 障眼法
            // $sqlsel = "select * from good,`user`,buycar,images where buycar.userid =1 and  buycar.goodid= good.goodid and `user`.userid = buycar.userid and images.goodid = good.goodid;";
            // $result2 = query($sqlsel);
            // echo json_encode($result2, JSON_UNESCAPED_UNICODE);
        }
    }

    

?>