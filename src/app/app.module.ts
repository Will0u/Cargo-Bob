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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
