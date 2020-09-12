function  Mine(tr,td,mineNum) {
    //this.a;
    this.tr=tr;//行
    this.td=td;//列
    this.mineNum=mineNum;//雷的数量

    this.squares=[];
    this.tds=[];
    this.surplusMine=mineNum;
    this.allRight=false;
    this.Success=0;

    this.parent=document.querySelector('.gameBox');
    this.mineNums=document.querySelector('.mineNum');//表示剩余雷数

}
//生成n个不重复的数字
Mine.prototype.randomNum=function () {
    var square=new Array(this.tr*this.td);
    for(var i=0;i<square.length;i++){
        square[i]=i;
    }
    square.sort(function () {return 0.5-Math.random()});
    //console.log(square);
    return square.slice(0,this.mineNum);
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
    this.Success=0;
    this.surplusMine=this.mineNum;
    this.mineNums.innerHTML=this.surplusMine;//显示剩余雷数
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

Mine.prototype.RemainNumber=function(){
    //var sum=this.tr*this.td;
    //console.log(sum);
    this.a=this.td*this.tr;
    for(var i=0;i<this.td;i++){
        for(var j=0;j<this.tr;j++){
            if(this.tds[i][j].className!=''&&this.tds[i][j].className!='flag')this.a--;
        }
    }
    console.log(this.a);
    if(this.a==this.mineNum){
        alert("游戏胜利，你真是个小天才！")
        this.gameOver();
    }

}       

Mine.prototype.find=function (square) {
    var x=square.x;
    var y=square.y;
    var result=[];

    for(var i=x-1;i<=x+1;i++){
        for(var j=y-1;j<=y+1;j++){
            if(i<0||j<0||i>this.td-1||j>this.tr-1||(i==x&&j==y)||this.squares[j][i].type=='mine'){
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
    this.parent.innerHTML='';
    this.parent.appendChild(table);
}
Mine.prototype.play=function (ev,obj) {
    var This=this;
    if(ev.which==1&&obj.className!='flag'){
        //左键
        obj.oncontextmenu=function () {
            return false;
        }
        var squ=this.squares[obj.pos[0]][obj.pos[1]];
        //console.log(squ);
        var NumClass=['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
        if(squ.type=="number"){
            obj.innerHTML=squ.value;
            obj.className=NumClass[squ.value];

            if(squ.value==0){
                obj.innerHTML='';
                //obj.className=NumClass[squ.value];

                function  DisappearZero(square) {
                    var g=This.find(square);
                    for(var i=0;i<g.length;i++){
                        var n=g[i][0];
                        var m=g[i][1];
                        This.tds[n][m].className=NumClass[This.squares[n][m].value];
                        if(This.squares[n][m].value==0){
                            //
                            //this.a++;
                            if(!This.tds[n][m].check){
                                This.tds[n][m].check=true;
                                DisappearZero(This.squares[n][m]);
                            }
                        }
                        else{
                            This.tds[n][m].innerHTML=This.squares[n][m].value;
                        }

                    }

                }
                DisappearZero(squ);

            }else{
                //obj.innerHTML=squ.value;
            }
            //console.log("你点到数字了");
        } else{
            alert("游戏失败，你点到雷了！");
            //console.log("你点到雷了");
            this.gameOver(obj);
        }


            this.RemainNumber();
    }
    //console.log(this.a);

    if(ev.which==3){
        //console.log("ok!");
        if(obj.className&&obj.className!='flag'){
            return
        }
        obj.className=obj.className=='flag' ? '' : 'flag';

        if(obj.className=='flag'&&this.squares[obj.pos[0]][obj.pos[1]].type=='mine') this.Success++;
        if(obj.className!='flag'&&this.squares[obj.pos[0]][obj.pos[1]].type=='mine') this.Success--;
        if(obj.className=='flag'){
            this.mineNums.innerHTML=--this.surplusMine;
        }else {
            this.mineNums.innerHTML=++this.surplusMine;
        }

        if(this.surplusMine==0){
            if(this.Success==this.mineNum){
                alert("游戏胜利，你真是个小天才！");

            }else {
                alert("游戏失败，再接再厉！");
                this.gameOver();
            }

        }

    }
    /*
Mine.prototype.NumColor=function () {

}
*/
}




Mine.prototype.gameOver=function (obj) {
    for(var i=0;i<this.tr;i++){
        for(var j=0;j<this.td;j++){
            if(this.squares[i][j].type=='mine'){
                this.tds[i][j].className='mine';
            }

            this.tds[i][j].onmousedown=null;//失败后禁止点击
        }
    }
    if(obj){
        obj.style.backgroundColor='#f00';
        //console.log(obj.pos[0],obj.pos[1]);
    }
}



var btns=document.querySelectorAll('.level button');
var mine =null;
var ln=0;
var arr=[[9,9,10],[16,16,30],[28,28,99]];//难度级别

for(let i=0;i<btns.length-1;i++){
    btns[i].onclick=function () {
        btns[ln].className='';
        this.className='active';
        mine=new Mine(arr[i][0],arr[i][1],arr[i][2]);
        mine.init();
        ln=i;
    }
}
btns[0].onclick();//初始化

btns[3].onclick=function () {
    //alert("bug");
    mine.init();
}



/*
var mine=new Mine(5,5,5);

mine.init();*/
//console.log(mine.find(mine.squares[1][1]));