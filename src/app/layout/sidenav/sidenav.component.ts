import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LISTS } from './list-array';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

  lists = LISTS;

  constructor() { }

  ngOnInit() {
  }

}
