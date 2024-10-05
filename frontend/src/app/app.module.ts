import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';

import { EmpleadosComponent} from './components/empleados/empleados.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
