<?php
    //用于取出所有的房源信息
	include "public.php";
    //设置分页
    // $qty=isset($_GET['qty'])? $_GET['qty']:0;
	// var_dump($conn);
	//全表查询
	$sql = 'select * from good';
	// $sql = 'select * from room_type';
	//单条查询
	// $sql = 'select * from hotel where hotel_id ="0009"';
	$result = $conn->query($sql);
    // 使用查询结果集
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
	// $row = mysql_fetch_row($result);
	$conn->close();
	
?>