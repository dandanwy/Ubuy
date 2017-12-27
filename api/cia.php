<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $goodid = isset($_GET["goodid"]) ? $_GET["goodid"] : '';
    // $brandAllname = isset($_GET["brandAllname"]) ? $_GET["brandAllname"] : '';

    $sql="select * from good where goodid = '$goodid'";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
