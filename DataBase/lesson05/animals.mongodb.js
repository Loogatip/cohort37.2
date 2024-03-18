
use('zoo');

// db.animals.insertMany
// ([
//   {kind: "tiger", weight: 300, name: "Alan", predatory: true},
//   {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
//   {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
//   {kind: "shark", weight: 400, name: "Sharp", predatory: false},
//   {kind: "shark", weight: 450, name: "John", predatory: false},
//   {kind: "panda", weight: 200, name: "Po", predatory: false},

//  ]);

// SQL: UPDATE animals SET predatory = true WHERE kind = "shark"
// ndb.animals.updateMany({ kind: "shark" }, { $set: { predatory: true } });

// SQL: UPDATE animals SET weigth = weigth+3;
//db.animals.updateMany({}, {$inc: {weight: 3}});

//db.animals.updateMany({}, {$rename: {weight: "kg"}})

// db.animals.updateMany(
//   { predatory: true },
//   { $set: { foods: ["fish", "squid"] } }
//  );

//SQL: прямого аналога нет, добавляли бы через отдельные таблицы
//  db.animals.updateOne(            // -> добавляет только первому из списка
//   {kind: "tiger"},
//   {$push: {foods: "wolf"}}
//  );

// db.animals.updateOne(
//   {kind: "shark"},
//   {$pull: {foods: "wolf"}}
//  );

//SQL: UPDATE animals SET predatory = NULL WHERE kind = 'chicken' LIMIT 1
// db.animals.updateOne(
//   {kind: "chicken"},
//   {$unset: {predatory: ""}}
//  ); 

const pinguin = db.animals.findOne({kind: 'penguin'}, {_id: 1});  // -> если так

db.animals.updateOne(
    { _id: ObjectId(pinguin._id)},                                // -> тогда так
//  {_id: ObjectId("65f811889fb3a0a731415863")},          // -> или только так
  {$set: {name: "Kovalsky 3"}}
 );
 
db.animals.find();
