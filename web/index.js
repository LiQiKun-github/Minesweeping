function  Mine(tr,td,mineNum) {
    this.tr=tr;
    this.td=td;
    this.mineNum=mineNum;

    this.squares=[];
    this.tds=[];
    this.surplusMine=mineNum;
    this.allRight=false;

    this.parent=document.querySelector('.gameBox');

}

Mine.prototype.createDom=function () {
    var table=document.createElement('table');
    var domTr;
    var domTd;
    for(var i=0;i<this.tr;i++){
        domTr=document.createElement('tr');//这个地方一定要注意createElement（）每次循环都得执行一次，不然的话放不进去。。。。。。。（这个地方老坑了，测试好多次）
        for(var j=0;j<this.td;j++){
            domTd=document.createElement('td');
            domTd.innerHTML=0;
            domTr.appendChild(domTd);

        }
        table.appendChild(domTr);
    }
    this.parent.appendChild(table);
}


var mine=new Mine(28,28,99);

mine.createDom();