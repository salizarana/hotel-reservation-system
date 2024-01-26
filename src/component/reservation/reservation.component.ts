import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomComponent } from '../room/room.component';
import { CommonModule } from '@angular/common';
import { Room } from '../../interface/room';
import { BookingsComponent } from '../bookings/bookings.component';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [FormsModule, RoomComponent, CommonModule, BookingsComponent],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent implements OnInit {
  rooms: Room[] = [
    // {
    //   roomNumber: 101,
    //   roomType: 'Deluxe Room',
    //   capacity: 2,
    //   pricePerNight: 1000,
    //   photos: ['room.png'],
    //   isBooked: true,
    //   description:
    //     'Immerse yourself in luxury with tastefully designed furnishings that blend style and comfort seamlessly.',
    //   features: ['Attach Bathroom', 'Balcony'],
    // },
    // {
    //   roomNumber: 101,
    //   roomType: 'Deluxe Room',
    //   capacity: 2,
    //   pricePerNight: 1000,
    //   photos: ['room.png'],
    //   isBooked: true,
    //   description:
    //     'Immerse yourself in luxury with tastefully designed furnishings that blend style and comfort seamlessly.',
    //   features: ['Attach Bathroom', 'Balcony'],
    // },
    // {
    //   roomNumber: 101,
    //   roomType: 'Deluxe Room',
    //   capacity: 2,
    //   pricePerNight: 1000,
    //   photos: ['room.png'],
    //   isBooked: true,
    //   description:
    //     'Immerse yourself in luxury with tastefully designed furnishings that blend style and comfort seamlessly.',
    //   features: ['Attach Bathroom', 'Balcony'],
    // },
  ];
  searchParams = {
    roomType: '',
    capacity: '',
    pricePerNight: '',
    description: '',
    photos: '',
    features: '',
  };

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    // this.getRoomList();
  }

  onSubmit(searchForm: NgForm) {
    console.log(searchForm.value);
  }
}
