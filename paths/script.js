function initiate() {
    let elem = document.getElementById('canvas');
    let canvas = elem.getContext('2d');

    canvas.beginPath();
    canvas.moveTo(200, 200);
    canvas.lineTo(200, 400);
    canvas.lineTo(400, 400);
    canvas.closePath();
    canvas.strokeStyle = "#ff0000";
    canvas.lineWidth = 10;
    canvas.stroke();
    canvas.fillStyle = "#0000ff";
    canvas.fill();


    canvas.beginPath();
    canvas.moveTo(500, 200);
    canvas.lineTo(500, 400);
    canvas.lineTo(700, 400);
    canvas.closePath();
    canvas.clip();

    canvas.strokeStyle = "#000000";
    canvas.lineWidth = 1;

    canvas.beginPath();
    for (let i = 0; i < 400; i = i+5)
    {
        canvas.moveTo(400, i);
        canvas.lineTo(900, i);
    }
    canvas.stroke();
}

addEventListener("load", initiate);