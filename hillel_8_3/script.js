function askNumber() {
    let lastInput;

    for (let i = 0; i < 10; i++) {
        let input = prompt("Введіть число більше 100:");
        
        lastInput = input;

        if (input === null) break;

        let num = Number(input);

        if (num > 100) break;
    }

    console.log("Останнє введення:", lastInput);
}

askNumber();