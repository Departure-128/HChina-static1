$(function () {
    $('input,textarea').placeholder();
})

$("#username").blur(function(){
    var username = $("#username").val();
    if (username != null && username != "") {
        //1
        if (testMailNum(username) || testPhoneNum(username) || testUsername(username)) {
        } else {
            alert("用户名错误");
            return false;
        }
    }
});

$("#login").click(function () {
    // 1、验证用户名密码合规
    var username1 = $("#usernmae").val();
    var username = $.trim(username1);
    var password = $("#password").val();
    //不能为空或空字符串
    //

    if (testPassword(password)) {
    } else {
        alert("密码错误");
        return false;
    }

    // 2、发请求
    $.ajax({
        type: 'POST',
        url: "http://localhost:8767/query",
        data: {
            username: username,
            password: password,
        },
        //  新增content-type头部属性
        heads: {
            'content-type' : 'application/x-www-form-urlencoded'
        },
        success: function (data) {
            alert("登陆成功")
        }
    })
})

function testPhoneNum(username) {
    if (!(/^1[34578]\d{9}$/.test(username))) {

        return false;
    } else {
        return true;
    }
}

function testMailNum(username) {

    if (!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(username))) {

        return false;
    } else {
        return true;
    }
}

function testUsername(username) {

    if (!(/^[a-zA-Z]\w{3,15}$/.test(username))) {

        return false;
    } else {
        return true;
    }
}

function testPassword(password) {
    if (password != null && password != "") {
        return true;
    } else {
        return false
    }
}
