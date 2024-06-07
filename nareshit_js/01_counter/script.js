const incr= document.getElementById('incc')
// const numm= document.getElementById('num')
let n=0;
function inc ()
{
    ++n
    if(n>20)
        {alert("max 20"), n=0;}
    incr.innerHTML = n
}

function dec ()
{
    --n
    if(n<0)
        {alert("min 0"), n=0;}
    incr.innerHTML = n
}

function reset ()
{
    incr.innerHTML = 0
}