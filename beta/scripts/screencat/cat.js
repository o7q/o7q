class Cat {
    constructor() {
        this.cat = document.createElement("img");
        this.cat.className = "screen-cat";
        this.cat.draggable = false;
        this.walkPadding = 100;

        this.registerMouseEvents();

        let ref = document.querySelector(".overlay");
        if (ref) {
            document.body.insertBefore(this.cat, ref);
        }
        else {
            document.body.append(this.cat);
        }

        this.cat.style.left = "200px";
        this.cat.style.top = "200px";

        this.setMood("sly");
        this.setAnimation("idle");
        this.snappedRotation = 270;

        this.updateTexture();
    }

    registerMouseEvents() {
        const dragThreshold = 200; // milliseconds
        const dragDistanceThreshold = 5;

        let dragAnimationSmoothing = 0;
        const dragAnimationSmoothing_slow = 20;
        const dragAnimationSmoothing_fast = 2;

        let dragStartTime = 0;
        let dragDistance = 0;
        this.isDragging = false;

        this.cat.addEventListener("mousedown", (event) => {
            dragDistance = 0;
            this.isDragging = true;
            dragStartTime = Date.now();

            setTimeout(() => {
                if (MOUSE_DOWN) {
                    this.cat.style.cursor = "grabbing";
                    this.updateGrabTexture("0");
                }
            }, 100);

            let dragAnimationSmoothingTimer = 0;

            const rect = this.cat.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            const moveHandler = (moveEvent) => {

                let temp = dragAnimationSmoothing;

                if (MOUSE_SPEED >= 4.0) {
                    dragAnimationSmoothing = dragAnimationSmoothing_fast;
                }
                else {
                    dragAnimationSmoothing = dragAnimationSmoothing_slow;
                }

                if (temp != dragAnimationSmoothing) {
                    dragAnimationSmoothingTimer = 0;
                }

                if (dragAnimationSmoothingTimer === dragAnimationSmoothing) {
                    this.updateRotation(0, 0, MOUSE_VELOCITY.x, MOUSE_VELOCITY.y);

                    let grabVarient = "0";
                    if (MOUSE_SPEED >= 6.0) {
                        grabVarient = "3";
                    } else if (MOUSE_SPEED >= 2.0) {
                        grabVarient = "2";
                    } else if (MOUSE_SPEED >= 0.0) {
                        grabVarient = "1";
                    }

                    this.updateGrabTexture(grabVarient);
                    dragAnimationSmoothingTimer = 0;
                }

                dragAnimationSmoothingTimer++;

                dragDistance++;
                this.cat.style.left = (moveEvent.clientX - offsetX) + "px";
                this.cat.style.top = (moveEvent.clientY - offsetY) + "px";
            };

            const upHandler = () => {
                if (MOUSE_SPEED <= 1.0) {
                    this.updateRotation(0, 0, 0, 1);
                }

                this.cat.style.cursor = "url('images/cursors/cat/open_chat.png'), pointer";
                this.isDragging = false;
                this.updateTexture();

                document.removeEventListener("mousemove", moveHandler);

                const catPos = getElementPosition(this.cat);
                if (
                    catPos.x < 0 + this.walkPadding ||
                    catPos.y < 0 + this.walkPadding ||
                    catPos.x > window.innerWidth - this.walkPadding ||
                    catPos.y > window.innerHeight - this.walkPadding
                ) {
                    this.walkInScreenBounds();
                }

                document.removeEventListener("mouseup", upHandler);
            };

            document.addEventListener("mousemove", moveHandler);
            document.addEventListener("mouseup", upHandler);
        });

        this.cat.onclick = function () {
            const dragEndTime = Date.now();
            if (!this.isDragging && (dragEndTime - dragStartTime < dragThreshold && dragDistance < dragDistanceThreshold)) {
                pageTransition("pages/chatcat.html", "replace");
            }
        };
    }

    update() {
        if (this.isDragging) {
            return;
        }

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

        switch (eventChance) {
            case 0:
                this.stopEvents();
                this.walkInScreenBounds();
                break;
        }
    }

    stopEvents() {
        this.allowEvents = false;
    }

    enableEvents() {
        this.allowEvents = true;
    }

    walkInScreenBounds() {
        let randX = getRandomInt(0 + this.walkPadding, window.innerWidth - this.walkPadding);
        let randY = getRandomInt(0 + this.walkPadding, window.innerHeight - this.walkPadding);
        let randTime = getRandomInt(3000, 5000);
        this.moveTo(randX, randY, randTime);
    }

    moveTo(x, y, time) {
        if (this.isDragging) {
            return;
        }

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
            if (i < moveTime && !this.isDragging) {

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
        this.cat.src = `scenes/screencat/animations/${this.animation}/anim_${this.animation}_${this.mood}/${this.snappedRotation}/256x256_12.gif`;
    }

    updateGrabTexture(varient) {

        let animation;
        if (varient === "0") {
            animation = `scenes/screencat/animations/grabbed/anim_grabbed_embarrassed/0/270/256x256.png`
        }
        else {
            animation = `scenes/screencat/animations/grabbed/anim_grabbed_embarrassed/${varient}/${this.snappedRotation}/256x256.png`;
        }

        this.cat.src = animation;
    }

    getOffsetXY(x, y) {
        return {
            offsetX: x - this.cat.offsetWidth / 2,
            offsetY: y - this.cat.offsetHeight / 2
        };
    }
}