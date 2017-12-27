<?php
    header('Access-Control-Allow-Origin:*');

    include "DBHelper.php";
    $carid = isset($_POST["carid"]) ? $_POST["carid"] : '';

    $sql = "delete from buycar where carid = $carid";

    $result = excute($sql);

    if($result){

        $sql2 = "select * from good,`user`,buycar,images where buycar.userid =1 and  buycar.goodid= good.goodid and `user`.userid = buycar.userid and images.goodid = good.goodid GROUP BY buycar.carid;";
        $result2 = query($sql2);
        echo json_encode($result2, JSON_UNESCAPED_UNICODE);

        echo 'ok';
    }else{
        echo 'fail';
    }

?>