import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalMentionsComponent } from './components/footer/legal-mentions/legal-mentions.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductpageComponent } from './components/product/productpage/productpage/productpage.component';

const routes: Routes = [
  {path: '' , component: MainPageComponent},
  {path: 'mentions-legales' , component: LegalMentionsComponent},
  {path: 'bob/:id' , component: ProductpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
