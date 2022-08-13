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
import { Demo6Component } from './demo/demo6/demo6.component';
import { Demo7Component } from './demo/demo7/demo7.component';
import {TargetComponent } from './demo/demo7/target/target.component';
import { Demo8Component } from './demo/demo8/demo8.component';
import { GeekManagementComponent } from './exos/geek-management/geek-management.component';
import { CreateComponent } from './exos/geek-management/create/create.component';
import { ShowComponent } from './exos/geek-management/show/show.component';



const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'demo', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', component : Demo5Component},
    {path : 'demo6', component : Demo6Component},
    {path : 'demo7', component : Demo7Component},
    {path : 'target/:id', component : TargetComponent},
    {path : 'demo8', component : Demo8Component},
  ]},
  {path : 'exos', component : ExosComponent, children : [
    {path : 'chrono', component : ChronoComponent},
    {path : 'calc', component : CalcComponent},
    {path : 'shopping', component : ShoppingComponent},
    {path : 'shopping2', component : Shopping2Component},
    {path : 'geek_mng', component : GeekManagementComponent, children : [
      {path : 'create', component : CreateComponent},
      {path : 'show', component : ShowComponent},
    ]}
  ]},
  {path : '**', redirectTo : 'home'} //permet de rediriger vers home tout ce qui n'a pas été déclaré comme chemin dans le routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
