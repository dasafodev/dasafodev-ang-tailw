import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PrimaryComponent } from './buttons/primary/primary.component';
import { SecondaryComponent } from './buttons/secondary/secondary.component';
import { SquareComponent } from './square/square.component';
import { WorkArticleComponent } from './work-article/work-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PrimaryComponent,
    SecondaryComponent,
    SquareComponent,
    WorkArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
