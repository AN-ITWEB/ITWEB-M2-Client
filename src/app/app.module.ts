import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSlideToggle, MatSlideToggleModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './_directives';
import { ModalService } from './_services';
import { routing }        from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    MatSlideToggleModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
