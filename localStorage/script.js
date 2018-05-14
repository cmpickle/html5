function initiate() {
    let saveButton = document.getElementById('save');
    let retrieveButton = document.getElementById('retrieve');

    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);

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

function saveItem() {
    let key = document.getElementById('key').value;
    let value = document.getElementById('value').value;

    sessionStorage[key] = value;
}

function retrieveItem() {
    let data = document.getElementById('data');
    let key = document.getElementById('key').value;
    let value = sessionStorage[key];
    
    data.innerHTML = '<div>' + key + ': ' + value + '</div>';
}

addEventListener("load", initiate);