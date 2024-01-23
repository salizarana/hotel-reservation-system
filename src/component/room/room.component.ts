import { Component } from '@angular/core';
import { Room } from '../../interface/room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css',
})
export class RoomComponent {
  constructor() {}
  rooms: Room[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      capacity: 2,
      pricePerNight: 1000,
      photos: ['room.png'],
      isBooked: true,
      description:
        'Immerse yourself in luxury with tastefully designed furnishings that blend style and comfort seamlessly.',
      features: ['Attach Bathroom', 'Balcony'],
    },

    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      capacity: 2,
      pricePerNight: 1000,
      photos: ['room.png'],
      isBooked: true,
      description:
        'Immerse yourself in luxury with tastefully designed furnishings that blend style and comfort seamlessly.',
      features: ['Attach Bathroom', 'Balcony'],
    },

    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      capacity: 2,
      pricePerNight: 1000,
      photos: ['room.png'],
      isBooked: true,
      description:
        'Immerse yourself in luxury with tastefully designed furnishings that blend style and comfort seamlessly.',
      features: ['Attach Bathroom', 'Balcony'],
    },
  ];
}
