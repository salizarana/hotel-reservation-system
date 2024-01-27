import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomComponent } from '../room/room.component';
import { CommonModule } from '@angular/common';
import { Room } from '../../interface/room';
import { BookingsComponent } from '../bookings/bookings.component';
import { RoomService } from '../../services/room.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchParam } from '../../interface/searchParam';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    FormsModule,
    RoomComponent,
    CommonModule,
    BookingsComponent,
    HttpClientModule,
  ],
  providers: [RoomService],
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

  tomorrow = (): Date => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today;
  };

  today = new Date();
  searchParams: SearchParam = {
    checkInDate: this.today,
    checkOutDate: this.tomorrow(),
    guestCount: 0,
    roomCount: 0,
  };
  selectedRooms: Room[] = [];
  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getRoomList().subscribe((response) => {
      console.log(response);
      this.rooms = response;
    });
  }

  onSubmit(searchForm: NgForm) {
    console.log(searchForm.value);
  }

  selectRoom(roomId: number) {
    // let selectedRoom = { ..room, isSelected: true }

    console.log(roomId);
    this.rooms.map((room) => {
      if (room.id == roomId) {
        room.isSelected = true;
        this.selectedRooms.push(room);
      }
      return room;
    });
  }

  unselectRoom(roomId: number) {
    let result = this.selectedRooms.filter((room) => room.id != roomId);
    this.selectedRooms = result;
    console.log(roomId);
    this.rooms.map((room) => {
      room.isSelected = false;
    });
  }
}
