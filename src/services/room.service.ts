import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiUrl = 'http://localhost:5271/api/Rooms';

  constructor(private http: HttpClient) {}

  getRoomList(queryParams: any = {}) {
    return this.http.get<any>(this.apiUrl, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
  }
}
