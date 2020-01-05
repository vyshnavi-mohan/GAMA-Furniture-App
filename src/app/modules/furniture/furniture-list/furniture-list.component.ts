import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
