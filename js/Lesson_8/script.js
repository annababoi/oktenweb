// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// users.push(
//     new User(1, "Anna", "May", "yguyfuy@gmail.com", +1234566),
//     new User(2, "John", "Snow", "wsdssd@gmail.com", +123487566),
//     new User(3, "Brad", "Pitt", "ewcbjh@gmail.com", +1231231),
//     new User(4, "Angy", "Jolie", "dwhbhjc@gmail.com", +123431123),
//     new User(5, "Kira", "Naiton", "fdsfhb@gmail.com", +123123123),
//     new User(6, "Andrew", "Satton", "fdsdfs@gmail.com", +12398765),
//     new User(7, "Liza", "Smitt", "djfhvhd@gmail.com", +132132132),
//     new User(8, "Matt", "Perry", "udsyguygdfuy@gmail.com", +123098098),
//     new User(9, "Anetta", "Johnson", "sfsaas@gmail.com", +123334353),
//     new User(10, "Simon", "Dave", "kjhskjfhj@gmail.com", +123123876)
// )
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filterUsers = users.filter(value => !(value.id%2));
// console.log(filterUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUsers = users.sort((a, b) => a.id - b.id);
// console.log(sortUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// function Client (id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let clients = [];
// clients.push(
//     new Client(1, "Anna", "May", "yguyfuy@gmail.com", +1234566, ["rice", "sugar", "eggs", "cherry"]),
//     new Client(2, "John", "Snow", "wsdssd@gmail.com", +123487566,["rice", "bananas"]),
//     new Client(3, "Brad", "Pitt", "ewcbjh@gmail.com", +1231231,["fruits", "sugar", "eggs", "bread", "wheat"]),
//     new Client(4, "Angy", "Jolie", "dwhbhjc@gmail.com", +123431123, ["eggs"]),
//     new Client(5, "Kira", "Naiton", "fdsfhb@gmail.com", +123123123,["tomato", "fish", "sugar", "eggs", "sugar", "eggs", "bread", "wheat"]),
//     new Client(6, "Andrew", "Satton", "fdsdfs@gmail.com", +12398765,["potato", "meat", "eggs", "bread", "wheat"]),
//     new Client(7, "Liza", "Smitt", "djfhvhd@gmail.com", +132132132,["rice", "sugar", "eggs"]),
//     new Client(8, "Matt", "Perry", "udsyguygdfuy@gmail.com", +123098098,["fish", "oil", "eggs","sugar", "bread", "wheat"]),
//     new Client(9, "Anetta", "Johnson", "sfsaas@gmail.com", +123334353,["rice", "sugar", "eggs"]),
//     new Client(10, "Simon", "Dave", "kjhskjfhj@gmail.com", +123123876, ["bread", "sugar"])
// )
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car (model, producer, year, maxSpeed, engineVolume){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function (){
//         console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, MaxSpeed - ${this.maxSpeed}, EngineVolume - ${this.engineVolume}, Driver - ${this.driver}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed){
//         if (newSpeed > maxSpeed){
//             this.maxSpeed = newSpeed
//         }
//     }
//     this.changeYear = function (newValue) {
//        this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//      this.driver = driver;
//     }
// }
//
// let mercedesBenz = new Car ("MercedesBenz", "Germany", 2006, 210, 2.2);
// mercedesBenz.addDriver("Shumaher");
// mercedesBenz.info();

// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
// constructor (model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
// }
//    drive (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info (){
//         console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, MaxSpeed - ${this.maxSpeed}, EngineVolume - ${this.engineVolume}, Driver - ${this.driver}`)
//     }
//     increaseMaxSpeed (newSpeed) {
//         if (newSpeed > maxSpeed){
//             this.maxSpeed = newSpeed
//         }
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// let mercedesBenz = new Car ("MercedesBenz", "Germany", 2006, 210, 2.2);
// mercedesBenz.addDriver("Shumaher");
// mercedesBenz.info();


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, legSize) {
//         this.name = name;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
//
// let cinderellas = [
//     new Cinderella("Tania", 21, 35),
//     new Cinderella("Anna", 22, 36),
//     new Cinderella("Katia", 23, 37),
//     new Cinderella("Olena", 29, 38),
//     new Cinderella("Maria", 26, 38),
//     new Cinderella("Katia", 27, 37),
//     new Cinderella("Nastia", 22, 34),
//     new Cinderella("Katia", 21, 39),
//     new Cinderella("Galia", 20, 40),
//     new Cinderella("Olia", 18, 40)
// ]
//
// class Prince extends Cinderella {
//     constructor (name, age, shoesSize) {
//         super(name, age);
//         this.shoesSize = shoesSize;
//     }
// }
//
//
// let prince = new Prince("Alfred", 30, 36);
//
// for (const cinderella of cinderellas) {
//     if (cinderella.legSize === prince.shoesSize){
//         console.log(cinderella)
//     }
// }
// let onlyCin = cinderellas.find(value => value.legSize === prince.shoesSize);
// console.log(onlyCin);