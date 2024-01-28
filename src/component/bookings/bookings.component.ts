import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Room } from '../../interface/room';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent implements DoCheck {
  @Input() rooms: Room[];
  @Input() days: number;

  subTotal: number;
  discountPercent: number = 0;
  discountAmount: number = 0;

  ngDoCheck() {
    // if (changes) {
      // console.log(changes)
      console.log(`Rooms Length: ${this.rooms.length}`)
      this.subTotal = this.calculateSubTotal()
      this.discountPercent = this.rooms.length >=3 ? 5 : 0;
      this.discountAmount = (this.subTotal * this.discountPercent / 100)
    // }
  }

  calculateSubTotal() {
    let subTotal = 0;
    this.rooms.forEach(room => {
      subTotal += room.ratePerNight * this.days
    });

    return subTotal
  }
}
