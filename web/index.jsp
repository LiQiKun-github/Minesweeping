<%--
  Created by IntelliJ IDEA.
  User: BNTT
  Date: 2020/7/3
  Time: 16:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>扫雷小游戏</title>
</head>
<link rel="stylesheet" href="index.css">

<body style="background: url(dp.jpg); background-repeat:no-repeat ;
background-size:100% 100%;
background-attachment: fixed;" class="backg">
<div id="mine">
    <div class="level">
        <button class="active">初级</button>
        <button>中级</button>
        <button>高级</button>
        <button>重新开始</button>
    </div>
        <div class="gameBox">

        </div>
        <div class="info">剩余雷数：<span class="mineNum"></span></div>
</div>

<script src="index.js"></script>
</body>
</html>
