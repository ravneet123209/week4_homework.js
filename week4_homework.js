//Task 1 — Create a Book Object

let book = {
  title: "Harry Potter",
  author: "J.k rollin",
  year: 1955,
  rating : 5 ,
  isAvailable: true
};

//from object we are using values of keys

console.log(`The book named as ${book.title} was written by ${book.author} in year ${book.year} having rating of ${book.rating}, is available = ${book.isAvailable}`);


//Task 2 — Library Array

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