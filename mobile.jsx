var imgiphone=document.querySelector(".imgiphone");
var Products=document.querySelector(".Products");
var container=document.querySelector(".container");


function cngphone(src)
{
    imgiphone.src=src;
   /* Products.style.color=green;*/
}

function cngbackground(bckground)
{
    container.style.backgroundColor=bckground;
    Products.style.color=bckground;
}