import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  onSubmit(searchForm: NgForm) {
    console.log(searchForm.value);
  }
}
