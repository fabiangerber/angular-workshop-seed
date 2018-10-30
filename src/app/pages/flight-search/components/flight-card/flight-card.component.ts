import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../../core/api/models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input() flight: Flight;
  @Input() selected: boolean;

  select() {
    this.selected = true;
  }

  deselect() {
    this.selected = false;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
