const menuButton = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

var count = 1;

menuButton.onclick = ()=> {
    count+=1
    if(count%2==0)
    {
        menu.style.transform = "translateX(0%)";
    } else {

        menu.style.transform = "translateX(-100%)";
    }
}

