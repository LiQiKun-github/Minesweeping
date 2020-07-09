function  Mine(tr,td,mineNum) {
    this.tr=tr;//行
    this.td=td;//列
    this.mineNum=mineNum;//雷的数量

    this.squares=[];
    this.tds=[];
    this.surplusMine=mineNum;
    this.allRight=false;

    this.parent=document.querySelector('.gameBox');

}
//生成n个不重复的数字
Mine.prototype.randomNum=function () {
    var square=new Array(this.tr*this.td);
    for(var i=0;i<square.length;i++){
        square[i]=i;
    }
    square.sort(function () {return 0.5-Math.random()});//这种随机排序比较高级。。。
    //console.log(square);
    return square.slice(0,this.mineNum)
}


Mine.prototype.init=function () {
    //this.randomNum();

    var rn=this.randomNum();
    var n=0;
    for(var i=0;i<this.tr;i++){
        this.squares[i]=[];
        for(var j=0;j<this.td;j++){
            //this.squares[i][j]=

            if(rn.indexOf(n++)!=-1){///也可以考虑使用rn.indexOf(i*mineNum+j)
                this.squares[i][j]={
                    type:'mine',
                    x:j,
                    y:i
                };
            }
            else {
                this.squares[i][j]={
                    type:'number',
                    x:j,
                    y:i,
                    value:0
                };
            }
        }
    }

    this.parent.oncontextmenu=function () {
        return false;
    }
    this.Plusone();
    this.createDom();
    //console.log(this.squares);
}

///方法太粗暴放弃。。。。。。。。。
/*Mine.prototype.plusone=function () {
   or(var i=1;i<this.tr-1;i++){
       for(var j=1;j<this.tr-1;j++){
           if(this.squares[i][j].type=='mine'){
                   if(this.squares[i-1][j-1].type!='mine')this.squares[i-1][j-1].value++;
                   if(this.squares[i-1][j].type!='mine')this.squares[i-1][j].value++;
                   if(this.squares[i-1][j+1].type!='mine')this.squares[i-1][j+1].value++;
                   if(this.squares[i][j-1].type!='mine')this.squares[i][j-1].value++;
                   if(this.squares[i][j+1].type!='mine')this.squares[i][j+1].value++;
                   if(this.squares[i+1][j-1].type!='mine')this.squares[i+1][j-1].value++;
                   if(this.squares[i+1][j].type!='mine')this.squares[i+1][j].value++;
                   if(this.squares[i+1][j+1].type!='mine')this.squares[i+1][j+1].value++;
           }
       }
   }
   for(var i=1;i<this.tr-1;i++){
       if(this.squares[i][0].type=='mine'){
           if(this.squares[i-1][j-1].type!='mine')this.squares[i-1][j-1].value++;
           if(this.squares[i-1][j-1].type!='mine')this.squares[i-1][j-1].value++;
           if(this.squares[i-1][j-1].type!='mine')this.squares[i-1][j-1].value++;
           if(this.squares[i-1][j-1].type!='mine')this.squares[i-1][j-1].value++;
           if(this.squares[i-1][j-1].type!='mine')this.squares[i-1][j-1].value++;
       }
   }
}*/


//
Mine.prototype.find=function (square) {
    var x=square.x;
    var y=square.y;
    var result=[];

    for(var i=x-1;i<=x+1;i++){
        for(var j=y-1;j<=y+1;j++){
            if(i<0||j<0||i>this.td-1||j>this.tr-1||(i==x&&j==x)||this.squares[j][i].type=='mine'){
                continue;
            }
            result.push([j,i]);
        }
    }
    return result;
}

Mine.prototype.Plusone=function () {

    for(var i=0;i<this.tr;i++){

        for(var j=0;j<this.td;j++){

            if(this.squares[i][j].type=='number'){
                continue;
            }
            var f=this.find(this.squares[i][j]);//初始化的位置。。。。。
            for(var k=0;k<f.length;k++){
                this.squares[f[k][0]][f[k][1]].value++;
            }
        }
    }
}




Mine.prototype.createDom=function () {
    var table=document.createElement('table');
    var domTr;
    var domTd;
    var This=this;
    for(var i=0;i<this.tr;i++){
        domTr=document.createElement('tr');//这个地方一定要注意createElement（）每次循环都得执行一次，不然的话放不进去。。。。。。。（这个地方老坑了，测试好多次）
        this.tds[i]=[];
        for(var j=0;j<this.td;j++){
            domTd=document.createElement('td');
            this.tds[i][j]=domTd;
            domTd.pos=[i,j];//把格子对应的行与列存在格子上。
            domTd.onmousedown=function () {
                This.play(event,this);//This指的是实例对象，this代表td；
            };
            //domTd.innerHTML=0;

            /*domTd.oncontextmenu=function () {
                return false;
            }*/
            domTr.appendChild(domTd);

            /*if(this.squares[i][j].type=='mine'){
                domTd.className='mine';//把雷的图片放上
            }
            if(this.squares[i][j].type=='number'){
                domTd.innerHTML=this.squares[i][j].value;//把数字放上
            }*/
        }
        table.appendChild(domTr);
    }
    this.parent.appendChild(table);
}
Mine.prototype.play=function (ev,obj) {
    if(ev.which==1){
        //左键
        console.log(obj);
    }
}






var mine=new Mine(28,28,99);

mine.init();
//console.log(mine.find(mine.squares[1][1]));