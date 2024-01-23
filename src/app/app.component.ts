import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReservationComponent } from '../component/reservation/reservation.component';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel-reservation-system';
}
