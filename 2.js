function on1 (){
  move3();
}
function off1 (){
  move2();
}
var x =0;
var y = 0;
function move3() {
  var smole = document.getElementById('smo');
  smole.style.top = 0 + "px";
  smole.style.left = 0 + "px";

}


function move2 () {
   var length = 150;
  var smole = document.getElementById('smo');
  
  
      setInterval (function q (){
      

      if(!y  && x< length){//право
        smole.style.left = ++x + "px";
        smole.style.background = "red";
        
      }else if(x == length && y < length && x){//низ
         smole.style.top = ++y + "px";         
        smole.style.background = "blue";

      } else if((y == length && x==length)||(y== length && x<length&&x)) {//лево
        smole.style.left = --x + "px";
        smole.style.background = "yellow";
      } else if(!x && y<=length && y){//вверх
         smole.style.top = --y + "px";
         smole.style.background = "blue";
       }
         console.log(x);
       console.log(y);      
               
  }, 50);

}
