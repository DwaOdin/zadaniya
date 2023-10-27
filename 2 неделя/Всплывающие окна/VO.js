//alert("Просто вывод информации");
//var rsl = confirm("Да или нет?");
//var inf = prompt("Сколько у тебя мощи?", 5000);
var person = null;
if(confirm("Да или нет?")) {
    person = prompt("Введите ваше имя");
    alert("Хэй," + person);

} else if (confirm("Вы нажали на <отмена>")) {
}
else {
    confirm("И снова");
}




