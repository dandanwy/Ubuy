<?php
	header('Access-Control-Allow-Origin:*');
	$mysql_server_name = "10.3.135.244";
	$mysql_username = "root";
	$mysql_password = "root";
	$mysql_database = "ubuy";
	
	$conn=new mysqli($mysql_server_name,$mysql_username,$mysql_password,$mysql_database);  
	
	if($conn->connect_error){
        die('连接失败'.$conn->connect_error);
    }
     //设置编码
    $conn->set_charset('utf8');
	// $conn->set_charset('utf8'); 
?>