import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthModule } from '@modules/auth/auth.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    SidenavComponent,
    NavComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // 3rd party
    AuthModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    AppRoutingModule,

 

    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
