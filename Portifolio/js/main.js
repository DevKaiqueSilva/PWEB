//initialize
document.addEventListener("DOMContentLoaded", onLoaded, false);

function onLoaded() {
    const btnOnMenu = document.getElementById("btnOnMenu");
    const btnOffMenu = document.getElementById("btnOffMenu");
    const scrollDown = document.getElementById("scrollDown");
    // const menuOpcs = document.getElementsByClassName(".menuOpc");

    // menuOpcs.addEventListener("click", onMenuOpc);
    window.addEventListener("scroll", onScrollWindow);
    btnOnMenu.addEventListener("click", showSideNav);
    btnOffMenu.addEventListener("click", showSideNav);
    scrollDown.addEventListener("click", onScrollScreen)

}

function showSideNav() {
    const menuMobile = document.getElementById("menu-mobile");
    if (menuMobile.classList.contains("active")) {
        menuMobile.classList.remove("active");
    } else {
        menuMobile.classList.add("active");
    }
}

function onScrollScreen() {
    // document.querySelector('#data').scrollIntoView({
    //     behavior: 'smooth'
    // });
    window.scrollTo(0, window.innerHeight-80);
}

function onScrollWindow() {
    // console.log("onScroll")
    if (window.innerWidth > 700) {
        var prevScrollpos = window.pageYOffset;
        if (prevScrollpos < 10) {
            document.getElementById("headerPc").style.display = "none";
        } else {
            document.getElementById("headerPc").style.display = "block";
        }
    }
}

function onMenuOpc() {
    const menuMobile = document.getElementById("menu-mobile");
    menuMobile.classList.remove("active");
}