/////////////
//Task 1 — Create a Book Object
////////////

let book = {
  title: "Harry Potter",
  author: "J.k rollin",
  year: 1955,
  rating : 5 ,
  isAvailable: true
};

//from object we are using values of keys

console.log(`The book named as ${book.title} was written by ${book.author} in year ${book.year} having rating of ${book.rating}, is available = ${book.isAvailable}`);

///////////
//Task 2 — Library Array
//////////

let library = [
  { title: "Book 1", author: "Author 1", year: 2000, isAvailable: true },
  { title: "Book 2", author: "Author 2", year: 2010, isAvailable: false }
];


//In library books are stored as an array
let availableBook = 0;
let countOfBook = 0;

for(let i =0; i <= library.length-1;i++){
    console.log(library[i].title);
    if(library[i].isAvailable ===true){
        availableBook++;
    }
    countOfBook++;
}

console.log("number of books available= ",availableBook);

console.log("Total number of books = ",countOfBook);

/////////
//Task 3 — Function: Find Book
////////
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Harry Potter", author: "J.K. Rowling", year: 1997 }
];

function findBook(title) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      return books[i];   // return the book object
    }
  }
  return "Not found";    
}

console.log(findBook("1984"));

console.log(findBook("The Alchemist"));

/////////
//Task 4 — Calculate Average Publication Year
////////

let total = 0;

for (let i = 0; i < library.length; i++) {
  total += library[i].year;
}

let averageYear = total / library.length;

console.log("Average publication year:", averageYear);

////////////////
//Bonus
//////////////

let library1 = [
  { title: "Book 1", author: "Author 1", year: 2000,rating : 4, isAvailable: true },
  { title: "Book 2", author: "Author 2", year: 2010,rating : 3, isAvailable: false },
  { title: "Book 3", author: "Author 3", year: 2005,rating : 5, isAvailable: false }
];

function findHighestRatedBook() {
  let highest = library1[0];   

  for (let i = 1; i < library1.length; i++) {
    if (library1[i].rating > highest.rating) {

      highest = library1[i];
    }
  }

  return highest;
}

console.log("Highest rated book: ", findHighestRatedBook());