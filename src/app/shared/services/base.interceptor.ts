import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';


@Injectable()
export class BaseIntercepter implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            url: this.prepareUrl(req.url), setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': 'janeto'
            }
        })

        return next.handle(req);
    }

    private isAbsoluteUrl(url: string): boolean {
        const absolutePattern = /^http?:\/\//i;
        return absolutePattern.test(url);
    }

    private prepareUrl(url: string): string {
        url = this.isAbsoluteUrl(url) ? url : environment.baseUrl + '/' + url;
        return url.replace(/([^:]\/)\/+/g, '$1');
    }
}
