// preloader
let preloader = document.querySelector(".preload")
window.addEventListener("load",function(){
    preloader.classList.add("hidepre")
})
// nav burger
let burger = document.querySelector("#burger")
let navbar = document.querySelector(".navbar")
let links = document.querySelectorAll(".links a")
burger.addEventListener("click",function(){
    navbar.classList.toggle("show")
})
links.forEach(function(link){
    link.addEventListener("click",function(){
        navbar.classList.remove("show")
    })
})

// nashatt slider
let nashatat = [
    {
        img : "images/nashat/h1.jpg",
        txt : "نشاط المشي في الطبيعة",
    },
    {
        img : "images/nashat/rp1.jpg",
        txt : "نشاط سباق الورق",
    },
    {
        img : "images/nashat/openday1.jpg",
        txt : "نشاط اليوم المفتوح",
    },
    {
        img : "images/nashat/cm1.jpg",
        txt : "نشاط الكريسمس ماركت",
    },
    {
        img : "images/nashat/Ff1.jpg",
        txt : "نشاط كرة القدم (اناث)",
    },
    {
        img : "images/nashat/Fm1.jpg",
        txt : "نشاط كرة القدم (ذكور)",
    }
]
let current = 0
let nashatimg = document.querySelector(".rabehc img")
let nashatp = document.querySelector(".rabehc p")
let pervbtn = document.querySelector("#perv")
let nextbtn = document.querySelector("#next")
let intrvl = setInterval(() => {
    if(current===nashatat.length){
        current=0
    }
    nashatimg.src=nashatat[current].img
    nashatp.innerText=nashatat[current].txt
    current++
}, 2600);
pervbtn.addEventListener("click",function(){
    clearInterval(intrvl)
    current--
    if(current===0){
        current=nashatat.length
    }
    nashatimg.src=nashatat[current].img
    nashatp.innerText=nashatat[current].txt
})
nextbtn.addEventListener("click",function(){
    clearInterval(intrvl)
    current++
    if(current===nashatat.length){
        current=0
    }
    nashatimg.src=nashatat[current].img
    nashatp.innerText=nashatat[current].txt
})

// topbtn scroll top
let topbtn = document.querySelector(".topbtn")
topbtn.addEventListener("click",function(){
    window.scrollTo({
        top :0
    })
})
window.addEventListener("scroll",function(){
    if(window.scrollY>400){
      topbtn.classList.add("showtop")
    }else{
        topbtn.classList.remove("showtop")
    }
})

// foot year
let footyear = document.querySelector("#year")
footyear.textContent =  new Date().getFullYear()