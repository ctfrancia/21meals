import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
//import { MatCardModule, MatInputModule, MatButtonModule, MatGridList, MatGridTile, MatGridListModule } from '@angular/material'
import { DemoMaterialModule } from './material-module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DemoMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
