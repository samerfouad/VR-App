const video = document.getElementByID('video');

function startup() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
    }).then(stream => {
        video.srcObject = stream;

    }).catch(console.error)
}

window.addEventListner('load',startup, false);  