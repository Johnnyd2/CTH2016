var program = require('commander');
 
program
  .version('0.1')
  .option('-t, --title [value]', 'title', 'empty')
  .option('-a, --author [value]', 'author', 'empty') 
  .option('-p, --price [value]', 'price', 'empty')
  .option('-k, --kind [value]', 'kind', 'empty')

  .parse(process.argv);


var title1 = "The Whisper";
var author1 = "John Grisham";
var kind1 = "Hardcover";
var price1 = "24.95";

var title2 = "Born to Run";
var author2 = "Bruce Springsteen";
var  kind2 = "Hardcover";
var price2 = "23.95";

var title3 = "The Rise of IO";
var author3 = "Wesley Chu";
var kind3 = "Paperback";
var price3 = "16.95";

var title4 = "Me Befoe You";
var author4 = "Jojo Moyes";
var kind4 = "Paperback";
var price4 = "10.95";

var title5 = "Shadow to Self";
var author5 = "Brandon Sanderson";
var kind5 = "Paperback";
var price5 = "13.99";

switch (program.title) {
    case title1:
        console.log("title: "+ title1);
        console.log("author: "+ author1);
        console.log("kind: "+ kind1);
        console.log("price: "+ price1);
        break;
    case title2:
        console.log("title: "+ title2);
        console.log("author: "+ author2);
        console.log ("kind: " +kind2);
        console.log ("price: " +price2);
        break;
    case title3:
        console.log("title: " +title3);
        console.log("author: " +author3);
        console.log("kind: " +kind3);
        console.log("price: " +price3);
        break;
    case title4:
        console.log("title: " +title4);
        console.log("author: " +author4);
        console.log("kind: " +kind3);
        console.log("price: " +price4);
        break;
    case title5:
        console.log("title: " +title5);
        console.log("author: " +author5);
        console.log("kind: " +kind5);
        console.log("price: " +price5);
        break;
    case "empty":
        break;
    default: 
        console.log("no match");
        break;



}

switch (program.author) {
    case author1:
        console.log("title: "+ title1);
        console.log("author: "+ author1);
        console.log("kind: "+ kind1);
        console.log("price: "+ price1);
        break;
    case author2:
        console.log("title: "+ title2);
        console.log("author: "+ author2);
        console.log ("kind:" +kind2);
        console.log ("price: " +price2);
        break;
    case author3:
        console.log("title: " +title3);
        console.log("author: " +author3);
        console.log("kind: " +kind3);
        console.log("price: " +price3);
        break;
    case author4:
        console.log("title: " +title4);
        console.log("author: " +author4);
        console.log("kind: " +kind3);
        console.log("price: " +price4);
        break;
    case author5:
        console.log("title: " +title5);
        console.log("author: " +author5);
        console.log("kind: " +kind5);
        console.log("price: " +price5);
        break;
    default: 
        console.log("no match");
        break;




}

switch (program.kind) {
    case kind1:
        console.log("title: "+ title1);
        console.log("author: "+ author1);
        console.log("kind: "+ kind1);
        console.log("price"+ price1);
        break;
    case kind2:
        console.log("title: "+ title2);
        console.log("author: "+ author2);
        console.log ("kind: " +kind2);
        console.log ("price: " +price2);
        break;
    case kind3:
        console.log("title: " +title3);
        console.log("author: " +author3);
        console.log("kind: " +kind3);
        console.log("price: " +price3);
        break;
    case kind4:
        console.log("title" +title4);
        console.log("author" +author4);
        console.log("kind" +kind3);
        console.log("price" +price4);
        break;
    case kind5:
        console.log("title: " +title5);
        console.log("author: " +author5);
        console.log("kind: " +kind5);
        console.log("price: " +price5);
        break;
    default: 
        console.log("no match");
        break;
    



}

switch (program.price) {
    case price1:
        console.log("title: "+ title1);
        console.log("author: "+ author1);
        console.log("kind: "+ kind1);
        console.log("price: "+ price1);
        break;
    case price2:
        console.log("title: "+ title2);
        console.log("author: "+ author2);
        console.log ("kind: " +kind2);
        console.log ("price: " +price2);
        break;
    case price3:
        console.log("title: " +title3);
        console.log("author: " +author3);
        console.log("kind: " +kind3);
        console.log("price: " +price3);
        break;
    case price4:
        console.log("title: " +title4);
        console.log("author: " +author4);
        console.log("kind: " +kind3);
        console.log("price: " +price4);
        break;
    case price5:
        console.log("title: " +title5);
        console.log("author: " +author5);
        console.log("kind: " +kind5);
        console.log("price: " +price5);
        break;
    default: 
        console.log("no match");
        break;
    



}







 





