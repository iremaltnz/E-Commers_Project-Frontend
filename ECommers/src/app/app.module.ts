import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ProductDetailPageComponent } from './components/Product/product-detail-page/product-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NaviComponent,
    SidebarComponent,
    ProductDetailPageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
