import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TextboxComponent } from './welcome/textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { GreetingComponent } from './welcome/greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TextboxComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
