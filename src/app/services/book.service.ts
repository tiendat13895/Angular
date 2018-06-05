import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

    getBooks() {
        return [{
            cover: 'assets/book-cover-1.png',
            title: 'Lap trinh C++',
            price: 10000,
            instock: true
        }, {
            cover: 'assets/book-cover-3.png',
            title: 'Angular',
            price: 10000,
            instock: true
        }, {
            cover: 'assets/book-cover-5.png',
            title: 'Front End',
            price: 10000,
            instock: true
        }, {
            cover: 'assets/book-cover-4.png',
            title: 'MongoDB',
            price: 10000,
            instock: true
        }, {
            cover: 'assets/Book-cover-2.png',
            title: 'NodeJS',
            price: 10000,
            instock: true
        }, {
            cover: 'assets/Book-cover-2.png',
            title: 'NodeJS',
            price: 10000,
            instock: true
        }];

    }
}
