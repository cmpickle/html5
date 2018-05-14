function initiate() {
    let elem = document.getElementById('canvas');
    let canvas = elem.getContext('2d');

    canvas.font = "bold 20px segoe UI, sans-serif";
    canvas.textAlign = "start";
    canvas.textBaseline = "bottom";
    let message = "Hello HTML5!";
    canvas.fillText(message,  200, 220);
    let textSize = canvas.measureText(message);
    canvas.strokeRect(200, 200, textSize.width, 20);
}

addEventListener("load", initiate);