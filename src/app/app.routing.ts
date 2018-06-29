import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JtcClassComponent } from './jtc-class/jtc-class.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './services/authGuard.service';


const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], component: LayoutComponent, children: [
      {
        path: '', redirectTo: 'library', pathMatch: 'full'
      },
      {
        path: 'library', loadChildren: '../app/ebook/ebook.module#EBookModule'
      },
      {
        path: 'class', loadChildren: '../app/jtc-class/class.module#ClassModule'
      }
    ]
  },
  {
    path: 'auth', loadChildren: '../app/auth/auth.module#AuthModule'
  },
  {
    path: '**', component: FileNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [JtcClassComponent, FileNotFoundComponent];
