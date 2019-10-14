function loadText(file) {
    var request;

    if (window.XMLHttpRequest) {
        // IE7+, Firefox, Chrome, Opera, Safari
        request = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }

    // load
    request.open('GET', file, false);
    request.send();
    process(request.responseText);
}

function process(txt) {
    data = txt.split(/\r\n|\r|\n/);
    for (i = 0; i < data.length; i++) {
        if (data[i].indexOf(":") != -1) {
            ID = data[i].substring(0, data[i].indexOf(":"));
            TEXT = data[i].substr(data[i].indexOf(":") + 1);
            obj = document.getElementById(ID);
            obj.innerHTML = TEXT;
        }
    }
}