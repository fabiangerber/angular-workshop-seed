import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flight-basket',
  templateUrl: './flight-basket.component.html',
  styleUrls: ['./flight-basket.component.scss']
})
export class FlightBasketComponent implements OnInit {

  @Input() selectedFlightIds: boolean;
  constructor() { }

  ngOnInit() {
  }

}
