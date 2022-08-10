import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Demo3Component } from './demo/demo3/demo3.component';
import { Demo4Component } from './demo/demo4/demo4.component';
import { HomeComponent } from './home/home.component';
import { ExosComponent } from './exos/exos.component';
import { CalcComponent } from './exos/calc/calc.component';
import { ChronoComponent } from './exos/chrono/chrono.component';
import {ShoppingComponent } from './exos/shopping/shopping.component';
import { Demo5Component } from './demo/demo5/demo5.component';
import { Shopping2Component } from './exos/shopping2/shopping2.component';


const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', component : Demo5Component},
  ]},
  {path : 'exos', component : ExosComponent, children : [
    {path : 'chrono', component : ChronoComponent},
    {path : 'calc', component : CalcComponent},
    {path : 'shopping', component : ShoppingComponent},
    {path : 'shopping2', component : Shopping2Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
