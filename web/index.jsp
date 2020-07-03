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
  <style>
    body {
      text-align: center;
      position: relative;
    }
    .choice-level{
      color:blue;
    }
  </style>
  <body>
  <div class="level">
    <button type="button" name="button" class="choice-level">5x5</button>
    <button type="button" name="button" class="choice-level">10x10</button>
    <button type="button" name="button" class="choice-level">20x20</button>
    <button type="button" name="button" class="restart">重新开始</button>
  </div>
  </body>
</html>
