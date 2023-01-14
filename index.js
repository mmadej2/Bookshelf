// Design 2 classes - Book & Bookshelf
// Instance of bookshelf that has instance of book for each book (loop)
// Book - keeps track of all properties found in data like title & author (create variable)
// Bookshelf - maintains array [] of books, can add a book


// Book
//  properties in data - author, language, subject, title
// 
// Bookshelf
//  array of books - [books]
//  add book - function/manipulate

import { bookData } from './book-data';

class Bookshelf {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    render() {
        return (
            <ul>
                
            </ul>
        )
    }
}

class Book {
    constructor(author, language, subject, title) {
        this.author = author;
        this.title = title;
        this.language = language;
        this.subject = subject;
    }

    render() {
        return (
            <li>
                
            </li>
        )
    }
}

const img = document.createElement('book.jpeg');

const div = document.createElement('#book');
div.setAttribute('width=150px, height: 200px;');

//   1. Create instance of Bookshelf
//   2. Create instance of Book from bookData
//   3. Add book to bookshelf

const bookShelf = new Bookshelf() ;


for (let i=0; i < bookData.length; i++) {
    const book = new Book(bookData[i].author, bookData[i].language, bookData[i].subject, bookData[i].title)
        bookShelf.addBook(book)
}
// const book = new Book(bookData.author, bookData.language, bookData.subject, bookData.title)
// bookShelf.addBook(book)

const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Type your comment here";

const submitButton = document.createElement("button");
submitButton.innerText = "Hit Me!";

form.appendChild(input);
form.appendChild(submitButton);

document.body.appendChild(form);









