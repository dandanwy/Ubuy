<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    $sql = "select * from good,`user`,buycar,images where buycar.userid =1 and  buycar.goodid= good.goodid and `user`.userid = buycar.userid and images.goodid = good.goodid GROUP BY buycar.carid;";
    $result = query($sql);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>