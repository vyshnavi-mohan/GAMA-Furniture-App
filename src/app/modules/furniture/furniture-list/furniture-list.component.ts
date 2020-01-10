import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FurnitureApiService } from '@shared/service/furniture-api.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureListComponent implements OnInit {

  constructor(private router:Router,
    private api: FurnitureApiService) { 
  }

  ngOnInit() {

  }

  furniturelist  = this.api.getAllFurniture().pipe();

  login(){
    this.router.navigate(['login']);
  }

  details(){
    this.router.navigate(['furniture/details']);
  }

}
