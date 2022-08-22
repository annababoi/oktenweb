// function UserCard(number) {
//     this.balance = 100;
//     this.transactionLimit = 100;
//     this.historyLogs = [];
//     this.key = number;
//     this.getCardOption = function (number) {
//         console.log(`На балансі карті № ${number} знаходиться ${this.balance} гривень`)
//     };
//     this.putCredits = function (moneyPut) {
//        let putC = this.balance += moneyPut;
//         return this.historyLogs.push[putC];
//     }
//     this.takeCredits = function (moneyTake) {
//         if (moneyTake > this.balance){
//             console.log(`Сума транзакції перевищує залишок коштів на рахунку. На вашому рахунку ${this.balance}`)
//         } else if (moneyTake > this.transactionLimit) {
//             console.log(`Сума транзакції перевищує встановлений ліміт ${this.transactionLimit}`)
//         } else {
//             this.balance -= moneyTake;
//         }
//     }
//     this.transactionLimit = function (limit) {
//         this.transactionLimit = 5000;
//     }
//     this.transferCredits = function (moneyTransfer, anyCard) {
//         if (moneyTransfer > this.balance || moneyTransfer > this.transactionLimit) {
//             console.log(`Ви не можете здійснити транзакцію. Перевірте рахунок.`)
//         } else {
//             this.balance -= moneyTransfer * 1.05
//         }
//     }
//
// }
let infoObject = {balance:100, transactionLimit:100, historyLogs: [], key:0};
let userCard = (number) => {
    return {
        getCardOption(number) {
            return console.log(infoObject);
        },
        putCredits(moneyPut) {
            return infoObject.balance += moneyPut;
        },
        takeCredits(moneyTake) {
            if (moneyTake > infoObject.balance) {
                console.log(`Сума транзакції перевищує залишок коштів на рахунку. На вашому рахунку ${infoObject.balance}`)
            } else if (moneyTake > infoObject.transactionLimit) {
                console.log(`Сума транзакції перевищує встановлений ліміт ${infoObject.transactionLimit}`)
            } else {
                infoObject.balance -= moneyTake;
            }
            return infoObject.balance;
        },
        setTransactionLimit(limit) {
            if (limit !== infoObject.transactionLimit){
            return infoObject.transactionLimit = limit}
        },
        transferCredits (moneyTransfer, anyCard) {
            if (moneyTransfer > infoObject.balance || moneyTransfer > infoObject.transactionLimit) {
                console.log(`Ви не можете здійснити транзакцію. Перевірте рахунок.`)
            } else {
               return  infoObject.balance -= moneyTransfer * 1.05
            }
        }
    }
}
console.log(userCard(1).putCredits(200))
console.log(userCard(1).takeCredits(50))
userCard(1).getCardOption(1);
userCard(1).setTransactionLimit(2000);
userCard(1).getCardOption(1);


