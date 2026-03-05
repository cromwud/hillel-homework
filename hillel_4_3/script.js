let birthYear = prompt("Введіть Ваш рік народження");
let city = prompt("В якому місті Ви живете?");
let sport = prompt("Ваш улюблений вид спорту?");

if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
} else if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто");
} else if (sport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
} else {

    let age = 2026 - birthYear;

    let cityMessage;

    if (city === "Київ") {
        cityMessage = "Ти живеш у столиці України";
    } else if (city === "Вашингтон") {
        cityMessage = "Ти живеш у столиці США";
    } else if (city === "Лондон") {
        cityMessage = "Ти живеш у столиці Великобританії";
    } else {
        cityMessage = "Ти живеш у місті " + city;
    }

    let sportMessage = "";

    if (sport === "Футбол") {
        sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
    } else if (sport === "Баскетбол") {
        sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
    } else if (sport === "Теніс") {
        sportMessage = "Круто! Хочеш стати як Новак Джокович?";
    }

    alert(
        "Твій вік: " + age + "\n" +
        cityMessage + "\n" +
        sportMessage
    );
}