<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $state = isset($_POST["state"]) ? $_POST["state"] :'';
    $tel = isset($_POST["tel"]) ? $_POST["tel"] :'';
    // $state = (int)$state;

    include 'DBHelper.php';
    $sql = "SELECT * from `order`,good,`user`,images
        where `order`.`status`= '$state' 
		and `order`.userid = (SELECT userid FROM `user` WHERE tel='$tel')
        and good.goodid = `order`.orderid
        and `user`.userid = `order`.orderid
		and good.goodid = images.imgid";
        
    $result = query_oop($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>