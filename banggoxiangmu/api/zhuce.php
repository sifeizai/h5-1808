<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ssssss";
$conn = new mysqli($servername,$username,$password,$dbname);
//判断链接是否成功
if($conn->connect_error){
    die('链接失败：'.$conn->connect_error);
}
$conn->set_charset('utf8');
$username=isset($_POST['username'])?$_POST['username']:null;
$password=isset($_POST['password'])?$_POST['password']:null;
// $sql = "select * from data ORDER BY  rand() LIMIT 3";
$sql = "select * from zhuce where username = '$username'";
//获取查询结果
$result = $conn->query($sql);
// var_dump($result) ;
$row = $result->fetch_all(MYSQLI_ASSOC);
//释放查询结果集，避免资源浪费
$result->close();
//把结果输出到前台
if($row){
    echo "用户已存在";
}else{
    echo "注册成功";
    $sql = "INSERT INTO zhuce (username, password)
VALUES ('$username', '$password')";
    $conn->query($sql);
    // echo $res;
}

// 关闭数据库，避免资源浪费
$conn->close();
?>