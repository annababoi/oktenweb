// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// let rectangleArea = (a, b) =>  (a * 2) + (b * 2);
// console.log(rectangleArea(2,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let cycleArea = r => 2 * Math.PI * r;
// console.log(cycleArea(20));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderArea = (h, r) =>  2 * Math.PI * h * r;
// console.log(cylinderArea(10,8));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let iterator = (array) => {
//     for (const item of array) {
// console.log(item);
//     }
// }
// let o = [2,3,4,5,6]
// iterator(o);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let writeText = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// writeText("Some text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let writerLi = (text) => {
//     document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>
//     `);
// }
// writerLi("Some text");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let writerLi = (text, number) => {
//     for (let i = 0; i < number; i++){
//         document.write(`
//     <ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
//     </ul>
//     `);
//     }
// }
// writerLi("Some text", 5);

//  - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrayList = (array) => {
//     for (const arrayElement of array) {
//         document.write(`
//         <ul>
//         <li>${arrayElement}</li>
//         </ul>
//         `)
//     }
// }
// let simpleArray = [1, 32, 900, true];
// arrayList(simpleArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrayObjects = (array) => {
//     for (const arrayElement of array) {
//         for (const arrayElementElement of Object.keys(arrayElement)) {
//             document.write(`<span>${arrayElement[arrayElementElement]} <span>`)
//         }
//         document.write(`<br>`)
//     }
// }
// let users = [
//     {id: 1231, name: "ivan", age: 21, asdfasd: 'asdfasds'},
//     {id: 4353, name: "anna", age: 21},
//     {id: 3211, name: "taras", age: 21},
//     {id: 9231, name: "pavlo", age: 21}
// ];
// arrayObjects(users);

// - створити функцію яка повертає найменьше число з масиву
// let minNumb = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         return Math.min(array[i]);
//     }
// }
// let numbers = [-1, 2, 100, 129];
// console.log(minNumb(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrayConcat = (array) => {
//     let sum = 0;
//     for(let i = 0; i <= array.length-1; i++) {
//     sum += array[i];
//     }
//     return sum;
// }
// let numbers = [-1, 2, 100, 129];
// console.log(arrayConcat(numbers));


