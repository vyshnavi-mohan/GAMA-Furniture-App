import { Component, OnInit } from '@angular/core';

import { environment } from '@env';
import { Observable } from 'rxjs';
import { ThemeService } from 'app/core/service/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public version = environment.version;
  public repoUrl = 'https://github.com/mathisGarberg/angular-folder-structure';
  public isDarkTheme$: Observable<boolean>;

  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' },
    { link: '/cart', title: 'Cart' }
  ];

  constructor(
    private themeService: ThemeService,
    private router:Router
  ) {}

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.getDarkTheme();
  }

  toggleTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
