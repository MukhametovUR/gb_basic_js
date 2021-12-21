let number = prompt("Введите количество для вклада");

let output = number.slice(-1);

switch (output) {
    case "1":
        alert(`Ваша сумма в ${number} рубль успешно зачислена`);
        break;

    case "2":
    case "3":
    case "4":
        alert(`Ваша сумма в ${number} рубля успешно зачислена`);
        break;

    default:
        alert(`Ваша сумма в ${number} рублей успешно зачислена`);
        break;
}