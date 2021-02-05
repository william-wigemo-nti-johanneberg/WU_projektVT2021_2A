const hamburger = document.querySelector(".hamburger")
const navlist = document.querySelector(".navlinks")


function toggleNav(){
    hamburger.classList.toggle("hamburger-close")
    navlist.classList.toggle("navlinks-show")
}

hamburger.addEventListener('click', toggleNav)