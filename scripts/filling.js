
var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

const users_sql="INSERT INTO users(username,password,role,state) values ?";
const users_data=[
    ['admin','$2a$10$1jjBG4G4E3qO7i1kMGHg8.M/ieoj2izcWz8zcp2gZZx8WWNI5aQOy','root','UP'],
    ['anmol','$2a$10$o.7vnvY7QscRYG/gIHYdsuT.HNaI133qUHnBBML4viQn0DV1Y2ll.','wholeseller','rajasthan'],
    ['lovely','$2a$10$oAI2xBZQDaqQSjqrA3J0Iu3b/YxKd4xKSrdNzvtBpMj8AkWWofUse','retailer','punjab'],
    ['abhishek','$2a$10$ym0Ja8rvIuFRJvcrBjsi1OnNIceamD2lF/oH2VZOno.CAcN6zmfEK','wholeseller','delhi'],
    ['kiran','$2a$10$QBhk.pD3yFmyDYIvT2JBa.kcHcc2cp4y24HgBUx06WgG.8G4TS1l6','farmer','Tamil Nadu'],
    ['aditya','$2a$10$knLNmlmHeP.nXorrWi1jUuDJsRtdqDJFU6oDpf7xBJh9LYc91695W','farmer','UP']
];

const wholeseller_sql="INSERT INTO Wholeseller(id,title,stock,price) values ?";
const wholeseller_data=[
    [2,'carrot',40,50],
    [2,'watermelon',32,40],
    [4,'apples',15,100],
    [4,'cauliflower',25,20]
];

const retailer_sql="INSERT INTO Retailer(id,title,stock,price) values ?";
const retailer_data=[
    [3,'carrot',30,65],
    [3,'watermelon',20,50],
    [3,'apples',10,120],
    [3,'cauliflower',20,40]
];

const farmer_sql="INSERT INTO Farmer(id,title,stock,price) values ?";
const farmer_data=[
    [5,'carrot',60,40],
    [5,'watermelon',50,30],
    [6,'apples',30,70],
    [6,'cauliflower',45,10]
];

connection.query('CREATE DATABASE IF NOT EXISTS '+dbconfig.database);
connection.query('USE ' + dbconfig.database);

connection.query(users_sql,[users_data],(err,result) => {
    if(err) throw err;
    console.log("Dummy users inserted");
});

connection.query(wholeseller_sql,[wholeseller_data],(err,result) => {
    if(err) throw err;
    console.log("Dummy wholesellers inserted");
});

connection.query(retailer_sql,[retailer_data],(err,result) => {
    if(err) throw err;
    console.log("Dummy retailers inserted");
});

connection.query(farmer_sql,[farmer_data],(err,result) => {
    if(err) throw err;
    console.log("Dummy farmers inserted");
});





    // Inserting values in table
    var sql = "INSERT INTO Items (id,name,category) VALUES ?";
    var items = [
        [1,'Apple','Fruit'] , 
        [2,'Apricots','Fruit'] ,
        [3,'Avocado','Fruit'] ,
        [4,'Banana','Fruit'] ,
        [5,'Blackberries','Fruit'] ,
        [6,'Blackcurrant','Fruit'] ,
        [7,'Blueberries','Fruit'] ,
        [8,'Cherries','Fruit'] ,
        [9,'Clementine','Fruit'] ,
        [10,'Coconut','Fruit'] ,
        [11,'Cranberries','Fruit'] ,
        [12,'Grapefruit','Fruit'] ,
        [13,'Grapes','Fruit'] ,
        [14,'Guava','Fruit'] ,
        [15,'Jackfruit','Fruit'] ,
        [16,'Kiwifruit','Fruit'] ,
        [17,'Kumquat','Fruit'] ,
        [18,'Lemon','Fruit'] ,
        [19,'Lychee','Fruit'],
        [20,'Mango','Fruit'] ,
        [21,'Mulberries','Fruit'] ,
        [22,'Olives','Fruit'] ,
        [23,'Papaya','Fruit'] ,
        [24,'Pear','Fruit'] ,
        [25,'Pineapple','Fruit'] ,
        [26,'Plums','Fruit'] ,
        [27,'Pomegranate','Fruit'] ,
        [28,'Prunes','Fruit'] ,
        [29,'Raspberries','Fruit'] ,
        [30,'Strawberries','Fruit'] ,
        [31,'Tamarind','Fruit'] ,
        [32,'Beetroot','Vegetable'] ,
        [33,'Bitter Gourd','Vegetable'] ,
        [34,'Black Pepper','Vegetable'] ,
        [35,'Bottle Gourd','Vegetable'] ,
        [36,'Cabbage','Vegetable'] ,
        [37,'Capsicum','Vegetable'] ,
        [38,'Carrot','Vegetable'] ,
        [39,'Cauliflower','Vegetable'] ,
        [40,'Corn','Vegetable'] ,
        [41,'Chilli','Vegetable'] ,
        [42,'Cucumber','Vegetable'] ,
        [43,'Curry Leaf','Vegetable'] ,
        [44,'Garlic','Vegetable'] ,
        [45,'Ginger','Vegetable'] ,
        [46,'Green Beans','Vegetable'] ,
        [47,'Jackfruit','Vegetable'] ,
        [48,'Lady Finger','Vegetable'] ,
        [49,'Mushroom','Vegetable'] ,
        [50,'Onion','Vegetable'] ,
        [51,'Peas','Vegetable'] ,
        [52,'Potato','Vegetable'] ,
        [53,'Radish','Vegetable'] ,
        [54,'Spinach','Vegetable'] ,
        [55,'Spring Onion','Vegetable'] ,
        [56,'Sweet Potato','Vegetable'] ,
        [57,'Tomato','Vegetable'] ,
        [58,'Turmeric','Vegetable'] ,
        [59,'Turnip','Vegetable']
    ]; 
    
    // var sql = "INSERT INTO Items (id,name,category) VALUES ?";
    // var items = [
    //     [60,'Ajwain','Spice'] ,
    //     [61,'Almond','Spice'] ,
    //     [62,'Black Pepper','Spice'] ,
    //     [63,'Cardamom','Spice'] ,
    //     [64,'Cinnamon','Spice'] ,    
    //     [65,'Clove','Spice'] ,         
    //     [66,'Coriander','Spice'] ,
    //     [67,'Cumin','Spice'] ,
    //     [68,'Curry Leaves','Spice'] ,
    //     [69,'Garlic','Spice'] ,
    //     [70,'Ginger','Spice'] ,
    //     [71,'Heeng','Spice'] ,
    //     [72,'Mint','Spice'] ,
    //     [73,'Mustard','Spice'] ,
    //     [74,'Red Chilli','Spice'] ,
    //     [75,'Saunf','Spice'] ,
    //     [76,'Tej Patta','Spice'] ,
    //     [77,'Tulsi','Spice'] ,
    //     [78,'Turmeric','Spice']
    // ];
//        
//         
  connection.query(sql,[items], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " records inserted");
  });



  connection.end();