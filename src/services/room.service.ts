import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../interface/room';
import { SearchParam } from '../interface/searchParam';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiUrl = 'http://localhost:5271/api/rooms';

  constructor(private http: HttpClient) {}

  getRoomList(queryParams?: SearchParam) {
    return this.http.get<Room[]>(this.apiUrl);
  }
}
