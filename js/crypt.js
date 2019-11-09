"use strict";

var electron = require('electron');
var remote = electron.remote;
var fs = remote.require('fs');

function crypt() {
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    if (password == "" || email == "") {
        alert("正しい入力か確認してください")
        return false;
    } else {
        //document.getElementById("email1").value = "takenoko@ttt";


        //var path = "file:///D:/github/CryproForm-test2/CryptForm-Client/rand.csv"
        //download(new Blob([random_R]), 'rand.csv');
        //var a = csvToArray(path)


        var random_R = "3d738d56cd9eb28821b26c0336b40514f85960e857a9459961dd5a1049de836d";

        var obj = JSON.parse(fs.readFileSync('test.json', 'utf8'));
        random_R = obj.randR;

        var hoge;
        var newpass;

        hoge = password + random_R;

        const shaObj = new jsSHA('SHA-256', 'TEXT');

        shaObj.update(hoge);
        newpass = shaObj.getHash("HEX");
        newpass = newpass.slice(32);

        document.getElementById("password1").value = newpass;
        alert("乱数Rは: " + random_R + '\n' + "生成されたパスワードは: " + document.getElementById("password1").value);
        return true;
    }
}