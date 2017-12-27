<?php
 
    header('Access-Control-Allow-Origin:*');
    include "DBHelper.php";
  
    $orderid = isset($_POST["orderid"]) ? $_POST["orderid"] : '';
    $sql = "select * from order where orderid = $orderid";
    $result = query($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>