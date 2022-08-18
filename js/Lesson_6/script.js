// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = "hello word";
// console.log(str1.length);
// let str2 = "lorem ispum";
// console.log(str2.length);
// let str3 = "javascript is cool";
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = "hello word";
// console.log(str1.toUpperCase());
// let str2 = "lorem ispum";
// console.log(str2.toUpperCase());
// let str3 = "javascript is cool";
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = "HELLO WORLD";
// console.log(str1.toLowerCase());
// let str2 = "LOREM IPSUM";
// console.log(str2.toLowerCase());
// let str3 = "JAVASCRIPT IS COOL";
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
// let slice = str.slice(str.indexOf("d"),str.indexOf("g"));
// console.log(slice);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let stringToArray = (string) => {
//    return string.split(" ");
// }
// console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(array.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let sortNums = (array, direction) => {
//     if (direction === "ascending") {
//         array.sort((a, b) => a - b)
//     } else if (direction === "descending") {
//             array.sort((a, b) => b - a)
//         }
//     return array;
//     }
// let nums = [11,21,3];
// console.log(sortNums(nums, "descending"));

// // - є масив
// // -- відсортувати його за спаданням за monthDuration
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // let sort = coursesAndDurationArray.sort((a, b) =>  b.monthDuration - a.monthDuration);
// // console.log(sort);
// // let filter = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
// // console.log(filter);

// описати колоду карт

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let cards = [
//     {cardSuit: "spade", value: 6, color: "black"},
//     {cardSuit: "spade", value: 7, color: "black"},
//     {cardSuit: "spade", value: 8, color: "black"},
//     {cardSuit: "spade", value: 9, color: "black"},
//     {cardSuit: "spade", value: 10, color: "black"},
//     {cardSuit: "spade", value: "jack", color: "black"},
//     {cardSuit: "spade", value: "queen", color: "black"},
//     {cardSuit: "spade", value: "king", color: "black"},
//     {cardSuit: "spade", value: "ace", color: "black"},
//     {cardSuit: "diamond", value: 6, color: "red"},
//     {cardSuit: "diamond", value: 7, color: "red"},
//     {cardSuit: "diamond", value: 8, color: "red"},
//     {cardSuit: "diamond", value: 9, color: "red"},
//     {cardSuit: "diamond", value: 10, color: "red"},
//     {cardSuit: "diamond", value: "jack", color: "red"},
//     {cardSuit: "diamond", value: "queen", color: "red"},
//     {cardSuit: "diamond", value: "king", color: "red"},
//     {cardSuit: "diamond", value: "ace", color: "red"},
//     {cardSuit: "heart", value: 6, color: "red"},
//     {cardSuit: "heart", value: 7, color: "red"},
//     {cardSuit: "heart", value: 8, color: "red"},
//     {cardSuit: "heart", value: 9, color: "red"},
//     {cardSuit: "heart", value: 10, color: "red"},
//     {cardSuit: "heart", value: "jack", color: "red"},
//     {cardSuit: "heart", value: "queen", color: "red"},
//     {cardSuit: "heart", value: "king", color: "red"},
//     {cardSuit: "heart", value: "ace", color: "red"},
//     {cardSuit: "clubs", value: 6, color: "black"},
//     {cardSuit: "clubs", value: 7, color: "black"},
//     {cardSuit: "clubs", value: 8, color: "black"},
//     {cardSuit: "clubs", value: 9, color: "black"},
//     {cardSuit: "clubs", value: 10, color: "black"},
//     {cardSuit: "clubs", value: "jack", color: "black"},
//     {cardSuit: "clubs", value: "queen", color: "black"},
//     {cardSuit: "clubs", value: "king", color: "black"},
//     {cardSuit: "clubs", value: "ace", color: "black"},
//     { value: "joker", color: "black"},
//     { value: "joker", color: "red"}
// ]

// // - знайти піковий туз
// let spadeAce = cards.find(value => value.cardSuit === "spade" && value.value === "ace");
// console.log(spadeAce);

// // - всі шістки
// let findSix = cards.filter (card => card.value === 6);
// console.log(findSix);

// // - всі червоні карти
// let findRed = cards.filter (value => value.color === "red");
// console.log(findRed);

// // - всі буби
// let findDiamonds = cards.filter(value => value.cardSuit === "diamond");
// console.log(findDiamonds);

// // - всі трефи від 9 та більше
// let clubsFromNine = cards.filter(value => value.cardSuit === "clubs" && !(value.value < 9));
// console.log(clubsFromNine);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduce = cards.reduce(function (suits, card) {
// if (card.cardSuit === "spade") {
//     suits.spades.push(card);
// } else if (card.cardSuit === "diamond"){
//     suits.diamonds.push(card);
// } else if (card.cardSuit === "heart") {
//     suits.hearts.push(card);
// } else if (card.cardSuit === "clubs") {
//     suits.clubs.push(card)
// }
// return suits;
// },{spades:[], diamonds:[], hearts:[], clubs:[]})
// console.log(reduce);
