import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.css',
})
export class ReservationDetailComponent {
  onSubmit(getForm: NgForm) {
    console.log(getForm.value);
  }
}
