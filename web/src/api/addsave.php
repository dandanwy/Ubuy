<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    // $servername = 'localhost';
    // $username = 'root';
    // $password = '';
    // $database = 'test';

	// // 1）连接数据库
	// $conn = new mysqli($servername,$username,$password,$database);

	// // 检测连接
	// if($conn->connect_errno){
	// 	die('连接失败：'.$conn->connect_error);
	// }

	// // 设置字符集
    // $conn->set_charset('utf8');

    include 'DBHelper.php';
     
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
    $username = isset($_GET["username"]) ? $_GET["username"] : '';
    $password = isset($_GET["password"]) ? $_GET["password"] : '';

    $order_id = isset($_GET["order_id"]) ? $_GET["order_id"] : '';
    $order_user = isset($_GET["order_user"]) ? $_GET["order_user"] : '';
    $order_tel = isset($_GET["order_tel"]) ? $_GET["order_tel"] : '';
    $order_site = isset($_GET["order_site"]) ? $_GET["order_site"] : '';
    
    if($name){
        $sql="insert into good(`name`,`price`,`Oprice`,`brandid`,`types`,`introduce`,`size`,`color`,`iventory`,`brandname`)values('$name','$price','$Oprice','$brandid','$types','$introduce','$size',
        '$color','$iventory','$brandname')";

        $res = multi_query_oop($sql);

        if($res){
            $msql="select * from good where name ='$name'";
            $msql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($msql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        };
    } else if($admin_id){
        $sql="insert into admin_list(`admin_id`,`username`,`password`)values('$admin_id','$username','$password')";

        $res = multi_query_oop($sql);

        if($res){
            $msql="select * from admin_list where username ='$username'";
            $msql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($msql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        };
    } else if($order_id){
        $sql="insert into order_list(`order_id`,`order_user`,`order_tel`,`order_site`)values('$order_id','$order_user','$order_tel','$order_site')";

        $res = multi_query_oop($sql);

        if($res){
            $msql="select * from order_list where order_id ='$order_id'";
            $msql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($msql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        };
    } else if($userid){
        $sql="insert into user(`userid`,`username`,`password`,`tel`)values('$userid','$username','$password','$tel')";

        $res = multi_query_oop($sql);

        if($res){
            $msql="select * from user where userid ='$userid'";
            $msql .= ';select FOUND_ROWS() as rowsCount;';
            $result = multi_query_oop($msql);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }else{
            echo json_encode($res, JSON_UNESCAPED_UNICODE);
        };
    }

    


    