// function aa(selector){
// 	if(typeof selector == 'string'){
// 		if(/^[a-z][1-6a-z]{0,10}$/.test(selector)){
// 			var objs = document.getElementsByTagName(selector);
// 			for(var i=0;i<objs.length;i++){
// 				this[i]=objs[i];
// 			}
// 			this.length = objs.length;
// 		}else if(selector.charAt(0) == '.'){
// 			 var objs = this.getClass(selector.slice(1));
// 			 this.length = objs.length;
// 			 for(var i=0;i<objs.length;i++){
// 			 	this[i]=objs[i];
// 			 }
// 		}else if(selector.charAt(0) == '#'){
// 			var objs = document.getElementById(selector.slice(1));
// 			this.length = 1;
// 			this[0] = objs;
// 		}
// 	}else if(typeof selector == 'function'){
// 		this.ready(selector);
// 	}
// }
// aa.prototype = {
// 	size:function(){
// 		return this.length;
// 	},
// 	each:function(callback){
// 		for(var i=0;i<this.length;i++){
// 			callback(i,this[i]);
// 		}
// 	},
// 	ready:function(fn){
// 		document.addEventListener('DOMContentLoaded',function(){
// 			fn();
// 		},false)
// 	},
// 	html:function(){
// 		this.each(function(index,obj){
// 			if(val){
// 				obj.innerHTNL = val;
// 			}else{
// 				return obj.innerHTNL;
// 			}
// 		})
// 		return this;
// 	},
// 	css:function(cssobj){
// 		for(var i in cssobj){
// 			obj.style[i]=objcss[i];
// 		}
// 		return this;
// 	},
// 	click:function(callback){
// 		this.each(function(index,obj){
// 			obj.onclick = function(){
// 				callback();
// 			}
// 		})
// 	},
// 	getClass:function(classname,obj){
// 		var obj = obj||document;
// 		if(obj.getElementByName){
// 			return obj.getElementsByClassName(classname);
// 		}else{
// 			var arr = [];
// 			var all = obj.getElementsByTagName('*');
// 			for(var i=0;i<all.length;i++){
// 				if(checkClass(all[i]).className,classname){
// 					arr.push(all[i]);
// 				}
// 			}
// 			return arr;
// 		}
// 	},
// 	checkClass:function(){
// 		var arr = currclass.split(' ');
// 		for(var i=0;i<arr.length;i++){
// 			if(arr[i]==newclass){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
// }
// function $(selector){
// 	return new aa(selector);
// }
// $('div').css({
// 	width:'200px',height:'200px',border:'1px solid red'
// }).click(function(){alert(1);})
// var obj = {'name':'zhangsan','age':'26',play:function(){
// 	alert(1);
// },son:{'name':'lisi','age':'1'}};
// alert(obj.name);
// var obj1 = extend(obj);
// obj1.name="lisi";
// alert(obj.name);

// function extend(obj){
// 	var newobj = {};
// 	for(var i in obj){
// 		if(typeof obj[i]== 'object'){
// 			newobj[i] = extend(obj[i]);//深拷贝
// 		}else{
// 			newobj[i]=obj[i];//浅拷贝
// 		}
// 	}
// 	return newobj;
// }
//function game(){
// this.clientw=document.documentElement.clientWidth;
// this.clienth=document.documentElement.clientHeight;
// this.letterArr=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];
// this.letterLen=5;
// this.speed=3;
// this.spans=[];
// this.currArr = [];
// this.currPosArr=[];
// this.die=10;
// this.sore=0;
// this.currSore = 0;
// this.num = 10;
// this.soreEle=document.getElementsByClassName("sore")[0].getElementsByTagName("span")[1];
// this.dieEle=document.getElementsByClassName("die")[0].getElementsByTagName("span")[1];
// // this.step=10;
// this.aa=4;//关卡数
//}
//game.prototype={
//   play:function(){
//       //将字母显示到body里面
//       this.getLetter(this.letterLen);
//       //字母运动
//       this.move();
//       this.key();
//
//   },
//    key:function(){
//        var that=this;
//      document.onkeydown=function(e){
//          var ev=e||window.event;
//          var code=String.fromCharCode(ev.keyCode);
//          for(var i=0;i<that.spans.length;i++){
//              if(that.spans[i].innerHTML==code){
//                  document.body.removeChild(that.spans[i]);
//                  that.spans.splice(i,1);
//                  that.currArr.splice(i,1);
//                  that.currPosArr.splice(i,1);
//                  that.getLetter(1);
//                  that.sore++;
//                  that.currSore++;
//
//                  that.soreEle.innerHTML=that.sore;
//                  if(that.currSore%that.num==0){
//                      that.aa++;
//                      alert("第"+that.aa+"关");
//                      that.next();
//                  }
//                  break;
//              }
//          }
//      }
//    },
//
//    next:function(){
//      clearInterval(this.t);
//      for(var i=0;i<this.spans.length;i++){
//         document.body.removeChild(this.spans[i]);
//      }
//        this.spans=[];
//        this.currArr=[];
//        this.currPosArr=[];
//        this.speed++;
//        // if(this.speed>)
//        this.letterLen++;
//        this.currSore=0;
//        this.num += 10;
//        this.play();
//
//
//    },
//    move:function(){
//       var that=this;
//       this.t=setInterval(function(){
//         for(var i=0;i<that.spans.length;i++){
//             var top=that.spans[i].offsetTop+that.speed;
//             that.spans[i].style.top=top+"px";
//             if(top>that.clienth){
//                 document.body.removeChild(that.spans[i]);
//                 that.spans.splice(i,1);
//                 that.currArr.splice(i,1);
//                 that.currPosArr.splice(i,1);
//                 that.getLetter(1);
//                 that.die--;
//                 that.dieEle.innerHTML=that.die;
//                 if(that.die==0){
//                     alert("game over!");
//                     // location.reload();
//                     that.restart();
//                 }
//             }
//         }
//
//       },60)
//    },
//    restart:function(){
//       clearInterval(this.t);
//      for(var i=0;i<this.spans.length;i++){
//         document.body.removeChild(this.spans[i]);
//      }
//        this.spans=[];
//        this.currArr=[];
//        this.currPosArr=[];
//        this.speed++;
//        // if(this.speed>)
//        this.letterLen=5;
//        this.currSore=0;
//        this.num += 10;
//        this.play();
//    },
//
//    getLetter:function(num){
//        //先获取到指定的字母
//        var arr=this.getRand(num);
//        var posArr=[];
//        var eleArr=[];
//        for(var i=0;i<arr.length;i++){
//            var span=document.createElement("span");
//            span.innerHTML=arr[i];
//
//            var x=(100+(this.clientw-200)*Math.random());
//            var y=(100*Math.random());
//            var width=30;
//            while (this.check1(posArr,x,width)){
//                x=(100+(this.clientw-200)*Math.random());
//            }
//             posArr.push({minx:x,maxx:x+width});
//             this.currPosArr.push({minx:x,maxx:x+width});
//            span.style.cssText="width:"+width+"px;position:absolute;left:"+x+"px;top:"+y+"px;color:#000;font-size:30px;";
//            document.body.appendChild(span);
//           // eleArr.push(span);
//            this.spans.push(span);
//        }
//       // return eleArr;
//
//    },
//    check1:function(arr,x,width){
//        for(var i=0;i<arr.length;i++){
//            if(!(x+width<arr[i].minx||arr[i].maxx+width<x)){
//                return true;
//            }
//        }
//        return false;
//    },
//    getRand:function(num){
//       var arr=[];
//       for(var i=0;i<num;i++) {
//           var rand = Math.floor(this.letterArr.length * Math.random());
//           while(this.check(arr,this.letterArr[rand])){
//               rand = Math.floor(this.letterArr.length * Math.random());
//           }
//           arr.push(this.letterArr[rand]);
//           this.currArr.push(this.letterArr[rand]);
//       }
//        return arr;
//    },
//    check:function(arr,val){
//       for(var i=0;i<arr.length;i++){
//           if(arr[i]==val){
//               return true;
//           }
//       }
//        return false;
//    }
//
//};
function game(){
    this.clientw=document.documentElement.clientWidth;
    this.clienth=document.documentElement.clientHeight;
    //this.letterArr=[{url:'../img/a.png'}];
    this.letterArr=['A',"B","C","D","E","F","G","H","I","J","K","L","M","N","O"];
    this.letterLen=5;//个数
    this.speed=3;
    this.spans=[];
    this.currArr=[];//当前字母
    this.currposArr=[];
    this.die=10;
    this.sore=0;
    this.currsore=0;
    this.num=10;
    this.soreEle=document.getElementsByClassName("sore")[0].getElementsByTagName("span")[1];
    this.dieEle=document.getElementsByClassName("die")[0].getElementsByTagName("span")[1];
    // this.step=10;
    this.aa=1;//关卡数
}
game.prototype={
    play:function(){
        this.getLetter(this.letterLen);//将字母显示到页面当中
        this.move();
        this.key();
    },
    key:function(){
        var that=this;
        document.onkeydown=function(e){
            var ev=e||window.event;
            var code=String.fromCharCode(ev.keyCode);
            for(var i=0;i<that.spans.length;i++){
                if(that.spans[i].innerHTML==code){
                    document.body.removeChild(that.spans[i]);
                    that.spans.splice(i,1);
                    that.currArr.splice(i,1);
                    that.currposArr.splice(i,1)
                    that.getLetter(1);
                    that.sore++;
                    that.currsore++;
                    that.soreEle.innerHTML=that.sore;
                    if(that.currsore%that.num==0){
                        that.aa++;
                        alert("第"+that.aa+"关");
                        that.next();
                    }
                    break;
                }
            }
        }
    },
    next:function(){
        clearInterval(this.t);
        for(var i=0;i<this.spans.length;i++){
            document.body.removeChild(this.spans[i]);
        }
        this.spans=[];
        this.speed++;
        this.currposArr=[];
        this.currArr=[];
        this.letterLen++;
        this.num+=10;
        this.play();
    },
    move:function(){
        var that=this;
        this.t=setInterval(function(){
            for(var i=0;i<that.spans.length;i++){
                var top=that.spans[i].offsetTop+that.speed;
                that.spans[i].style.top=top+"px";
                if(top>that.clienth){
                    document.body.removeChild(that.spans[i]);
                    that.spans.splice(i,1);
                    that.currArr.splice(i,1);
                    that.currposArr.splice(i,1);
                    that.getLetter(1);
                    that.die--;
                    that.dieEle.innerHTML=that.die;
                    if(that.die==0){
                        alert("game over!");
                        //location.reload();
                    }

                }
            }
        },60)
    },
    getLetter:function(num){//现货区指定的字母
        var arr=this.getRand(num);
        var posArr=[];
        // var eleArr=[];
        for(var i=0;i<arr.length;i++){
            var span=document.createElement("span");
            span.innerHTML=arr[i];
            var x=100+(this.clientw-200)*Math.random();
            var y=100*Math.random();
            var width=80;
            while(this.check1(posArr,x,width)){
                x=(100+(this.clientw-200)*Math.random());
            }
            posArr.push({minx:x,maxx:x+width});
            this.currposArr.push({minx:x,maxx:x+width});
            span.style.cssText="width:"+width+"px;height:"+width+"px;position:absolute;left:"+x+"px;top:"+y+"px;color:#000;font-size:25px;background:url(./img/east-ep-a51-2498614.png)no-repeat;background-size:70px auto;text-align: center;line-height:70px;color:#fff;font-family:SoulMission";
            document.body.appendChild(span);
            this.spans.push(span);
        }
    },
    check1:function(arr,x,width){
        for(var i=0;i<arr.length;i++){
            if(!(x+width<arr[i].minx||arr[i].maxx+width<x)){
                return true;
            }
        }
        return false;
    },
    getRand:function(num){//指定的数组去指定的字母
        var arr=[];
        for(var i=0;i<num;i++){
            var rand=Math.floor(this.letterArr.length*Math.random());
            while(this.check(this.currArr,this.letterArr[rand])){
                rand=Math.floor(this.letterArr.length*Math.random());
            }
            arr.push(this.letterArr[rand]);
            this.currArr.push(this.letterArr[rand])
        }
        return arr;
    },
    check:function(arr,val){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==val){
                return true;
            }
        }
        return false;
    }
}