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
    //console.log(this.squares);

    this.createDom();
}







Mine.prototype.createDom=function () {
    var table=document.createElement('table');
    var domTr;
    var domTd;
    for(var i=0;i<this.tr;i++){
        domTr=document.createElement('tr');//这个地方一定要注意createElement（）每次循环都得执行一次，不然的话放不进去。。。。。。。（这个地方老坑了，测试好多次）
        this.tds[i]=[];
        for(var j=0;j<this.td;j++){
            domTd=document.createElement('td');
            //domTd.innerHTML=0;
            domTr.appendChild(domTd);

        }
        table.appendChild(domTr);
    }
    this.parent.appendChild(table);
}


var mine=new Mine(28,28,99);

mine.init();