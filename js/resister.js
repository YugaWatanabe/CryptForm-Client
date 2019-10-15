"use strict";
//const ipc = require('electron').ipcRenderer;

function resister() {
    var name = document.getElementById("name1").value;
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;

    var random_R, hoge, newpass, seed_R;

    if (password.length <= 6) {
        alert("十分長いパスワードに設定してください")
        return false;
    }

    if (name == "" || email == "") {
        alert("正しい入力か確認してください")
        return false;
    } else {
        //document.getElementById("email1").value = "takenoko2@ttt";

        //document.getElementById("name1").value = seed_R;

        seed_R = Math.random() + email;

        const shaObj_R = new jsSHA('SHA-256', 'TEXT');
        const shaObj = new jsSHA('SHA-256', 'TEXT');


        shaObj_R.update(seed_R);
        random_R = shaObj_R.getHash("HEX");

        hoge = password + random_R;

        /*
        var obj = {
            randR: "random_R"
        }

        
        JSON.stringify(obj);
        */

        //createjson('./test.json', obj);

        //var path = "file:///D:/github/CryproForm-test2/CryptForm-Client/join/index.html"
        download(new Blob([random_R]), 'rand.csv');
        //var a = csvToArray('./rand.csv');
        //var a = loadText("./rand.txt");

        shaObj.update(hoge);
        newpass = shaObj.getHash("HEX");
        newpass = newpass.slice(32);



        //document.getElementById("name1").value = newpass;

        /*
        ipc.send('asynchronous-message', 'ping');
        ipc.on('test-reply', function(event, arg) {
            document.getElementById("name1").value = arg
        });
        */
        //document.getElementById("name1").value = hoge;

        document.getElementById("password1").value = newpass;
        alert("乱数Rは: " + random_R + '\n' + "生成されたパスワードは: " + document.getElementById("password1").value);
        return true;
    }
}

function download(blob, filename) {
    const objectURL = window.URL.createObjectURL(blob),
        a = document.createElement('a'),
        e = document.createEvent('MouseEvent');

    //a要素のdownload属性にファイル名を設定
    a.download = filename;
    a.href = objectURL;

    //clickイベントを着火
    e.initEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
}


function csvToArray(path) {
    var csvData = new Array();
    var data = new XMLHttpRequest();

    data.open("GET", path, false);

    data.send(null);
    var lines = data.responseText.split(LF);

    var LF = String.fromCharCode(10);
    var lines = data.responseText.split(LF);
    for (var i = 0; i < lines.length; ++i) {
        var cells = lines[i].split(",");
        if (cells.length != 1) {
            csvData.push(cells);
        }
    }

    return csvData;
}