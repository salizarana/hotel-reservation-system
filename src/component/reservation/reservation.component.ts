import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomComponent } from '../room/room.component';
import { CommonModule, DatePipe } from '@angular/common';
import { Room } from '../../interface/room';
import { BookingsComponent } from '../bookings/bookings.component';
import { RoomService } from '../../services/room.service';
import { HttpClientModule } from '@angular/common/http';
import { ReservationDetailComponent } from '../reservation-detail/reservation-detail.component';
import { Guest } from '../../interface/guest';
import { ReservationRequest } from '../../interface/reservation';
import { Router } from '@angular/router';
import { InvoiceResponse } from '../../interface/invoice';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    FormsModule,
    RoomComponent,
    CommonModule,
    BookingsComponent,
    ReservationDetailComponent,
    HttpClientModule,
  ],
  providers: [RoomService, DatePipe],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent implements OnInit {
  rooms: Room[] = [];

  error_message = '';
  days: number = 1;

  tomorrow = (): Date => {
    const today = new Date();
    today.setDate(today.getDate() + this.days);
    return today;
  };

  today = new Date();
  searchParams: any = {
    checkInDate: this.datePipe.transform(this.today, 'yyyy-MM-dd'),
    checkOutDate: this.datePipe.transform(this.tomorrow(), 'yyyy-MM-dd'),
    guestCount: 1,
    roomCount: 1,
  };
  selectedRooms: Room[] = [];

  guest: Guest = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  constructor(
    private roomService: RoomService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {}

  getDateDifferenceInDays(startDate: Date, endDate: Date): number {
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const startUTC = Date.UTC(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );
    const endUTC = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );

    return Math.floor((endUTC - startUTC) / millisecondsPerDay);
  }

  searchAvailableRooms() {
    console.log(this.searchParams);
    this.roomService.getRoomList(this.searchParams).subscribe((response) => {
      // console.log(response);
      if (response) {
        this.rooms = response;
      } else {
        this.error_message = 'Rooms not found.';
      }
    });
  }

  onSubmit(searchForm: NgForm) {
    this.searchAvailableRooms();

    this.days = this.getDateDifferenceInDays(
      new Date(this.searchParams.checkInDate),
      new Date(this.searchParams.checkOutDate)
    );
  }

  selectRoom(roomId: number) {
    // let selectedRoom = { ..room, isSelected: true }

    // console.log(roomId);
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
      if (room.id == roomId) {
        room.isSelected = false;
      }
    });
  }

  reserve() {
    // console.log(this.guest)
    const requestPayload: ReservationRequest = {
      guest: this.guest,
      roomIds: this.selectedRooms.map((room) => room.id),
      checkInDate: this.searchParams.checkInDate,
      checkOutDate: this.searchParams.checkOutDate,
    };

    console.log(requestPayload);

    let invoice: InvoiceResponse;
    this.roomService.reserveRooms(requestPayload).subscribe(
      (response) => {
        console.log(response);
        invoice = response;

        this.router.navigateByUrl('/invoice', {
          state: invoice,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
