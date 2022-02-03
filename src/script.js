let MuteVideo = new KeyboardEvent("keydown", { keyCode: 69, metaKey: true });
let MuteMic = new KeyboardEvent("keydown", { keyCode: 68, metaKey: true });

let mute = () => {
    document.dispatchEvent(MuteVideo);
    document.dispatchEvent(MuteMic);
}

const sleep = (time, func) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(func())
        }, time * 1000)
    })
}

window.onload = function () {
    sleep(1, mute)
};
