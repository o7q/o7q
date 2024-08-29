function changeFavicon(favicon) {
    // from https://stackoverflow.com/a/260876
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.href = favicon;
}

function changeTitle(text) {
    document.title = text;
}

function openPage(url, mode) {
    switch (mode) {
        case "new":
            window.open(url);
            break;
        case "replace":
            window.location.assign(url);
            break;
    }
}

function pageTransition(url, mode) {
    document.body.classList.add("bodyFadeOut");

    setTimeout(() => {
        openPage(url, mode);
    }, 1000);
}

function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY
    };
}