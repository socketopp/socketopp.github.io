let count = 0;
let background = document.getElementById("background");
let body = document.getElementsByTagName("body")[0];

let renderBackground = () => {
    let opacity = (Math.random() * (0.65 - 0.85) + 0.85).toFixed(4);
    background.style.opacity = "1";
    setTimeout(() => {
        body.style.backgroundImage = "url(/assets/images/bg" + count + ".jpg)";
        background.style.opacity = opacity;
    }, 2500);
    count++;
    count = count === 3 ? 0 : count;
};

startInterval = (seconds, callback) => {
    callback();
    return setInterval(callback, seconds * 1000);
};

window.onload = () => {
    let intervalId = startInterval(12, renderBackground);


};

// TODO: 
// https://www.w3schools.com/howto/howto_css_flip_image.asp