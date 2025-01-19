const selectElem = document.querySelector("select");
const content = document.querySelector(".content");
const logo = document.querySelector("img");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    const theme = selectElem.value;
    if (theme === "dark") {
        content.classList.add("dark");
        logo.src = "byui-logo_white.png";
    } else {
        content.classList.remove("dark");
        logo.src = "byui-logo_blue.webp";
    }
}