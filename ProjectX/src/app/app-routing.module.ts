import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PredictionComponent } from './prediction/prediction.component';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { MonteCarloComponent } from './monte-carlo/monte-carlo.component';


const routes: Routes = [
  {path: 'home' , component : HomeComponent},
  {path: 'prediction' , component : PredictionComponent},
  {path: 'compare' , component : CompareComponent},
  {path: 'monte-carlo' , component : MonteCarloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PredictionComponent]
