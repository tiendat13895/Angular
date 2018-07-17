import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IComment } from '../../interfaces/IComment';
@Injectable()
export class CommentService {


    private _comments: BehaviorSubject<IComment[]> = new BehaviorSubject<IComment[]>([]);
    get comments() {
        return this._comments.asObservable();
    }
    constructor(private http: HttpClient) { }

    getComments(id: number) {
        return this.http.get('/comments?bookid=' + id).subscribe(comments => {
            this._comments.next(comments as IComment[]);
        });
    }

    createComment(comment: IComment) {
        comment.id = Date.now();
        return this.http.post('/comments', comment).subscribe(() => {
            this._comments.getValue().push(comment);
            const newComments = this._comments.getValue();
            this._comments.next(newComments);
        });
    }

    deleteComment(id: number) {
        return this.http.delete('/comments/' + id).subscribe(() => {
            const index = this._comments.getValue().findIndex(b => b.id === id);
            this._comments.getValue().splice(index, 1);
            this._comments.next(this._comments.getValue());
        });
    }

    // editComment(comment: IComment) {
    //     return this.http.put('/comments/' + comment.id, comment).subscribe(() => {
    //         const index = this._comments.getValue().findIndex(b => b.id === comment.id);
    //         this._comments.getValue()[index] = comment;
    //         this._comments.next(this._comments.getValue());
    //     });
    // }
}
