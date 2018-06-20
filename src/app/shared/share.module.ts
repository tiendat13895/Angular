import { BookService } from './services/book.service';
import { NgModule, ModuleWithProviders } from '@angular/core';


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
            providers: [BookService]
        };
    }
}
