import { Component } from '@angular/core';
import { InvoiceResponse } from '../../interface/invoice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  constructor() {}
  invoice: InvoiceResponse[] = [
    {
      reservationId: 10001,
      guest: {
        firstName: 'Saliza',
        lastName: 'Rana',
        phone: '9811111111',
        email: 'saliza@gmail.com',
        address: 'Kumaripati',
      },
      roomReserved: [
        {
          id: 11,
          roomId: 1,
          roomType: 'Single',
          ratePerNight: 1000,
        },
        {
          id: 11,
          roomId: 2,
          roomType: 'Double',
          ratePerNight: 2000,
        },
      ],
      checkInDate: new Date('01/02/2014'),
      checkOutDate: new Date('01/03/2024'),
      nightCount: 2,
      grossTotal: 1000,
      discountPercent: 0,
      netTotal: 1000,
      createdAt: new Date(),
    },
  ];
}
