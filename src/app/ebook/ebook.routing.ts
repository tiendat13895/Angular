import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
    { path: '', component: LibraryComponent },
    {
        path: 'book/:id', component: BookDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EBookRoutingModule { }

export const routedComponents = [];
