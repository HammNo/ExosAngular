import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Demo6Component } from './demo/demo6/demo6.component';
import { Demo7Component } from './demo/demo7/demo7.component';
import { TargetComponent } from './demo/demo7/target/target.component';
import { Demo8Component } from './demo/demo8/demo8.component';
import { GeekManagementComponent } from './exos/geek-management/geek-management.component';
import { CreateComponent } from './exos/geek-management/create/create.component';
import { ShowComponent } from './exos/geek-management/show/show.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

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
    Demo6Component,
    Demo7Component,
    TargetComponent,
    Demo8Component,
    GeekManagementComponent,
    CreateComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    ConfirmDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
