import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureRoutingModule } from './furniture.routing';
import { FurnitureComponent } from './furniture.component';


@NgModule({
  declarations: [
  FurnitureListComponent,
  FurnitureDetailsComponent,
  FurnitureComponent
],
  imports: [
    CommonModule,
    FurnitureRoutingModule
    
  ]

})
export class FurnitureModule { }
