"use strict";

function crypt() {
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    if (password == "" || email == "") {
        alert("正しい入力か確認してください")
        return false;
    } else {
        document.getElementById("email1").value = "takenoko@ttt";


        var path = "file:///D:/github/CryproForm-test2/CryptForm-Client/rand.csv"
        download(new Blob([random_R]), 'rand.csv');
        var a = csvToArray(path)


        var random_R = "c664f2ead68a5297396821ceffe721ab";
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