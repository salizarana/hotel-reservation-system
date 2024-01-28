import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Guest } from '../../interface/guest';

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.css',
})

export class ReservationDetailComponent {
  @Input() guest: Guest;
}
