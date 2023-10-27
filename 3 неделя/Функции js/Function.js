/*
function checkAge(age)  {
    if (age > 18) {
        return true;
    } else {
        return confirm("Родители разрешили?");
    }

}
checkAge(17);

var count = 0;

function test() {
    count++;
    console.log("Количество вызовов:" + count);
}

test();
test();
test(); */

function km_count(km, hour) {
    var res = km * hour;
    PrintRes(res);
    return res;
}

function PrintRes(res) { 
    var word = res == 1 ? "Вы проедете 1 километр" : " Вы проедете " + res + " километров";
    console.log(word);
}

var res = km_count(21, 2.4);