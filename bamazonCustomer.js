var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,


    user: "root",


    password: "password",
    database: "bamazondb"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log("ID:" + res[i].item_id + " | " + "Product:" + res[i].product_name + " | " + "Dept:" + res[i].department_name + " | " + "Price:" + res[i].price);
    	console.log("-----------------------------------");
  var choice = function() {
  inquirer.prompt({
    name: "choice",
    type: "input",
    message: "Which item by ID do you want to buy?",
    
  }).then(function(answer) {
    
    if (answer.choice === res[i].item_id) {
    inquirer.prompt({
    name: "stock",
    type: "input",
    message: "How many would you like to buy?",
    
  }).then(function(answer) {
    
    if (answer.choice === res[i].item_id) {
    	
      }
    
  });
    	
      }
    
  });
  
};

    }
    choice();
});



