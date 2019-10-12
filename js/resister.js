"use strict";

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
        document.getElementById("email1").value = "takenoko2@ttt";

        //今後安全な乱数生成するように変更
        seed_R = Math.random() + document.getElementById("name1").value;

        document.getElementById("name1").value = seed_R;

        const shaObj = new jsSHA('SHA-256', 'TEXT');

        shaObj.update("seed_R");
        random_R = shaObj.getHash("HEX");
        hoge = password + random_R;

        /*
        var obj = {
            randR: random_R
        }

        JSON.stringify(obj);
        */

        //outputLogFile()
        blobFile(random_R);

        shaObj.update(hoge);
        newpass = shaObj.getHash("HEX");
        newpass = newpass.slice(32);



        document.getElementById("name1").value = newpass;
        document.getElementById("password1").value = newpass;
        alert("乱数Rは: " + random_R + '\n' + "生成されたパスワードは: " + document.getElementById("password1").value);
        return true;
    }
}

/*
function blobFile(str) {
    const blob = new Blob([str], { type: 'text/plain' });
    saveAs(blob, '.test');
}
*/