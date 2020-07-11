学生 :  安徽科技学院   李坤227188653@qq.com


# 一.项目下载

github项目网址：https://github.com/LiQiKun-github/Minesweeping

# 二.项目内容

## 1.项目准备

- GIT建仓库
- 项目同步
- 整体框架

## 2.解决方案

- html解决界面
- 随机函数生成雷的位置
- 二维数组解决地图排布
- 给雷周围数字加一
- 二重循环创建地图
- 左键点击添加雷和数字的class以及value
- 右键点击添加和取消小红旗
- 使用完所有小红旗，若小红旗下都是雷则游戏胜利，否则失败

# 三.项目实现

- 游戏界面实现

  ```html
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
  ```

- 创建地雷地图

  ```javascript
   var table=document.createElement('table');
      var domTr;
      var domTd;
      var This=this;
      for(var i=0;i<this.tr;i++){
          domTr=document.createElement('tr');
          this.tds[i]=[];
          for(var j=0;j<this.td;j++){
              domTd=document.createElement('td');
              this.tds[i][j]=domTd;
              domTd.pos=[i,j];
              domTd.onmousedown=function () {
                  This.play(event,this);
              };
          }
          table.appendChild(domTr);
      }
      this.parent.innerHTML='';
      this.parent.appendChild(table);
  ```

- 随机生成雷的位置

  ```javascript
  var square=new Array(this.tr*this.td);
      for(var i=0;i<square.length;i++){
          square[i]=i;
      }
      square.sort(function () {return 0.5-Math.random()});
      //console.log(square);
      return square.slice(0,this.mineNum);
  ```

- 给雷周围数字加一

  ```javascript
  for(var i=0;i<this.tr;i++){
  
          for(var j=0;j<this.td;j++){
  
              if(this.squares[i][j].type=='number'){
                  continue;
              }
              var f=this.find(this.squares[i][j]);
              for(var k=0;k<f.length;k++){
                  this.squares[f[k][0]][f[k][1]].value++;
              }
          }
      }
  ```

- 创建左键点击事件

  ```javascript
   if(ev.which==1&&obj.className!='flag'){
          obj.oncontextmenu=function () {
              return false;
          }
  ```

- 用递归的方法清除零周围所有的零

  ```javascript
  function  DisappearZero(square) {
                      var g=This.find(square);
                      for(var i=0;i<g.length;i++){
                          var n=g[i][0];
                          var m=g[i][1];
                          This.tds[n][m].className=NumClass[This.squares[n][m].value];
                          if(This.squares[n][m].value==0){
                              if(!This.tds[n][m].check){
                                  This.tds[n][m].check=true;
                                  DisappearZero(This.squares[n][m]);
                              }}
                          else{
                              This.tds[n][m].innerHTML=This.squares[n][m].value;
                          }}}
  ```

  

- 创建右键点击事件

  ```javascript
  if(obj.className&&obj.className!='flag'){
              return}
          obj.className=obj.className=='flag' ? '' : 'flag';
          if(this.squares[obj.pos[0]][obj.pos[1]].type=='mine'){
              this.allRight=true;
              this.Success++;
          }else{
              this.allRight=false;
              this.Success--;
          }
          if(obj.className=='flag'){
              this.mineNums.innerHTML=--this.surplusMine;
          }else {
              this.mineNums.innerHTML=++this.surplusMine;
          }
  ```

- 添加难度选择按钮事件

  ```javascript
  var btns=document.querySelectorAll('.level button');
  var mine =null;
  var ln=0;
  var arr=[[9,9,10],[16,16,40],[28,28,99]];
  for(let i=0;i<btns.length-1;i++){
      btns[i].onclick=function () {
          btns[ln].className='';
          this.className='active';
          mine=new Mine(arr[i][0],arr[i][1],arr[i][2]);
          mine.init();
          ln=i;}}
  btns[0].onclick();
  btns[3].onclick=function () {
      //alert("bug");
      mine.init();
  ```

- ### 判断胜利条件

  ```javascript
  if(this.Success==this.mineNum){
                  alert("成功");
              }else {
                  alert("失败");
                  this.gameOver();
              }
  ```

  # 四.项目的有待改进

### 1.鼠标左右键同时点击的事件

### 2.登录以及注册界面



















