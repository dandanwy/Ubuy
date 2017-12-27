<?php
header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
  
    $searchword = isset($_GET["searchword"]) ? $_GET["searchword"] : '';
    // $brandAllname = isset($_GET["brandAllname"]) ? $_GET["brandAllname"] : '';

    $sql="select *from good,images where images.goodid=good.goodid  and  good.name like '%".$searchword."%' ";
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>
