const themeSelector = document.getElementById('theme-selector');
function changeTheme() {
    let selectedTheme = themeSelector.value;

    let body = document.body;
    let logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}


themeSelector.addEventListener("change", changeTheme);

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

