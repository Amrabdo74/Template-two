let nav = document.querySelector(".img2");
let nav1 = document.querySelector(".nav-1");
let top1 =   document.querySelector(".scroll");

nav.onclick =  function(){

        nav1.classList.toggle("display")
         console.log("aaaaaa")

}

window.onscroll = function(){
    
        if(this.scrollY > 1000){
            document.querySelector(".scroll").classList.remove("hide")
        }else{
            document.querySelector(".scroll").classList.add("hide")

        }
}

top1.onclick = function(){
    window.scrollTo({
        top : 0 ,
        behavior: "smooth",
    })
} 