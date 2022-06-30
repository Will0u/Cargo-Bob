import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalMentionsComponent } from './components/footer/legal-mentions/legal-mentions.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: '' , component: MainPageComponent},
  {path: 'mentions-legales' , component: LegalMentionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
