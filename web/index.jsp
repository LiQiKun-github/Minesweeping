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

<form action="/solve" method="post">
    <input type="submit" value="10" name="1" />
    <input type="submit" value="16" name="1"/>
    <input type="submit" value="25" name="1"/>
    <input type="submit" value="0" name="1"/>
</form>
<!--
<div class="level" >
    <button type="button" name="button" class="choice-level">10x10</button>
    <button type="button" name="button" class="choice-level">16x16</button>
    <button type="button" name="button" class="choice-level">25x25</button>
    <button type="button" name="button" class="restart">重新开始</button>
</div>


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
<%
    int h=0,l=0;
%>
<%
    String hang= (String)session.getAttribute("hang");
    String lie=(String) session.getAttribute("lie");
    if(hang!=null||lie!=null){
        h=Integer.parseInt(hang);
        l=Integer.parseInt(lie);
    }

%>
<table border="">
    <%
        for(int i=0;i<h;i++){
    %><tr><%
    for(int j=0;j<l;j++){
%><td></td><%
    }
%></tr><%
    }
%>

</table>
<div>计算结果：<%=session.getAttribute("result")%></div>
<div>计算结果：<%=session.getAttribute("elapse")%></div>



</body>
</html>
