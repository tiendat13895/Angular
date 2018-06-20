import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFilterPipe } from '../ebook/pipes/bookfilter.pipe';
import { LibraryComponent } from './library/library.component';
import { InStockPipe } from '../ebook/pipes/instock.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { EBookRoutingModule } from './ebook.routing';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';


@NgModule({
    imports: [CommonModule, FormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, EBookRoutingModule],
    exports: [],
    declarations: [
        BookComponent,
        BookDetailComponent,
        BookFilterPipe,
        LibraryComponent,
        InStockPipe,
        AddBookComponent,
        EditBookComponent,
        RemoveBookComponent,
        SearchComponent,
        DetailsComponent
    ],
    providers: [],
    entryComponents: [
        AddBookComponent,
        EditBookComponent,
        RemoveBookComponent
    ]
})
export class EBookModule { }
