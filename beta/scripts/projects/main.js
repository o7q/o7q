document.addEventListener("DOMContentLoaded", () => {
    let cartridges = [];
    document.querySelectorAll(".shelf-grid__image-container").forEach(container => {
        let cartridgeImg = container.querySelector(".shelf-grid__image-container__cartridge-image");
        let projectImg = container.querySelector(".shelf-grid__image-container__project-image");
        let bubble = container.querySelector(".project-popup");
        cartridges.push(new Cartridge(cartridgeImg, projectImg, bubble));
    });

    const backgroundCat = document.getElementById("background-cat");
    backgroundCat.addEventListener("mouseover", unblur);
    backgroundCat.addEventListener("mouseout", blur);
});

function blur() {
    const background = document.getElementById("background");
    const backgroundCat = document.getElementById("background-cat");
    const backgroundDust = document.getElementById("background-dust");
    background.classList.add("blur");
    backgroundCat.classList.add("blur");
    backgroundDust.classList.add("blur");

    const foregroundShelf = document.getElementById("foreground-shelf");
    foregroundShelf.classList.remove("blur");

    document.querySelectorAll(".shelf-grid__image-container").forEach(container => {
        let cartridgeImg = container.querySelector(".shelf-grid__image-container__cartridge-image");
        let projectImg = container.querySelector(".shelf-grid__image-container__project-image");
        if (cartridgeImg) {
            removeBlur(cartridgeImg);
        }
        if (projectImg) {
            removeBlur(projectImg);
        }
    });
}

function unblur() {
    const background = document.getElementById("background");
    const backgroundCat = document.getElementById("background-cat");
    const backgroundDust = document.getElementById("background-dust");
    background.classList.remove("blur");
    backgroundCat.classList.remove("blur");
    backgroundDust.classList.remove("blur");

    const foregroundShelf = document.getElementById("foreground-shelf");
    foregroundShelf.classList.add("blur");

    document.querySelectorAll(".shelf-grid__image-container").forEach(container => {
        let cartridgeImg = container.querySelector(".shelf-grid__image-container__cartridge-image");
        let projectImg = container.querySelector(".shelf-grid__image-container__project-image");

        if (cartridgeImg) {
            addBlur(cartridgeImg);
        }
        if (projectImg) {
            addBlur(projectImg);
        }
    });
}

function addBlur(element, blurAmount = "5px") {
    let currentFilter = window.getComputedStyle(element).filter;
    if (currentFilter === "none") {
        element.style.filter = `blur(${blurAmount})`;
    } else {
        element.style.filter = `${currentFilter} blur(${blurAmount})`;
    }
}

function removeBlur(element) {
    let currentFilter = window.getComputedStyle(element).filter;
    if (currentFilter !== "none") {
        let filters = currentFilter.split(' ').filter(f => !f.startsWith("blur"));
        element.style.filter = filters.join(' ');
        if (element.style.filter === "") {
            element.style.filter = "none";
        }
    }
}