function on1 (){
  move();
}
function off1 (){
  move2();
}
var x =0;
var y = 0;


function move2 () {
   var length = 150;
  var smole = document.getElementById('smo');
  
  
      setInterval (function q (){
      

      if(!x  && y< length){//право
        smole.style.top = ++y + "px";
        
      }else if(y == length && x < length && y){//низ
         smole.style.left = ++x + "px";         
        
      } else if((y == length && x==length)||(x== length && y<length&&y)) {//лево
        smole.style.top = --y + "px";
        
      } else if(y=0 && x<length && x){//вверх
         smole.style.left = --x + "px";
         
       }
         console.log(x);
       console.log(y);      
               
  }, 10);

}
