import { IBook } from './../interfaces/IBook';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable()
export class BookService {

    constructor(private http: HttpClient) {
    }

    getBooks() {
        return this.http.get('http://localhost:3000/books');
    }

    createBook(book: IBook) {
        book.id = Date.now();
        return this.http.post('http://localhost:3000/books', book);
    }

    editBook(book: IBook) {
        return this.http.put('http://localhost:3000/books/' + book.id, book);
    }
    
    removeBook(id: number) {
        return this.http.delete('http://localhost:3000/books/' + id);
    }

}
