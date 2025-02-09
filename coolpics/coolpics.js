// Remember, the parameter is a CSS tag.
const menuButton = document.querySelector("button");
const menu = document.querySelector(".hide");

let isMenuToggled = false;

function toggleMenu() {
    menu.classList.toggle("hide");
    isMenuToggled = !isMenuToggled;
}

menuButton.addEventListener("click", toggleMenu);


function handleResize() {
    const menu = document.querySelector(".menu");

    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide")
    }
}

handleResize();
window.addEventListener("resize", handleResize);


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
        <img src="${norris - full.jpeg}" alt="${description}">
      </div>`;
}


function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const img = event.target.closest("img");

    // get the src attribute from that element and 'split' it on the "-"
    let attribute = img.getAttribute('src');
    let beg = attribute.split("-");

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let full = beg[0] + "-full.jpeg";
    console.log(full);

    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    let body = document.querySelector("body");
    let html = viewerTemplate(full, "random image");

    body.insertAdjacentHTML("afterbegin", html);

    let modalx = document.querySelector(".close-viewer");

    // add a listener to the close button (X) that calls a function called closeViewer when clicked

}
