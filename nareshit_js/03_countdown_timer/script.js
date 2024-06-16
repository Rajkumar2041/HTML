function one(a)
{
let min = a; 
let sec = min * 60;
let count = document.getElementById('countdown');

setInterval(timer, 1000);
function timer()
{
    let minutes = Math.floor(sec / 60);
    let secounds = sec % 60; 
    secounds = secounds < 10 ? '0' + secounds : secounds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if(minutes>=0) count.innerHTML = `${minutes}:${secounds}`;
    if(sec==-1) alert("TIME UP")
    sec--;
}
}