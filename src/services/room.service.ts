import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../interface/room';
import { SearchParam } from '../interface/searchParam';
import { ReservationRequest } from '../interface/reservation';
import { InvoiceResponse } from '../interface/invoice';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'http://localhost:5271/api/';

  constructor(private http: HttpClient) {}

  getRoomList(queryParams: any) {
    let myParams = {
      checkInDate: queryParams.checkInDate,
      checkOutDate: queryParams.checkOutDate,
      guestCount: queryParams.guestCount,
      roomCount: queryParams.roomCount
    }
    
    return this.http.get<Room[]>(this.apiUrl + 'rooms', { params: myParams });
  }

  reserveRooms(reservationPayload: ReservationRequest) {
    return this.http.post<InvoiceResponse>(this.apiUrl + 'reservations', reservationPayload)
  }
}
