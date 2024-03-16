/*
Добавьте несколько напитков в коллекцию drinks (лучше 5-6). 
(Она создастся - как только вы добавите туда документы).

Пусть у напитков будут поля 
цена, 
крепость, 
и прочие на ваше усмотрение.

Выведите самый дорогой напиток

Выведите топ три самых дешевых напитка

Выведите название самого крепкого напитка.

Дополнительное задание:
создайте напитки с тегами (дессертный, коктейль, горячий и пр.)
получите название напитков, в которых присутсвует искомый тег
*/

use ("bar");
db.drinks.insertMany([
    { title: "Vodka", strength: 40, price: 8.25},
    { title: "Whiskey", strength: 40, price: 9.20},
    { title: "Martini", strength: 16, price: 6.90},
    { title: "Wine", strength: 11, price: 4.40},
    { title: "Beer", strength: 5, price: 3.90},
    { title: "Liquor", strength: 25, price: 7.25},
]);

db.drinks.updateMany({}, { $set: { tags: [] } });
db.drinks.updateOne({ title: "Vodka" }, { $set: { tags: ["крепкий"], strength: 40, price: 8.25 } });
db.drinks.updateOne({ title: "Whiskey" }, { $set: { tags: ["крепкий"], strength: 40, price: 9.20 } });
db.drinks.updateOne({ title: "Martini" }, { $set: { tags: ["коктейль"], strength: 16, price: 6.90 } });
db.drinks.updateOne({ title: "Wine" }, { $set: { tags: ["вино"], strength: 11, price: 4.40 } });
db.drinks.updateOne({ title: "Beer" }, { $set: { tags: ["пиво"], strength: 5, price: 3.90 } });
db.drinks.updateOne({ title: "Liquor" }, { $set: { tags: ["коктейль"], strength: 25, price: 7.25 } });

// №1
// db.drinks.find().sort({price: -1}).limit(1);
// №2
// db.drinks.find().sort({ price: 1 }).limit(3);
// №3
// db.drinks.find().sort({ strength: -1 }).limit(1, {projection: { _id: 0, title: 1 }});
// №4 - задание со звездочкой
// db.drinks.find({ tags: "крепкий" }, { _id: 0, title: 1, strength: 1, price: 1 });