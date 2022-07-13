import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { DisplaybobCategComponent } from './components/categories/displaybob-categ/displaybob-categ.component';
import { DisplaybobComponent } from './components/categories/displaybob/displaybob.component';
import { FormComponent } from './components/connection/form/form.component';
import { RegisterComponent } from './components/connection/register/register.component';
import { Error404Component } from './components/error/error404/error404.component';
import { NoAcessComponent } from './components/error/no-acess/no-acess.component';
import { LegalMentionsComponent } from './components/footer/legal-mentions/legal-mentions.component';
import { AdminGuardGuard } from './components/guards/adminGuard/admin-guard.guard';
import { UserGuardGuard } from './components/guards/userGuard/user-guard.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProductpageComponent } from './components/product/productpage/productpage/productpage.component';
import { ShoppingCartComponent } from './components/user/shopping-cart/shopping-cart.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserSettingsComponent } from './components/user/user-settings/user-settings.component';

const routes: Routes = [
  {path: '' , component: MainPageComponent},

  {path: 'mentions-legales' , component: LegalMentionsComponent},

  {path: 'bob' , component: DisplaybobComponent},
  {path: 'bob/:id' , component: ProductpageComponent},

  {path: 'bob/categ/:categ' , component: DisplaybobCategComponent},

  {path: 'connection' , component: FormComponent},
  {path: 'register' , component: RegisterComponent},

  {path: 'noAcess' , component: NoAcessComponent},
  {path: 'error404' , component: Error404Component},

  {path: 'adminHome' , component: HomeComponent , canActivate: [AdminGuardGuard] },

  {path: 'userHome' , component: UserHomeComponent , canActivate: [UserGuardGuard]},
  {path: 'userHome/cart' , component: ShoppingCartComponent , canActivate: [UserGuardGuard]} ,
  {path: 'userHome/settings' , component: UserSettingsComponent, canActivate: [UserGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
