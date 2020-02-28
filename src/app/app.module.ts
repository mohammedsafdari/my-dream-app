import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { HrModule } from './hr/hr.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HrModule
  ],
  providers: [],
  bootstrap: [AppComponent, TestComponent]
})
export class AppModule { }
