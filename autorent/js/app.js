


window.onscroll = function() {changeBg()};
function changeBg()
{
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 )
     {
        var x=document.querySelector(".scroll-nav");
        document.querySelector(".logo h1").style.color="black";
        document.querySelector(".logo a").style.color-"black";
        x.classList.add("show");
        x.classList.remove("hide");
      } 
      else if(document.body.scrollTop>=0&&document.body.scrollTop<40)
      {
        var x=document.querySelector(".scroll-nav");
        x.classList.remove("show");
        x.classList.add("hide");
      }
   
}
// document.onscroll = function() {animation()};
// function animation() 
// {
//     if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
//     {
//             var x=document.querySelector(".my-nav");
//             var y=document.querySelector(".top-info");
//             x.classList.add("move-x");
//             y.classList.add("move-x");
//     }
//     if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
//     {
//             var x=document.querySelectorAll(".service-bar");
//             for(var i=0;i<x.length;i++)
//             x[i].classList.add("move-y");
//     }
//     if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
//     {
//             var x=document.querySelectorAll(".choose-box");
//             for(var i=0;i<x.length;i++)
//             x[i].classList.add("move-y");
//     }
// }
function showNav () 
{
   var x=document.querySelectorAll(".hideNav");
   for(var i=0;i<x.length;i++)
    x[i].classList.toggle("showNav");
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.reload();
  }
}