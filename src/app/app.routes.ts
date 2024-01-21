import { Routes } from '@angular/router';

import {HomeComponent} from '../component/home/home.component';
import {AboutUsComponent} from '../component/about-us/about-us.component';
import {ContactUsComponent} from '../component/contact-us/contact-us.component';
import {ReservationComponent} from '../component/reservation/reservation.component';

export const routes: Routes = [{path: '', redirectTo:'home', pathMatch:'full'}, {path: 'home', component: HomeComponent}, {path: 'reservation', component: ReservationComponent}, {path: 'about-us', component: AboutUsComponent},{path: 'contact-us', component: ContactUsComponent}];
