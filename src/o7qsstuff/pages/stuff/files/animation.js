// banner
anime({
    targets: '.bannerAnimeJS',
    keyframes:
    [
        {
            translateY: -10,
            scaleY: 1.1,
            scale: 1.15
        },
        {
            translateY: 0,
            scaleY: 1,
            scale: 1
        },
        {
            translateY: -15,
            rotateX: 30,
            rotateY: 35,
            scale: 1.25
        },
        {
            translateY: -30,
            rotateY: -35,
            scale: 1.25
        },
        {
            translateY: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1
        }
    ],
    easing: 'easeInOutElastic',
    duration: 6000,
    delay: 5000,
    loop: true
});

// buttons
anime({
    targets: '.buttonAnimeJS',
    keyframes:
    [
        {
            translateY: -10,
            rotateX: -15,
            rotateY: -20
        },
        {
            rotateX: 15,
            rotateY: 20
        },
        {
            translateY: 0,
            rotateX: 0,
            rotateY: 0
        }
    ],
    delay: anime.stagger(1000),
    easing: 'easeInOutBack',
    duration: 35000,
    loop: true
});