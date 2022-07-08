import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { LegalMentionsComponent } from './components/footer/legal-mentions/legal-mentions.component';
import { CardComponent } from './components/product/productcard/card/card.component';
import { ProductpageComponent } from './components/product/productpage/productpage/productpage.component';
import { SamebobcardComponent } from './components/product/samebobcard/samebobcard.component';
import { DisplaybobComponent } from './components/categories/displaybob/displaybob.component';
import { DisplaybobCategComponent } from './components/categories/displaybob-categ/displaybob-categ.component';
import { FormComponent } from './components/connection/form/form.component';
import { RegisterComponent } from './components/connection/register/register.component';
import { FormsModule } from '@angular/forms';
import { EditBobComponent } from './components/admin/edit-bob/edit-bob.component';
import { NoAcessComponent } from './components/error/no-acess/no-acess.component';
import { Error404Component } from './components/error/error404/error404.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    FooterComponent,
    LegalMentionsComponent,
    CardComponent,
    ProductpageComponent,
    SamebobcardComponent,
    DisplaybobComponent,
    DisplaybobCategComponent,
    FormComponent,
    RegisterComponent,
    EditBobComponent,
    NoAcessComponent,
    Error404Component,
    UserHomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
