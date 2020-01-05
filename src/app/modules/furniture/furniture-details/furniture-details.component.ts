import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FurnitureDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
