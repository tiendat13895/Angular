import { Injectable, ErrorHandler } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DownloadService {

    constructor(private http: Http) { }

    private handleError(error: Response): Observable<any> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    public getFile(path: string): Observable<Blob> {
        let options = new RequestOptions({ responseType: ResponseContentType.Blob });

        return this.http.get(path, options).map((response: Response) => <Blob>response.blob()).catch(this.handleError);
    }
}