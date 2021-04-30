import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatBadgeModule} from '@angular/material/badge';

import { SlideComponent } from './slide/slide.component';
import { CardsComponent } from './cards/cards.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';

import { ProduitPageComponent } from './produit-page/produit-page.component';
import {MatTabsModule} from '@angular/material/tabs';


import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import { SeConnecterComponent } from './auth/se-connecter/se-connecter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule  } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MotdepasseComponent } from './auth/motdepasse/motdepasse.component';
import { NvcompteComponent } from './auth/nvcompte/nvcompte.component';
import { AuthInterceptorInterceptor } from './auth/auth-interceptor.interceptor';
import { PanierComponent } from './panier/panier.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CategoryComponent } from './category/category.component';
import {MatSelectModule} from '@angular/material/select';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommandeHistoriqueComponent } from './commande-historique/commande-historique.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileComponent } from './profile/profile.component';

import {MatDialogModule , MatDialogRef} from '@angular/material/dialog'; // yy

@NgModule({
  declarations: [
    AppComponent,
    SeConnecterComponent,
    MotdepasseComponent,
    NvcompteComponent,
    NavbarComponent,
    FooterComponent,
    SlideComponent,
    CardsComponent,
    ProduitPageComponent,
    HomeComponent,
    PanierComponent,
    CategoryComponent,
    CommandeHistoriqueComponent,
    UpdateProfileComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule, // yy
    FormsModule,
    NgxSliderModule,
    MatCheckboxModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2OrderModule,
    MatSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    CarouselModule,
    MatCarouselModule.forRoot(),
    MatBadgeModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [{ 
    provide:[HTTP_INTERCEPTORS, MatDialogRef], 
    useClass: AuthInterceptorInterceptor, 
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
