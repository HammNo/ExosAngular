import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './demo/demo.component';
import { NavComponent } from './nav/nav.component';
import { EurotobtPipe } from './shared/eurotobt.pipe';
import { ChronoComponent } from './exos/chrono/chrono.component';
import { ChronoPipe } from './shared/chrono.pipe';
import { CalcComponent } from './exos/calc/calc.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { HighlightDirectiveDirective } from './shared/highlight-directive.directive';
import { Demo4Component } from './demo/demo4/demo4.component';
import { Dem4ChildComponent } from './demo/demo4/dem4-child/dem4-child.component';
import { ExosComponent } from './exos/exos.component';
import { ShoppingComponent } from './exos/shopping/shopping.component';
import { ShopListComponent } from './exos/shopping/shop-list/shop-list.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { Shopping2Component } from './exos/shopping2/shopping2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Demo2Component,
    DemoComponent,
    NavComponent,
    EurotobtPipe,
    ChronoComponent,
    ChronoPipe,
    CalcComponent,
    Demo3Component,
    HighlightDirectiveDirective,
    Demo4Component,
    Dem4ChildComponent,
    ExosComponent,
    ShoppingComponent,
    ShopListComponent,
    Demo5Component,
    Shopping2Component,
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
