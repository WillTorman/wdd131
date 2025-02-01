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

    // get the src attribute from that element and 'split' it on the "-"

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step

    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))

    // add a listener to the close button (X) that calls a function called closeViewer when clicked

}
