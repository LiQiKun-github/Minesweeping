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
      padding: 3px 8px;
    }
    table{
      border-spacing: 1px;
      background: #929196;
      margin: 0 auto;
    }
    td{
      padding: 0;
      width: 20px;
      height: 20px;
      background: #ccc;
      border: 2px solid;
      border-color:#fff #a1a1a1 #a1a1a1 #fff;
      text-align: center;
      line-height: 20px;
      font-weight: bold;
    }
  </style>
  <body>



  <div class="level">
    <button type="button" name="button" class="choice-level">10x10</button>
    <button type="button" name="button" class="choice-level">16x16</button>
    <button type="button" name="button" class="choice-level">25x25</button>
    <button type="button" name="button" class="restart">重新开始</button>
  </div>

<!--
  <form method="post" >
    <input type="text" name="uname"/>
  </form>
-->


  <div class="gameBox"></div>

  <div class="info">

    <p class="">
      剩余雷数 :
      <span class="residue"></span>
    </p>


    <p>
      TIME :
      <span class="tick"></span> S
    </p>


  </div>

  <table border="">
  <%
    for(int i=0;i<6;i++){
        %><tr><%
      for(int j=0;j<6;j++){
  %><td>0</td><%
      }
      %></tr><%
    }
  %>

  </table>



  </body>
</html>
