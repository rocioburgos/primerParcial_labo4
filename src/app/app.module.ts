import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
 
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import {FormsModule, ReactiveFormsModule} from"@angular/forms";
import { ListadoComponent } from './componentes/listado/listado.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,AngularFireModule.initializeApp(environment.firebase)
    ,AngularFireAuthModule
    ,AngularFirestoreModule
    ,FormsModule
    ,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
