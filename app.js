import nedb from "nedb-promises"

const database = new nedb({ filename: 'menu.db', autoload: true })

const menu = [
    { id: 1, name: 'Hamburger', price: 5.99 },
    { id: 2, name: 'Cheeseburger', price: 6.99 },
    { id: 3, name: 'Fries', price: 2.99 },
    { id: 4, name: 'Soda', price: 1.99 },
    { id: 5, name: 'Salad', price: 8.99 }
]

//Stoppa in flera items i databasen..
//database.insert(menu)

//Hitta alla document i databasen.
const document1 = await database.find({});
console.log(document1)

//Hitta ett specifikt object i databasen.
const document2 = await database.findOne({ id: 1 });
console.log(document2)

//Hämta alla document som innehåller strängen "bur" i namnet.
const document3 = await database.find({ name: /bur/ });

//Hämta alla document där price är mindre än 3.
const document4 = await database.find({ price: { $lt: 3 } });
console.log(document4)

const document5 = await database.find({ price: { $gt: 3 } });
console.log(document5)

//Uppdatera ett document.
// const updatedItem = await database.update({ id: 1 }, {"id":1,"name":"Hamburger","price":6.99,"_id":"qHbUElglCuUFtHrg"}});
// console.log(updatedItem)

//Ta bort ett document med id 5.
const removedItem = await database.remove({ id: 5 });
console.log(removedItem)