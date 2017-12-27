<?php
    header('Access-Control-Allow-Origin:*');
    include 'DBHelper.php';
    
    $carid = isset($_POST["carid"]) ? $_POST["carid"] : '';
    $goodnum = isset($_POST["goodnum"]) ? $_POST["goodnum"] : '';

    $sql = "update buycar set goodnum = $goodnum where carid = $carid;";

    $result = excute($sql);
    if($result){
        $sqlsel = "select * from good,`user`,buycar,images where buycar.userid =1 and  buycar.goodid= good.goodid and `user`.userid = buycar.userid and images.goodid = good.goodid GROUP BY buycar.carid;";
        $result = query($sqlsel);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
    
?>