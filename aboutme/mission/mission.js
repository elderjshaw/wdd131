const themeSelector = document.getElementById('theme-selector');
function changeTheme() {
    let selectedTheme = themeSelector.value;

    let body = document.body;
    let logo = document.getElementById('logo');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_blue.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_white.png';
    }
}


themeSelector.addEventListener("change", changeTheme);