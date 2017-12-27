<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $tel = isset($_POST["tel"]) ? $_POST["tel"] :'18577363440';

    include 'DBHelper.php';
    $sql = "SELECT * from collect,good,`user`,images
        where  collect.userid = (SELECT userid FROM `user` WHERE tel='$tel') and collect.goodid = good.goodid 
        and collect.userid= `user`.userid 
		and good.goodid  = images.goodid
		GROUP BY good.goodid";
         
    $result = query_oop($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>