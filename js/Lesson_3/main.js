// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt("Якесь число");
// if(x !== 0) {
//     console.log("Вірно")
// } else {
//     console.log("Невірно")
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число (в першу, другу, третю или четверту частину години).
// let time = +prompt("minutes");
// if (time > 0 && time <= 15) {
//     console.log("перша четверть");
// } else if (time > 16 && time <= 30) {
//     console.log("друга четверть");
// } else if (time > 30 && time <= 45) {
//     console.log("третя четверть");
// } else if (time > 45 && time <= 59) {
//     console.log("четверта четверть");
// } else {
//     console.log("????")
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
// let day = +prompt("days");
// if (day >= 1 && day <= 10) {
//     console.log("перша декада");
// } else if (day > 10 && day <= 20) {
//     console.log("друга декада");
// } else if (day > 20 && day <= 31) {
//     console.log("третя декада");
// } else {
//     console.log("????");
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let schedule = prompt("день тижня");
// switch (schedule) {
//     case "понеділок" :
//         console.log("Monday");
//         break;
//     case "вівторок" :
//         console.log("Tuesday");
//         break;
//     case "середа" :
//         console.log("Wednesday");
//         break;
//     case "четвер" :
//         console.log("Thursday");
//         break;
//     case "пʼятниця" :
//         console.log("Friday");
//         break;
//     case "субота" :
//         console.log("Saturday");
//         break;
//     case "неділя" :
//         console.log("Sunday");
//         break;
// }
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let x = +prompt("number 1");
// let y = +prompt("number 2");
// if (x > y) {
//     console.log(x);
// } else if (y > x) {
//     console.log(y)
// } else if (x === y) {
//     console.log(x, "=", y)
// } else {
//     console.log("????")
// }
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)
let x = prompt()  || "default";
console.log(x);



