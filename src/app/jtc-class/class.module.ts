import { ClassRoutingModule } from './class.routing';
import { JtcClassComponent } from './jtc-class.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [ClassRoutingModule],
    exports: [],
    declarations: [JtcClassComponent],
    providers: [],
})
export class ClassModule { }
