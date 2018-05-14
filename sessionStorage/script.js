function initiate() {
    let saveButton = document.getElementById('save');
    let retrieveButton = document.getElementById('retrieve');
    let deleteButton = document.getElementById('delete');
    let reviewButton = document.getElementById('review');

    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);
    deleteButton.addEventListener('click', deleteItem);
    reviewButton.addEventListener('click', reviewAll);
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

function deleteItem() {
    if (confirm('Delete?')) {
        let key = document.getElementById('key').value;
        sessionStorage.removeItem(key);
        data.innerHTML = '<div>Deleted.</div>';
    }
}

function reviewAll() {
    data.innerHTML = "";
    for (let i = 0; i < sessionStorage.length; ++i) {
        let key = sessionStorage.key(i);
        let value = sessionStorage[key];
        data.innerHTML += '<div>' + key + ': ' + value + '<br /></div>';
    }
}

addEventListener("load", initiate);