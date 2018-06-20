import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JtcClassComponent } from './jtc-class/jtc-class.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'library', pathMatch: 'full'
  },
  {
    path: 'auth', loadChildren: '../app/auth/auth.module#AuthModule'
  },
  {
    path: 'library', loadChildren: '../app/ebook/ebook.module#EBookModule'
  },
  {
    path: 'class', loadChildren: '../app/jtc-class/class.module#ClassModule'
  }, {
    path: '**', component: FileNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [JtcClassComponent, FileNotFoundComponent];
