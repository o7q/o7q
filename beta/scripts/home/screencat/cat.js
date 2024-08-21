class Cat {
    constructor() {
        this.cat = document.createElement("img");
        this.cat.className = "cat";
        this.cat.draggable = false;
        this.cat.onclick = function () {
            window.location.replace("pages/chatcat.html");
        };
        let ref = document.querySelector(".overlay");
        document.body.insertBefore(this.cat, ref);

        this.cat.style.left = '200px';
        this.cat.style.top = '200px';

        this.setMood("sly");
        this.setAnimation("idle");
        this.snappedRotation = 270;

        this.updateTexture();
    }

    update() {
        let moodChance = getRandomInt(0, 30000 / DELTA_TIME);

        switch (moodChance) {
            case 0:
                if (this.mood === "sly") break;
                this.setMood("sly");
                break;
            case 1:
                if (this.mood === "sly2") break;
                this.setMood("sly2");
                break;
        }

        let eventChance = getRandomInt(0, 10000 / DELTA_TIME);

        // 0: randomly walk

        const walkPadding = 200;

        switch (eventChance) {
            case 0:
                this.stopEvents();
                let randX = getRandomInt(0 + walkPadding, window.innerWidth - walkPadding);
                let randY = getRandomInt(0 + walkPadding, window.innerHeight - walkPadding);
                let randTime = getRandomInt(3000, 5000);
                this.moveTo(randX, randY, randTime);
                break;
        }
    }

    stopEvents() {
        this.allowEvents = false;
    }

    enableEvents() {
        this.allowEvents = true;
    }

    moveTo(x, y, time) {

        const offsetCoords = this.getOffsetXY(x, y);

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }

        this.setAnimation("walk");

        const moveTime = time / DELTA_TIME;

        const pos = getElementPosition(this.cat);
        const x_diff = offsetCoords.offsetX - pos.x;
        const y_diff = offsetCoords.offsetY - pos.y;

        const x_step = x_diff / moveTime;
        const y_step = y_diff / moveTime;

        let i = 0;

        this.updateRotation(pos.x, pos.y, x, y);

        this.enableEvents();

        this.intervalId = setInterval(() => {
            if (i < moveTime) {

                let cur = getElementPosition(this.cat);

                this.cat.style.left = `${cur.x + x_step}px`;
                this.cat.style.top = `${cur.y + y_step}px`;

                i++;
            }
            else {
                clearInterval(this.intervalId);
                this.intervalId = null;
                this.setAnimation("idle");

            }

        }, DELTA_TIME);
    }

    setAnimation(animation) {
        this.animation = animation;
        this.updateTexture();
    }

    setMood(mood) {
        this.mood = mood;
        this.updateTexture();
    }

    updateRotation(x, y, destX, destY) {
        this.snappedRotation = getSnappedAngle(x, y, destX, destY);

        if (this.snappedRotation != this.lastSnappedRotation) {
            this.lastSnappedRotation = this.snappedRotation;
            this.updateTexture();
        }

    }

    updateTexture() {
        this.cat.src = `../images/animations/cat/iso/${this.animation}/anim_${this.animation}_${this.mood}/${this.snappedRotation}/256x256_12.gif`;
    }

    getOffsetXY(x, y) {
        return {
            offsetX: x - this.cat.offsetWidth / 2,
            offsetY: y - this.cat.offsetHeight / 2
        };
    }
}