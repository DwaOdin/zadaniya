document.getElementById("main-form") .addEventListener("submit", checkForm);
function checkForm(event) {
    event.preventDefault();
    var el = document.getElementById("main-form");
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;
    var fail = "";

    if(name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if(name.lenght <= 1 || name.lenght > 50)
        fail ="Введите корректное имя";
    else if(pass != repass)
        fail ="Пароли должны совпадать";
    else if(pass.split("&").lenght > 1)
        fail = "Некоректный пароль";
    if(fail != "")
        document.getElementById("error").innerHTML = fail;
    else {
        alert("Все данные корректно заполнены");
        window.location ="http://127.0.0.1:5500/UPR.html";
    }
}

