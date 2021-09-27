var plus=document.querySelectorAll(".plus-btn") ;
var moins=document.querySelectorAll(".minus-btn");
var trash = document.getElementsByClassName("fa-trash-alt");
var hearts = document.getElementsByClassName("fa-heart");



for (let i = 0; i < plus.length ; i++ ) 
{
    plus[i].addEventListener("click", function () {
        plus[i].nextElementSibling.innerHTML ++     
        console.log (pricetotale () ) ;
        
    })
} 

for ( let i= 0 ;  i < moins.length ; i++)
{
     moins[i].addEventListener("click", function (){
         
        if (moins[i].previousElementSibling.innerHTML > 0)
        {
            moins[i].previousElementSibling.innerHTML -- ; 
            console.log (pricetotale () ) ;

        }
     })
}
function pricetotale ()
{
    var   total = document.getElementsByClassName("total-price") ;
    var   qte=document.getElementsByClassName("qute");
    var   unitprice = document.getElementsByClassName("unit-price"); 
    var   somme = 0 ; 

    for (let i=0 ; i < qte.length ; i++)
    {
        somme = somme + qte[i].innerHTML * unitprice[i].innerHTML ;
    }
     total.innerHTML = somme ;
     return (total.innerHTML) ;
}

for (let i of trash)   /* remove card */
{
 i.addEventListener("click",function(){
     i.parentElement.parentElement.parentElement.remove () ;
     console.log (pricetotale()) ;
 })
}

for (let i of hearts)
{
    i.addEventListener("click",function()
    {
        i.classList.toggle ("hearts") ;
    })
}
 