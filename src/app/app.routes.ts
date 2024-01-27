import { Routes } from '@angular/router';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DeliversPageComponent } from './delivers-page/delivers-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuBarComponent,
    title: 'Bakery',
  },
  {
    path: 'menu-page',
    component: MenuPageComponent,
    title: 'Menu',
  },
  {
    path: 'delivers-page',
    component: DeliversPageComponent,
    title: 'Delivers'
  },
  {
    path: 'locations-page',
    component: LocationsPageComponent,
    title: 'Locations',
  },
  {
    path: 'join-page',
    component: JoinPageComponent,
    title: 'Join our team'
  },
  {
    path: 'about-us-page',
    component: AboutUsPageComponent,
    title: 'About Us',
  },
];
