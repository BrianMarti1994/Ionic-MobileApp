import { Component } from '@angular/core';
import{BookingService}from'src/app/Shared/booking.service';
import { booking } from 'src/app/Home/home/booking';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  bookingArray: any = [];
  constructor(private BookingService:BookingService) {
    this.BookingService.getBooking().subscribe(list =>{
      this.bookingArray = [];
      list.forEach( item => { 
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.bookingArray.push(a as booking)
      })
    });

  }

}
