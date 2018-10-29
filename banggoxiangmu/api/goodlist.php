<?php
// 连接数据库（用户名root 主机名localhost 数据库名字）
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "ssssss";
    // 1.创建连接,生成了conn对象
    $conn = new mysqli($servername,$username,$password,$dbname);
    // 2.0 查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    $listPriceSql = 'select * from banggo1';
    $result = $conn->query($listPriceSql);
    
    $listPriceArr = $result -> fetch_all(MYSQLI_ASSOC);
    echo json_encode($listPriceArr);
    // 4.拿到查询结果集数据，关闭查询结果集
    $result->close();
    //5.关闭与数据库的连接
    $conn->close();
    
?>