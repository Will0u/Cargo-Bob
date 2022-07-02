import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaybobCategComponent } from './components/categories/displaybob-categ/displaybob-categ.component';
import { DisplaybobComponent } from './components/categories/displaybob/displaybob.component';
import { LegalMentionsComponent } from './components/footer/legal-mentions/legal-mentions.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductpageComponent } from './components/product/productpage/productpage/productpage.component';

const routes: Routes = [
  {path: '' , component: MainPageComponent},

  {path: 'mentions-legales' , component: LegalMentionsComponent},

  {path: 'bob' , component: DisplaybobComponent},
  {path: 'bob/:id' , component: ProductpageComponent},

  {path: 'bob/categ/:categ' , component: DisplaybobCategComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
