<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');


	include 'DBHelper.php';

	$username = isset($_GET["username"]) ? $_GET["username"] : '';
	$password = isset($_GET["password"]) ? $_GET["password"] : '';

    $sql = "select * from admin_list where username ='$username' and password='$password'";
    $sql .= ';select FOUND_ROWS() as rowsCount;';
 

	$result = multi_query_oop($sql);
	
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>