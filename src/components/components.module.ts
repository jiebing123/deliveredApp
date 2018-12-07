import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { AppIconComponent } from './app-icon/app-icon';
import { AppMapComponent } from './app-map/app-map';
import { AppTypeComponent } from './app-type/app-type';
@NgModule({
	declarations: [HeaderComponent,
    AppIconComponent,
    AppMapComponent,
    AppTypeComponent],
	imports: [IonicModule],
	exports: [HeaderComponent,
    AppIconComponent,
    AppMapComponent,
    AppTypeComponent]
})
export class ComponentsModule {}
