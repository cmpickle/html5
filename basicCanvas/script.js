function initiate() {
    let elem = document.getElementById('canvas');
    let canvas = elem.getContext('2d');

    canvas.fillStyle = "#0000ff";
    canvas.strokeStyle = "#ff0000";
    canvas.strokeRect(100, 100, 120, 120);
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(130, 130, 30, 30);
}

addEventListener("load", initiate);