import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Support Reactive forms
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


