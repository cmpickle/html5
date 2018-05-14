function initiate() {
    let elem = document.getElementById('canvas');
    let canvas = elem.getContext('2d');

    canvas.beginPath();
    canvas.arc(200, 200, 75, 0, Math.PI * 2);
    canvas.stroke();

    canvas.beginPath();
    let radiansFromDegrees = Math.PI / 180 * 60;
    canvas.arc(400, 200, 75, 0, radiansFromDegrees);
    canvas.stroke();
}

addEventListener("load", initiate);