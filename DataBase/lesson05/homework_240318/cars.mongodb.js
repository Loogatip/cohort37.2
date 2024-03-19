
use('car_park');

// db.cars.insertMany([
//     { _id: 1, brand: "BMW", price: 20000, model: "X5", year: 2015, horsepower: 300},
//     { _id: 2, brand: "Audi", price: 44000, model: "A6", year: 2021, horsepower: 340},
//     { _id: 3, brand: "Ford", price: 18000, model: "Mustang", year: 2017, horsepower: 450},
//     { _id: 4, brand: "Mercedes-Benz", price: 25000, model: "C-Class", year: 2016, horsepower: 240},
//     { _id: 5, brand: "Audi", price: 22000, model: "A4", year: 2019, horsepower: 190},
//     { _id: 6, brand: "Honda", price: 17000, model: "Accord", year: 2018, horsepower: 192},
//     { _id: 7, brand: "Chevrolet", price: 16000, model: "Camaro", year: 2017, horsepower: 455},
//     { _id: 8, brand: "BMW", price: 31000, model: "325", year: 2020, horsepower: 248},
//     { _id: 9, brand: "BMW", price: 36000, model: "520", year: 2020, horsepower: 188},
//     { _id: 10, brand: "Volkswagen", price: 19000, model: "Jetta", year: 2021, horsepower: 147}
// ]);

// db.owners.insertMany([
//     { owner: "Ivanov Ivan", phone: "1234567", cars: [1, 2] },
//     { owner: "Petrov Petr", phone: "2345678", cars: [3, 4, 5] },
//     { owner: "Sidorov Sidr", phone: "3456789", cars: [6, 7, 8] },
//     { owner: "Kuznetsov Kuzma", phone: "4567890", cars: [9, 10] }
// ]);

// №1 Выведите среднюю цену по брендам (задание на использование group).
// db.cars.aggregate([
//     {
//         $group: {_id:"$brand", averagePrice:{$avg:"$price"}},
//     }
// ]);

// №2 Выведите среднюю цену по годам.
// db.cars.aggregate([
//     {
//         $group: {_id:"$year", averagePrice:{$avg:"$price"}},
//     }
// ]);

// №3 Выведите максимальную мощность по брендам.
// db.cars.aggregate([
//     {
//         $group: {_id:"$brand", maxPower:{$max:"$horsepower"}},
//     }
// ]);

// №4 Выведите 3 самых дешевые машины.
// db.cars.aggregate([
//     {
//         $sort: {price: 1}
//     },
//     {
//         $limit: 3
//     }
// ]);

// №5а Вывести название бренда с большим кол-ом машин
// db.cars.aggregate([
//     {
//         $group: { 
//             _id: "$brand",
//             carsCount: {
//                 $count:{},
//             }, 
//         }
//     },
//     {
//         $sort: {
//             carsCount: -1,
//         },
//     },
//     {
//         $limit: 1
//     }
// ]);

// №5b Выведите 3 самых дорогие машины определенного бренда.
// db.cars.aggregate([
//     { 
//         $match: { brand: "Audi" } 
//     }, 
//     { 
//         $sort: { price: -1 } 
//     },
//     { 
//         $limit: 3 
//     }
// ]);

// №6 Выведите случайный автомобиль марки бмв (или другой на ваше усмотрение).
// db.cars.aggregate([
//     { 
//         $match: { brand: "BMW" } 
//     }, 
//     { 
//         $sample: {
//           size: 1
//         }
//     }
// ]);

// №7 Выведите владельцев вместе с их автомобилями
// db.owners.aggregate([
//     {
//       $lookup: {
//         from: "cars",
//         localField: "cars",
//         foreignField: "_id",
//         as: "owned_cars"
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         owner: 1,
//         phone: 1,
//         "owned_cars.brand": 1,
//         "owned_cars.model": 1
//       }
//     }
//   ]);

// №8 Выведите тех кто владеет автомобилями дороже 20000
//   db.owners.aggregate([
//     {
//       $lookup: {
//         from: "cars",
//         localField: "cars",
//         foreignField: "_id",
//         as: "owned_cars"
//       }
//     },
//     {
//       $unwind: "$owned_cars"
//     },
//     {
//       $match: {
//         "owned_cars.price": { $gt: 20000 }
//       }
//     },
//     {
//       $project: {
//         _id: 0,
//         owner: 1,
//         phone: 1,
//         "owned_cars.brand": 1,
//         "owned_cars.model": 1,
//         "owned_cars.price": 1
//       }
//     }
//   ]);

//   №9 Выведите среднюю цену машин у каждого владельца если эта цена больше 20000
// db.owners.aggregate([
//     {
//       $lookup: {
//         from: "cars",
//         localField: "cars",
//         foreignField: "_id",
//         as: "owned_cars"
//       }
//     },
//     {
//       $unwind: "$owned_cars"
//     },
//     {
//       $group: {
//         _id: "$owner",
//         averagePrice: { $avg: "$owned_cars.price" }
//       }
//     },
//     {
//       $match: {
//         averagePrice: { $gt: 20000 }
//       }
//     }
//   ]);

db.cars.aggregate([
    {
      $lookup: {
        from: "owners",
        localField: "_id",
        foreignField: "cars",
        as: "owners"
      }
    },
    {
      $group: {
        _id: "$owners.owner",
        averagePrice: { $avg: "$price" }
      }
    },
    {
      $match: {
        averagePrice: { $gt: 20000 }
      }
    }
  ]);