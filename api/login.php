<?php
    header('Access-Control-Allow-Origin:*');
    include "DBHelper.php";  
    $tel = isset($_GET["tel"]) ? $_GET["tel"] : '';
    $password = isset($_GET["password"]) ? $_GET["password"] : '';
    // echo $tel;
    $sql = "select * from user where tel='$tel' and password='$password'";
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    // echo count($row);
    // echo json_encode($row, JSON_UNESCAPED_UNICODE);
    if(count($row)>0){
        echo "true";
    } else {
        echo "false";
    };
?>