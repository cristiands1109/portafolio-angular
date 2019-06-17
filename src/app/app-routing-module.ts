import { Routes, RouterModule } from '@angular/router';

import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';




const app_routes: Routes = [
{ path: 'home', component: PortafolioComponent },
{ path: 'about', component: AboutComponent },
{ path: 'item', component: ItemComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot ( app_routes, {useHash: true} );
