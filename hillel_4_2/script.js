let number = prompt("Введіть тризначне число");

let digits = number.split("");

let a = digits[0];
let b = digits[1];
let c = digits[2];

if (a === b && b === c) {
    alert("Всі цифри однакові");
} else 
if (a === b || a === c || b === c) {
    alert("Серед цифр є однакові");
} else {
    alert("Всі цифри різні");
}