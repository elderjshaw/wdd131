const menuButton = document.querySelector("#menuButton");
const dropdown = document.querySelector("#dropdown");

const toggleDropdown = () => {
    dropdown.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleDropdown);


window.addEventListener("resize", handleResize);

function viewerTemplate(path, alt) {
    return `
        <div class="viewer">
            <div class="image-container">
                <button class="close-viewer">X</button>
                <img src="${path}" alt="${alt}" />
            </div>
        </div>
        `;

}

handleResize();

function handleResize() {
    const screenWidth = window.innerWidth;
    const maxWidth = 900;

    if (screenWidth < maxWidth) {
        dropdown.classList.add("hide");
    } else {
        dropdown.classList.remove("hide");
    }
}

function viewHandler(event) {
    event.preventDefault();

    console.log("Image Clicked");

    const existingViewer = document.querySelector(".viewer");
    if (existingViewer) {
        existingViewer.remove();
    }
    const path = event.currentTarget.src;
    const alt = event.currentTarget.alt;

    console.log("Path:", path, "Alt:", alt);

    const viewerHTML = viewerTemplate(path, alt);
    document.body.insertAdjacentHTML("beforeend", viewerHTML);
    console.log("Viewer added to DOM");

    const closeButton = document.querySelector(".viewer .close-viewer");
        if (closeButton) {
            console.log("Close button found");
            closeButton.addEventListener("click", () => {
                console.log("Close button clicked");
                const viewer = document.querySelector(".viewer");
                if (viewer) {
                    viewer.remove();
                    console.log("Viewer removed from DOM");
                }
            });
        } else {
            console.log("close button not found");
            }
}

const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
    console.log("Adding click event listener to image");
    image.addEventListener("click", viewHandler);   
});