function initiate() {
    let elem = document.getElementById('canvas');
    let canvas = elem.getContext('2d');

    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.quadraticCurveTo(150, 200, 100, 300);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.quadraticCurveTo(50, 150, 100, 300);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(150, 400);
    canvas.bezierCurveTo(20, 450, 230, 470, 100, 550);
    canvas.lineWidth = 5;
    canvas.lineCap = "round";
    canvas.stroke();
}

addEventListener("load", initiate);