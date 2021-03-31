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
    PanierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
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
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
