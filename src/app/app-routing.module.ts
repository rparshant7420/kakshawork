import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { TempformComponent } from './tempform/tempform.component';

const routes: Routes = [
  // {
  //   path:"ghar",
  //   component:
  // },
  
  {
    path:"tform",
    component:TempformComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"**",
    component:PagenotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
