<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    include 'DBHelper.php';

    $goodid = isset($_GET["goodid"]) ? $_GET["goodid"] : '';
    $name = isset($_GET["name"]) ? $_GET["name"] : '';
    $price = isset($_GET["price"]) ? $_GET["price"] : '';
    $Oprice = isset($_GET["Oprice"]) ? $_GET["Oprice"] : '';
    $brandid = isset($_GET["brandid"]) ? $_GET["brandid"] : '';
    $types = isset($_GET["types"]) ? $_GET["types"] : '';
    $introduce = isset($_GET["introduce"]) ? $_GET["introduce"] : '';
    $size = isset($_GET["size"]) ? $_GET["size"] : '';
    $color = isset($_GET["color"]) ? $_GET["color"] : '';
    $iventory = isset($_GET["iventory"]) ? $_GET["iventory"] : '';
    $brandname = isset($_GET["brandname"]) ? $_GET["brandname"] : '';

    $userid = isset($_GET["userid"]) ? $_GET["userid"] : '';
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $password = isset($_GET["password"]) ? $_GET["password"] : '';
    $tel = isset($_GET["tel"]) ? $_GET["tel"] : '';

    $admin_id = isset($_GET["admin_id"]) ? $_GET["admin_id"] : '';
    $admin_user = isset($_GET["admin_user"]) ? $_GET["admin_user"] : '';
    $admin_psw = isset($_GET["admin_psw"]) ? $_GET["admin_psw"] : '';

    $order_id = isset($_GET["order_id"]) ? $_GET["order_id"] : '';
    $order_user = isset($_GET["order_user"]) ? $_GET["order_user"] : '';
    $order_tel = isset($_GET["order_tel"]) ? $_GET["order_tel"] : '';
    $order_site = isset($_GET["order_site"]) ? $_GET["order_site"] : '';

    if($goodid){
        $sql="update good set name='$name',price='$price',Oprice='$Oprice',brandid='$brandid',types='$types',introduce='$introduce',size='$size',color='$color',iventory='$iventory',brandname='$brandname' where goodid='$goodid'";

        $res = multi_query_oop($sql);

        if($res){
                $msql="select * from good where goodid ='$goodid'";
                $msql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($msql);
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode($res, JSON_UNESCAPED_UNICODE);
            };
    } else if ($userid){
        $sql="update user set userid='$userid',username='$username',password='$password',tel='$tel' where userid='$userid'";

        $res = multi_query_oop($sql);

        if($res){
                $msql="select * from user where userid ='$userid'";
                $msql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($msql);
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode($res, JSON_UNESCAPED_UNICODE);
            };
    } else if($admin_id){
        $sql="update admin_list set admin_id='$admin_id',username='$admin_user',password='$admin_psw' where admin_id='$admin_id'";

        $res = multi_query_oop($sql);

        if($res){
                $msql="select * from admin_list where admin_id ='$admin_id'";
                $msql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($msql);
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode($res, JSON_UNESCAPED_UNICODE);
            };
    } else if($order_id){
        $sql="update order_list set order_id='$order_id',order_user='$order_user',order_tel='$order_tel',order_site='$order_site' where order_id='$order_id'";

        $res = multi_query_oop($sql);

        if($res){
                $msql="select * from order_list where order_id ='$order_id'";
                $msql .= ';select FOUND_ROWS() as rowsCount;';
                $result = multi_query_oop($msql);
                echo json_encode($result, JSON_UNESCAPED_UNICODE);
            }else{
                echo json_encode($res, JSON_UNESCAPED_UNICODE);
            };
    }


    
    
    
?>