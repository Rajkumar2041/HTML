const incr= document.getElementById('incc')
const numm= document.getElementById('num')
let n=0;
function inc ()
{
    ++n
    if(n>20)
        {alert("max 20"), n=0;}
    incr.innerHTML = n
    if(n%2==0) numm.innerText="EVEN"
    else numm.innerText="ODD"
}

function dec ()
{
    --n
    if(n<0)
        {alert("min 0"), n=0;}
    incr.innerHTML = n
    if(n%2==0) numm.innerText="EVEN"
    else numm.innerText="ODD"
}

function reset ()
{
    n=0
    incr.innerHTML = n
    numm.innerText="EVEN"
}