let videoOverlay;

function playVideo(videoPath, loop) {
    stopVideo();

    const video = document.createElement("video");
    video.classList.add("overlay");

    video.src = videoPath;

    video.autoplay = true;
    video.loop = loop;
    
    let ref = document.querySelector(".overlay");
    document.body.insertBefore(video, ref);
    
    video.play();

    videoOverlay = video;
}

function stopVideo()
{
    if (videoOverlay) {
        videoOverlay.pause();

        videoOverlay.src = "";

        videoOverlay.remove();

        videoOverlay= null;
    }
}