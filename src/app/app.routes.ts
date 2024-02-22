import { Routes } from '@angular/router';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { LocationsPageComponent } from './components/locations-page/locations-page.component';
import { JoinPageComponent } from './components/join-page/join-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { ShoppingCartPageComponent } from './components/shopping-cart-page/shopping-cart-page.component';
import { MyAccountPageComponent } from './components/my-account-page/my-account-page.component';

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
    title: 'About us',
  },
  {
    path: 'shopping-cart-page',
    component: ShoppingCartPageComponent,
    title: 'Shopping cart',
  },
  {
    path: 'my-account-page',
    component: MyAccountPageComponent,
    title: 'My account',
  },
];
