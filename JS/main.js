
window.onscroll = function() {
    if (window.scrollY >= 200) {
        document.querySelector("header").classList.add("navwhite");
        document.querySelector(".logo-text").classList.add("navs");
        document.querySelector("nav").classList.add("navs");
    } else {
        document.querySelector("header").classList.remove("navwhite");
        document.querySelector(".logo-text").classList.remove("navs");
        document.querySelector("nav").classList.remove("navs");
    }
}






var content = document.querySelectorAll('cont');
window.addEventListener('scroll', function() {
  if (window.scrollY > content.offsetTop - window.innerHeight / 2) {
    content.classList.remove('hidden');
  } else {
    content.classList.add('hidden');
  }
});






var links = document.querySelectorAll(".links button")
var galary = document.querySelectorAll(".gallary .column")

for(var i =0;i<links.length;i++){
    links[i].addEventListener("click",function(){
        
        // hide all imgs 
        for(var g =0;g<galary.length;g++){
            galary[g].style.display = "none"
        }

        var ele = document.querySelectorAll("."+this.getAttribute("data"))

        for(var e = 0;e<ele.length;e++){
            ele[e].style.display = "block"
        }
})
}
