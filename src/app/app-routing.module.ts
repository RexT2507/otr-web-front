import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MapsComponent } from './components/maps/maps.component';


const routes: Routes = [
  {
    path: 'presentation',
    component: PresentationComponent,
    children: [
      {
        path: 'map',
        component: MapsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
