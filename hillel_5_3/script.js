let N = +prompt("Введіть число N");

for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}