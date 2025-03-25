import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    HomeComponent,
    FooterContactComponent,
    ProductsDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
