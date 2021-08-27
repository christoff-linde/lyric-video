/**
 * @author Christoff Linde
 * @abstract Theme 03: Lyric Video
 *
 */

let screenState = 0;
let rootDocument = document.documentElement;
let animContainer = document.getElementById("animContainer");

let animList = {
    mainMenu_animData: {
        container: animContainer,
        renderer: 'svg',
        autoplay: false,
        loop: true,
        path: 'data.json'
    }
}

let mainMenu_anim = bodymovin.loadAnimation(animList['mainMenu_animData']);

mainMenu_anim.addEventListener('DOMLoaded', startAnimation);
animContainer.addEventListener('mouseover', pauseMainMenu);
animContainer.addEventListener('mouseout', playMainMenu);

let videoElement = document.createElement('video');
videoElement.classList.add('controls', 'controls');
videoElement.setAttribute('controls', 'controls');
videoElement.setAttribute('width', "80%");

let videoSource = document.createElement('source');
videoSource.setAttribute('src', 'media/videos/mainComp.mp4');

function startAnimation() {
    // console.log("mainMenu_anim started");
    mainMenu_anim.playSegments([1, 3600], false);
}

function changeScreen() {
    if (screenState == 0) {
        animContainer.removeEventListener('mouseover', pauseMainMenu);
        animContainer.removeEventListener('mouseout', playMainMenu);
        mainMenu_anim.goToAndPlay(5430, true);
        setTimeout(function () {
            mainMenu_anim.destroy();
            loadMainVideo();
            screenState++;
        }, 1000);
    }
}

function loadMainVideo() {
    animContainer.appendChild(videoElement);
    videoElement.appendChild(videoSource);

    setTimeout(function () {
        videoElement.pause();
        videoElement.load();
        videoElement.play();
    }, 1);

    videoElement.onended = function () {
        removeElements();
        location.reload();
        screenState = 0;
    }
}

function removeElements() {
    videoElement.removeChild(videoSource);
    animContainer.removeChild(videoElement);
}

function pauseMainMenu() {
    mainMenu_anim.goToAndPlay(5411, true);
    setTimeout(function () {
        // mainMenu_anim.pause();
        mainMenu_anim.goToAndStop(5430, true);
    }, 340);
}

function playMainMenu() {
    mainMenu_anim.setDirection(-1);
    mainMenu_anim.goToAndPlay(5430, true);
    setTimeout(function () {
        mainMenu_anim.setDirection(1);
        mainMenu_anim.goToAndPlay(1, true);
    }, 340);
}
