import { Routes } from '@angular/router';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { DeliversPageComponent } from './components/delivers-page/delivers-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { JoinPageComponent } from './components/join-page/join-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { PageContentComponent } from './components/page-content/page-content.component';

export const routes: Routes = [
  {
    path: '',
    component: PageContentComponent,
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
