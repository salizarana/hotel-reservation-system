import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceResponse } from '../../interface/invoice';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent implements OnInit {
  invoice: InvoiceResponse;

  constructor(private router: Router, private route: ActivatedRoute) {
    // console.log(this.router.getCurrentNavigation()?.extras.state)
    this.invoice = this.router.getCurrentNavigation()?.extras.state as InvoiceResponse;
  }

  // invoice: InvoiceResponse = {
  //   reservationId: 10001,
  //   guest: {
  //     firstName: 'Saliza',
  //     lastName: 'Rana',
  //     phone: '9811111111',
  //     email: 'saliza@gmail.com',
  //     address: 'Kumaripati',
  //   },
  //   roomReserved: [
  //     {
  //       id: 11,
  //       roomId: 1,
  //       roomType: 'Single',
  //       ratePerNight: 1000,
  //     },
  //     {
  //       id: 11,
  //       roomId: 2,
  //       roomType: 'Double',
  //       ratePerNight: 2000,
  //     },
  //   ],
  //   checkInDate: new Date('01/02/2024'),
  //   checkOutDate: new Date('01/03/2024'),
  //   days: 2,
  //   subTotal: 1000,
  //   discountPercent: 0,
  //   discountAmount: 0,
  //   netTotal: 1000,
  //   createdAt: new Date(),
  // };

  ngOnInit(): void {
    // const navigationState = this.route.snapshot.paramMap.get('state');

    // console.log(this.route)
    // Access the data from state
    // if (navigationState) {
    //   this.invoice = navigationState.data;
    // }
  }
}
