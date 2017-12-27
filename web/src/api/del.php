<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');
   
    include 'DBHelper.php';

    $goodid = isset($_GET["goodid"]) ? $_GET["goodid"] : '';
    $userid = isset($_GET["userid"]) ? $_GET["userid"] : '';
    $admin_id = isset($_GET["admin_id"]) ? $_GET["admin_id"] : '';
    $order_id = isset($_GET["order_id"]) ? $_GET["order_id"] : '';
    if($goodid){
        $sql = "delete from good where goodid ='$goodid'";
        $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if ($userid){
        $sql = "delete from user where userid ='$userid'";
        $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if ($admin_id){
        $sql = "delete from admin_list where admin_id ='$admin_id'";
        $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } else if ($order_id){
        $sql = "delete from order_list where order_id ='$order_id'";
        $sql .= ';select FOUND_ROWS() as rowsCount;';

        $result = multi_query_oop($sql);
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
    
    

?>