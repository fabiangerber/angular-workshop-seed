import {Component, QueryList, ViewChildren} from '@angular/core';
import {Flight} from '../../core/api/models/flight';
import {FlightResource} from '../../core/api/resources/flight.resource';
import {FlightCardComponent} from './components/flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  from: string;
  to: string;
  selectedFlightIds: { [key: string]: boolean } = {};
  flights: Flight[] = [];

  fr: FlightResource;

  @ViewChildren(FlightCardComponent)
  flightCardList: QueryList<FlightCardComponent>;

  constructor(fr: FlightResource) {
    this.fr = fr;
    this.searchFlights('', '');
  }

  toggleAll() {
    this.flightCardList
      .toArray()
      .forEach((flight) => flight.toggleSelect()
      )
  }

  searchFlights(f, t) {
    this.fr.find(f, t)
      .subscribe(
        newFlights => {
          this.flights = newFlights;
        }
      );
  }

  selectFlight(id: string) {
    this.selectedFlightIds[id] = !this.selectedFlightIds[id];
  }

  clearBasket() {
    this.selectedFlightIds = {};
  }

}
