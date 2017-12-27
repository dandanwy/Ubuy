<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $goodid = isset($_GET["goodid"]) ? $_GET["goodid"] : '';
    
    $sql = "SELECT * from good,images WHERE good.goodid=$goodid and images.goodid=$goodid";

    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
