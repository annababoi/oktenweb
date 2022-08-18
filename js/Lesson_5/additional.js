// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minNumber = (a, b, c) => {
//     if ((a < b) && (a < c)) {
//         console.log(a)}
//          else if ((b < c) && (b < c)){
//             console.log(b)}
//             else if ((c < a) && (c < b)){
//                 console.log(c)}
//             else {
//         console.log("eror")}
//             }

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maxNumber = (a, b, c) => {
//     if ((a > b) && (a > c)) {
//         console.log(a)}
//     else if ((b > c) && (b > c)){
//         console.log(b)}
//     else if ((c > a) && (c > b)){
//         console.log(c)}
//     else {
//         console.log("error")}
// }
// maxNumber(999, -90, 777777)

// - створити функцію яка повертає найбільше число з масиву
// let maxOfArray = (array) => {
//     let max = array[0];
//     for (const max1 of array) {
//         if (max < max1) {
//             max = max1;
//         }
//     }
//     return max;
// }
//
// const arr = [1, 5, 2, -12, 45];
// console.log(maxOfArray(arr));

// // - створити функцію яка повертає найменьше число з масиву
// let minOfArray = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (min > item) {
//             min = item
//         }
//     }
//     return min;
// }
// const arr = [1, 5, 2, -12, 45];
// console.log(minOfArray(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumOfArrayNumbers = (array) => {
//     let res = 0;
//     for (let i = 0; i <= array.length-1; i++) {
//        res += array[i];
//     }
//     return res;
// }
// arr = [1,2,10];
// console.log(sumOfArrayNumbers(arr));

//
// - Дано натуральное число n. Выведите все числа от 1 до n.
let number = (someNumber) => {
    let numb = [];
    for (let i = 1; i <= someNumber; i++) {

    }
    return numb;
}
console.log(number(3));
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
//
//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]