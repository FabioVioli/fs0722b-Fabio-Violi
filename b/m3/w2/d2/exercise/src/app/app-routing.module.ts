import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './components/prova/prova.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'prova',
    component: ProvaComponent
  },
  {
    path:'',
    component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
