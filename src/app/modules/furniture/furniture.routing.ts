import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureComponent } from './furniture.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component:FurnitureComponent,
    children: [
      {
        path: 'list',
        component: FurnitureListComponent
      },
      {
        path: 'details',
        component: FurnitureDetailsComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule {}
