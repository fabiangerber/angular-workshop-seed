import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flight} from '../../../../core/api/models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit {

  @Input() flight: Flight;
  @Input() selected: boolean;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();

  toggleSelect() {
    this.selectedChange.emit(this.flight.id);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
