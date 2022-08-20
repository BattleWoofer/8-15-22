var hp = 0;
var maxHp = 12
//console.log(hp)

setInterval(function(){
hp++
console.log(hp)
bar.style.width = (100 - (hp * 100 / maxHp)) + "%"
if(hp >= maxHp){
    hp = 0;
}
}, 100)
console.log("not")
//document.getElementById("progressbar").style.width = 0.01 + "%"
//document.getElementById("progressbar").style.width = 50 + "%"
/*var bar = document.getElementById("progressbar");
console.log(bar);
bar.style.width = 50;*/
window.onload = start;

function start(){
    console.log("loaded")
    //document.getElementById("progressbar").style.width = 50 + "%"
    bar = document.getElementById("progressbar");
}