import { BookService } from './services/book.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseIntercepter } from './services/base.interceptor';
import { CommentService } from './services/comment.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [BookService, CommentService, {
                provide: HTTP_INTERCEPTORS,
                useClass: BaseIntercepter,
                multi: true
            }]
        };
    }
}
