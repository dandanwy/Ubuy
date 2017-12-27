<?php
    // 指定允许其他域名访问  
    header('Access-Control-Allow-Origin:*');
    header('Access-Control-Allow-Methods:POST,GET,OPTIONS'); 
    header('Access-Control-Request-Headers:accept, content-type');

    $name = isset($_POST["name"]) ? $_POST["name"] :'张三';
    $type = isset($_POST["type"]) ? $_POST["type"] :'其他';
    $word = isset($_POST["word"]) ? $_POST["word"] :'其他';


    include 'DBHelper.php';
    if($tel != ""){
        $sql = "SELECT username FROM `user` WHERE tel='$tel'";

        $result = query_oop($sql);

        echo json_encode($result, JSON_UNESCAPED_UNICODE);

    } else {
        $sql = "insert into opinion (feedbacktype,feedbackOpinion,userName) values('$type','$word','$name')";
        $result = excute($sql);
        if($result){
            echo 'ok';
        }else{
            echo 'fail';
        }
    $sql = "insert into opinion (feedbacktype,feedbackOpinion,userName) values('$type','$word','$name')";
        
    $result = excute($sql);
    if($result){
        echo 'ok';
    }else{
        echo 'fail';
    }
    // echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>