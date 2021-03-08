function bgChanger(){
    const body = document.querySelector("#home")
    if (window.innerWidth > 800) {
        body.style.backgroundImage = "url('./img/desktopbg.jpg'"
    } else {
        body.style.backgroundImage = "url('./img/homebg.jpg'"
    }
}

bgChanger()

window.onresize = bgChanger