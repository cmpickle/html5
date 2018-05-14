function initiate() {
    let saveButton = document.getElementById('save');
    let retrieveButton = document.getElementById('retrieve');
    let deleteButton = document.getElementById('delete');
    let reviewButton = document.getElementById('review');
    let clearButton = document.getElementById('clear');

    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);
    deleteButton.addEventListener('click', deleteItem);
    reviewButton.addEventListener('click', reviewAll);
    clearButton.addEventListener('click', clearAll);
    addEventListener('storage', reviewAll);
}

function saveItem() {
    let key = document.getElementById('key').value;
    let value = document.getElementById('value').value;

    localStorage[key] = value;
}

function retrieveItem() {
    let data = document.getElementById('data');
    let key = document.getElementById('key').value;
    let value = localStorage[key];
    
    data.innerHTML = '<div>' + key + ': ' + value + '</div>';
}

function deleteItem() {
    if (confirm('Delete?')) {
        let key = document.getElementById('key').value;
        localStorage.removeItem(key);
        data.innerHTML = '<div>Deleted.</div>';
    }
}

function clearAll() {
    if(confirm('Clear?')) {
        localStorage.clear();
        data.innerHTML = '<div>Cleared.</div>';
    }
}

function reviewAll() {
    data.innerHTML = "";
    for (let i = 0; i < sessionStorage.length; ++i) {
        let key = localStorage.key(i);
        let value = localStorage[key];
        data.innerHTML += '<div>' + key + ': ' + value + '<br /></div>';
    }
}

addEventListener("load", initiate);