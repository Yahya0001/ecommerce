import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitPageComponent } from './produit-page/produit-page.component';
import { HomeComponent } from './home/home.component';
import { SeConnecterComponent } from './auth/se-connecter/se-connecter.component';
import { MotdepasseComponent } from './auth/motdepasse/motdepasse.component';
import { NvcompteComponent } from './auth/nvcompte/nvcompte.component';
import { PanierComponent } from './panier/panier.component';
import { CategoryComponent } from './category/category.component';
import { CommandeHistoriqueComponent } from './commande-historique/commande-historique.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  { path: '' , component : HomeComponent },
  { path: 'produit' , component : ProduitPageComponent },
  {path:'nvcompte' , component:  NvcompteComponent },
  {path:'se_connecter' , component:  SeConnecterComponent },
  {path:'motdepasse' , component:  MotdepasseComponent },
  {path:'panier', component:PanierComponent},
  {path:'historique-component', component:CommandeHistoriqueComponent},
  {path:'category', component:CategoryComponent},
  {path:'profile', component:ProfileComponent},
  {path:'update_profile', component:UpdateProfileComponent}
 // {path:'' , redirectTo:'/', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
