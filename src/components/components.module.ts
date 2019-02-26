import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { AppIconComponent } from './app-icon/app-icon';
import { AppMapComponent } from './app-map/app-map';
import { AppTypeComponent } from './app-type/app-type';
import { AppAlertComponent } from './app-alert/app-alert';
import { ProductsCountingComponent } from './products-counting/products-counting';
import { ProductListComponent } from './product-list/product-list';
@NgModule({
	declarations: [
        HeaderComponent,
        AppIconComponent,
        AppMapComponent,
        AppTypeComponent,
        AppAlertComponent,
        ProductsCountingComponent,
    ProductListComponent
    ],
	imports: [IonicModule],
	exports: [
        HeaderComponent,
        AppIconComponent,
        AppMapComponent,
        AppTypeComponent,
        AppAlertComponent,
        ProductsCountingComponent,
    ProductListComponent
    ]
})
export class ComponentsModule {}
