import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { OnScrollDirective } from '../directives/onScroll';

@NgModule({
    declarations:[
        OnScrollDirective
    ],
    imports:[
        ComponentsModule
    ],
    exports:[
        ComponentsModule,
        OnScrollDirective
    ]
})

export class ShareModule{

}