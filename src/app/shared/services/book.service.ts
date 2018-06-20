import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IBook } from '../../interfaces/IBook';
@Injectable()
export class BookService {


    private _books: BehaviorSubject<IBook[]> = new BehaviorSubject<IBook[]>([]);
    get books() {
        return this._books.asObservable();
    }
    constructor(private http: HttpClient) {
    }

    getBooks() {
        return this.http.get('http://localhost:3000/books').subscribe(books => {
            this._books.next(books as IBook[]);
        });
    }

    getBook(id: number) {
        return this.http.get('http://localhost:3000/books/' +  id);
    }

    createBook(book: IBook) {
        book.id = Date.now();
        return this.http.post('http://localhost:3000/books', book).subscribe(() => {
            this._books.getValue().push(book);
            const newBooks = this._books.getValue();
            this._books.next(newBooks);
        });
    }

    removeBook(id: number) {
        return this.http.delete('http://localhost:3000/books/' + id).subscribe(() => {
            const index = this._books.getValue().findIndex(b => b.id === id);
            this._books.getValue().splice(index, 1);
            this._books.next(this._books.getValue());
        });
    }

    editBook(book: IBook) {
        return this.http.put('http://localhost:3000/books/' + book.id, book).subscribe(() => {
            const index = this._books.getValue().findIndex(b => b.id === book.id);
            this._books.getValue()[index] = book;
            this._books.next(this._books.getValue());
        });
    }
}
