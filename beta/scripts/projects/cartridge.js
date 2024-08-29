class Cartridge {
    constructor(cartridgeImg, projectImg, bubble) {
        this.cartridgeImg = cartridgeImg;
        this.projectImg = projectImg;
        this.bubble = bubble;
        this.hoverTimeoutID = null;
        this.unhoverTimeoutID = null;

        this.cartridgeImg.addEventListener('mouseover', this.handleMouseOver.bind(this));
        this.cartridgeImg.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    async handleMouseOver() {
        this.mouseHovering = true;

        clearTimeout(this.hoverTimeoutID);
        clearTimeout(this.unhoverTimeoutID);

        this.projectImg.classList.add("project-image--skew");
        this.cartridgeImg.src = "../scenes/projects/animations/game_cartridge/hover/128x540_24.gif";

        if (this.bubble) {
            this.bubble.style.opacity = '1';
        }

        this.hoverTimeoutID = setTimeout(() => {
            this.cartridgeImg.src = "../scenes/projects/animations/game_cartridge/hover/0.png";
            this.canUnhover = true;
        }, 100);
    }

    async handleMouseOut() {
        this.mouseHovering = false;

        clearTimeout(this.hoverTimeoutID);
        clearTimeout(this.unhoverTimeoutID);

        this.projectImg.classList.remove("project-image--skew");
        this.cartridgeImg.src = "../scenes/projects/animations/game_cartridge/unhover/128x540_24.gif";

        if (this.bubble) {
            this.bubble.style.opacity = '0';
        }

        this.unhoverTimeoutID = setTimeout(() => {
            this.cartridgeImg.src = "../scenes/projects/animations/game_cartridge/unhover/0.png";
        }, 100);
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}