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
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("157615515171213")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("396889746308-1choukjth13ep88uthmjkd8u0dqm40el.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}


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
    MatSlideToggleModule,
    SocialLoginModule
  ],
  providers: [
    ModalService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
