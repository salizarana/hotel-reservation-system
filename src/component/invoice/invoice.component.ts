import { Component } from '@angular/core';
import { Invoice } from '../../interface/invoice';
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
  invoice: Invoice[] = [
    {
      date: '01/01/2024',
      invoiceNumber: 10001,
      fullName: 'Saliza Rana Magar',
      phoneNumber: 9811111111,
      email: 'saliza@gmail.com',
      serialNumber: 1,
      roomNumber: 101,
      roomType: 'Deluxe Room',
      arrivalDate: '01/02/2014',
      departureDate: '01/03/2024',
      rate: 1000,
      amount: 1000,
      subTotal: 1000,
      discount: 0,
      total: 1000,
    },
  ];
}
