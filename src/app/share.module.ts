import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { OnScrollDirective } from '../directives/onScroll';
import { OnBlankHideDirective } from '../directives/onBlankHide';

@NgModule({
    declarations:[
        OnScrollDirective,
        OnBlankHideDirective
    ],
    imports:[
        ComponentsModule
    ],
    exports:[
        ComponentsModule,
        OnScrollDirective,
        OnBlankHideDirective
    ]
})

export class ShareModule{

}