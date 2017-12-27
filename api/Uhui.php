<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $brandid = isset($_GET["brandid"]) ? $_GET["brandid"] : '';
    // $brandAllname = isset($_GET["brandAllname"]) ? $_GET["brandAllname"] : '';

    $sql="select * from good where brandid = '$brandid'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
