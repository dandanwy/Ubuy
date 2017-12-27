<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $state = isset($_GET["state"]) ? $_GET["state"] :'all';
    $tel = isset($_GET["tel"]) ? $_GET["tel"] :'15572093961';
    // $state = (int)$state;

    include 'DBHelper.php';
    // echo $tel;
    $sql;
    if($state=='all'){
        $sql = "SELECT * from `order`,good,`user`,images
        where `order`.`status` BETWEEN 1 and 4
		and `order`.userid = (SELECT userid FROM `user` WHERE tel='$tel')
        and good.goodid = `order`.orderid
        and `user`.userid = `order`.orderid
		and good.goodid = images.imgid";
        // echo $sql;
    }else{
        $sql = "SELECT * from `order`,good,`user`,images
        where `order`.`status`= '$state' 
		and `order`.userid = (SELECT userid FROM `user` WHERE tel='$tel')
        and good.goodid = `order`.orderid
        and `user`.userid = `order`.orderid
        and good.goodid = images.imgid";
        //  echo $sql;
    }
    
        
    $result = query_oop($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>
