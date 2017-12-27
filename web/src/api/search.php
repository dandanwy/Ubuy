<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
   
    include 'DBHelper.php';

    $goodid = isset($_GET["goodid"]) ? $_GET["goodid"] : '';
    $name = isset($_GET["name"]) ? $_GET["name"] : '';
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $brandname = isset($_GET["brandname"]) ? $_GET["brandname"] : '';

    $userid = isset($_GET["userid"]) ? $_GET["userid"] : '';

    $admin_id = isset($_GET["admin_id"]) ? $_GET["admin_id"] : '';

    $order_id = isset($_GET["order_id"]) ? $_GET["order_id"] : '';
    $order_user = isset($_GET["order_user"]) ? $_GET["order_user"] : '';

    if($goodid){
        $sql = "select * from good where goodid ='$goodid' or brandname ='$brandname'";
        $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } elseif ($userid) {
        $sql = "select * from user where userid ='$userid'or username ='$username'";
        $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($admin_id){
         $sql = "select * from admin_list where admin_id ='$admin_id'or username ='$username'";
         $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if($order_id){
         $sql = "select * from order_list where order_id ='$order_id'or order_user ='$order_user'";
         $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
    
?>